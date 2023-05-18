function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerButton").classList.toggle("open");
}

const b = document.getElementById("hamburgerButton");
b.onclick = toggleMenu;

const x = document.getElementById("");

const options = { year: "numeric" };

document.querySelector("#currentdate").textContent =
  new Date().toLocaleDateString("en-US", options);

document.getElementById("modified").innerHTML = document.lastModified;

const date = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = daysOfWeek[date.getDay()];
const months = [
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
const month = months[date.getMonth()];
const dayOfMonth = date.getDate();
const year = date.getFullYear();

const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}, ${year}`;

document.getElementById("header-date").textContent = formattedDate;
