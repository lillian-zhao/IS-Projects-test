function showAlert() {
  Swal.fire({
    title: "Thank you for submitting the form!",
    text: "We will review your application and get back to you soon.",
    icon: "success",
    confirmButtonText: "OK",
  });
}

function submitForm() {
  
  var inputs = document.querySelectorAll(
    ".appInput, .checkbox-custom, .appTextArea"
  );

  var formData = {};
  var selectedCourse = document.querySelector('input[name="course"]:checked');

  if (!selectedCourse?.value) {
    alert("Please select course.");
    return false;
  }
  formData["Course"] = selectedCourse?.value;
  inputs.forEach(function (input) {
    var fieldName = input.getAttribute("id");

    var fieldValue = "";
    if (input.type === "checkbox") {
      fieldValue = input.checked ? "Yes" : "No";
    } else {
      fieldValue = input.value;
    }
    formData[fieldName] = fieldValue;
  });

  document.getElementById("submitText").style.display = "none";
  document.getElementById("spinner").style.display = "inline-block";

  const accessToken =
    "patvmOsTJGzKk2Ve8.019782e778c52ab13dadc09c3aea0474c58a9ac5f4929e6f55cc713d90abf5b1";
  const baseId = "appoZ4Oki9OwZgFuz";
  const tableName = "DemoTable";

  fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: formData,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("submitText").style.display = "inline";
      document.getElementById("spinner").style.display = "none";
      document.getElementById("applicationForm").reset();
      showAlert();
    })
    .catch((error) => {
      document.getElementById("submitText").style.display = "inline";
      document.getElementById("spinner").style.display = "none";
      console.error("Error:", error);
    });
}
