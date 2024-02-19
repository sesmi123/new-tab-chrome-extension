function updateDateTime() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let currentTimeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("current-time").textContent = currentTimeString;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
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
  let currentDay = days[now.getDay()];
  let currentDate = now.getDate();
  let currentMonth = months[now.getMonth()];
  let currentYear = now.getFullYear();
  let dateString =
    currentDay + ", " + currentMonth + " " + currentDate + ", " + currentYear;
  document.getElementById("current-date").textContent = dateString;
}

function fetchWeather() {
  // TODO: Fetch real-time weather data from free weather APIs
  const weatherDescription = "Partly Cloudy";
  const temperature = "27";
  const cityName = "Neonopolis";
  document.getElementById(
    "city-info"
  ).innerHTML = cityName;
  document.getElementById(
    "weather-info"
  ).innerHTML = `${weatherDescription}, ${temperature}&deg;C`;
}

// Update time every second
setInterval(updateDateTime, 1000);

// Initial call to display time immediately
updateDateTime();

fetchWeather();
