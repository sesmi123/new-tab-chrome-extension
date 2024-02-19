function updateDateTime() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, "0");
  var minutes = now.getMinutes().toString().padStart(2, "0");
  var seconds = now.getSeconds().toString().padStart(2, "0");
  var currentTimeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("current-time").textContent = currentTimeString;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var currentDay = days[now.getDay()];
  var currentDate = now.getDate();
  var currentMonth = months[now.getMonth()];
  var currentYear = now.getFullYear();
  var dateString =
    currentDay + ", " + currentMonth + " " + currentDate + ", " + currentYear;
  document.getElementById("current-date").textContent = dateString;
}

// Update time every second
setInterval(updateDateTime, 1000);

// Initial call to display time immediately
updateDateTime();
