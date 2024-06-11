var chart1 = {
  series: [
    {
      name: "Sustainable Development Goals",
      data: [0, 0, 3, 3, 2, 3, 2, 6, 5, 4, 3, 3, 6, 1, 2, 3],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      horizontal: true,
    
    },
  },
  colors: ["#8DA2B3"],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "No Poverty",
      "Zero Hunger",
      "Good Health and Well-being",
      "Quality Education",
      "Gender Equality",
      "Clean Water and Sanitation",
      "Affordable and Clean Energy",
      "Decent Work and Economic Growth",
      "Industry, Innovation, and Infrastructure",
      "Reduced Inequality",
      "Sustainable Cities and Communities",
      "Climate Action",
      "Life Below Water",
      "Life on Land",
      "Peace, Justice, and Strong Institutions",
      "Partnerships for the Goals",
    ],
  },
};




// CHART NO 2






var chart2 = {
  series: [
    {
      name: "Technology",
      data: [2, 3, 4, 5, 1, 2, 6, 8],
    },
  ],
  chart: {
    type: "bar",
    height: 230,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      horizontal: true,
    
    },
  },
  colors: ["#8DA2B3"],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Database Management System",
      "Data Analytics",
      "Chatbot & AI",
      "Data Security & Risk",
      "Information Kiosk",
      "User Experience",
      "Mobile Application",
      "Web Application",
    ],
  },
};

var chart_1 = new ApexCharts(document.querySelector("#firstChart"), chart1);
chart_1.render();
var chart_2 = new ApexCharts(document.querySelector("#secondChart"), chart2);
chart_2.render();
