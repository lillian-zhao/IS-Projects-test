$(document).ready(function () {
  let year = [];
  let sdg = [];
  let tech = [];
  let course = [];
  $("select").formSelect();

  $("select.select_all")
    .siblings("ul")
    .prepend('<li class="sm_select_all"><span>Select All</span></li>');

  $("li.sm_select_all").on("click", function () {
    var jq_elem = $(this),
      jq_elem_span = jq_elem.find("span"),
      select_all = jq_elem_span.text() == "Select All",
      set_text = select_all ? "Select None" : "Select All";
    jq_elem_span.text(set_text);
    jq_elem
      .siblings("li")
      .filter(function () {
        return $(this).find("input").prop("checked") != select_all;
      })
      .click();
  });

  $("#tech").on("change", function () {
    var selectedValues = [];
    $(this)
      .find("option:selected")
      .each(function () {
        selectedValues.push($(this).val());
      });
    tech = selectedValues;
    console.log(tech);
  });
  $("#year").on("change", function () {
    var selectedValues = [];
    $(this)
      .find("option:selected")
      .each(function () {
        selectedValues.push($(this).val());
      });
    year = selectedValues;
    console.log(year);
  });
  $("#sdg").on("change", function () {
    var selectedValues = [];
    $(this)
      .find("option:selected")
      .each(function () {
        selectedValues.push($(this).val());
      });
    sdg = selectedValues;
    console.log(sdg);
  });
  $("#course").on("change", function () {
    var selectedValues = [];
    $(this)
      .find("option:selected")
      .each(function () {
        selectedValues.push($(this).val());
      });
    course = selectedValues;
    console.log(course);
  });

  let selectedCompany;
  $(".ClosePopup").click(function () {
    $("#popup").fadeOut();
  });
  $("#popup").click(function (event) {
    if (event.target === this) {
      $(this).fadeOut();
    }
  });

  $.ajax({
    cache:false,
    url: "./assets/js/projects.json",
    dataType: "json",
    success: function (data) {
      let filteredProjects = () => {
        var techCompanies = data.filter(function (company) {
          let filterSdg =
            sdg?.length > 0
              ? sdg.every((item) => company.sdg?.includes(item))
              : true;

          let filterTechnology =
            tech?.length > 0
              ? tech.every((item) => company.tech?.includes(item))
              : true;

          // let filterYear =
          //   year?.length > 0
          //     ? year.every((item) => company.year?.includes(item))
          //     : true;

          // let filterCourse =
          //   course?.length > 0
          //     ? course.every((item) => company.course?.includes(item))
          //     : true;

          return filterSdg && filterTechnology;
        });
        return techCompanies;
      };

      function renderProjectsByYear(projects) {
        const $companyWrapperContainer = $("#companyWrapperContainer");
        $companyWrapperContainer.empty(); // Clear previous projects

        // Check if projects is an array
        if (!Array.isArray(projects)) {
          // Handle the case where projects is not an array
          $companyWrapperContainer.html("<p>No records found</p>");
          return;
        }

        // Group projects by year
        const projectsByYear = {};
        projects.forEach((project) => {
          let year = null;

          // Auto-detect year from the 'year' field
          if (project.year) {
            year = Array.isArray(project.year) ? project.year[0] : project.year;
            year.sort(function(a, b){return b-a});
            // Extract year from date string (if applicable)
            if (typeof year === "string" && year.match(/^\d{4}$/)) {
              year = year.substring(0, 4);
            }
          }

          // If year is still null or invalid, set it to 'Unknown'
          if (!year || !parseInt(year, 10)) {
            year = "Unknown";
          }

          if (!projectsByYear[year]) {
            projectsByYear[year] = [];
          }
          projectsByYear[year].push(project);
        });

        // Render projects with headings
        Object.keys(projectsByYear).forEach((year) => {
          const yearProjects = projectsByYear[year];
          if (yearProjects.length > 0) {
            // Append year heading
            $companyWrapperContainer.append(
              `<h4 class="w-100 text-center text-red fw-semibold">Spring ${year}</h4>`
            );

            // Append projects
            yearProjects.forEach((project) => {
              const companyWrapper = $(
                '<div class="companyWrapper d-flex align-items-center"></div>'
              );

              companyWrapper.click(() => {
                clickedCompanyData = project;
                if (clickedCompanyData) {
                  $("#popup .popupLogo").attr("src", clickedCompanyData?.logo);
                  $("#popup .popup-content h6:eq(0)").html(
                    "<span class='fw-bold me-2'>Community Partner:</span>" +
                      clickedCompanyData?.partner
                  );
                  $("#popup .popup-content h6:eq(1)").html(
                    "<span class='fw-bold me-2'>Representatives:</span>" +
                      clickedCompanyData?.representatives.join(", ")
                  );
                  $("#popup .popup-content h6:eq(2)").html(
                    "<span class='fw-bold me-2'>Student Team:</span>" +
                      clickedCompanyData?.students.join(", ")
                  );
                  $("#popup .popup-content h6:eq(3)").html(
                    clickedCompanyData?.desc
                  );
                  $("#popup").fadeIn();
                  $("#popup .exectiveSummeryBtn").click(function () {
                    window.open(clickedCompanyData?.pdf, "_blank");
                  });
                }
              });

              const imgElement = $('<img class="img-fluid" alt=""/>').attr(
                "src",
                project?.logo
              );
              companyWrapper.append(imgElement);
              $companyWrapperContainer.append(companyWrapper);
            });
          }
        });

        // Show "No records found" message if no projects
        if (Object.keys(projectsByYear).length === 0) {
          $companyWrapperContainer.html("<p>No records found</p>");
        }
      }

      let projectss = filteredProjects();
      renderProjectsByYear(projectss);

      $("#tech, #year, #sdg, #course").on("change", function () {
        projectss = filteredProjects();
        renderProjectsByYear(projectss);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error loading JSON file:", textStatus, errorThrown);
    },
  });
});
