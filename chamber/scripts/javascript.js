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

var currentDay = new Date().getDay();

// Check if it's Monday (1) or Tuesday (2)
if (currentDay === 1 || currentDay === 2) {
  // Create the banner element
  var banner = document.createElement("div");
  banner.className = "banner";
  banner.textContent =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

  // Add the banner to the top of the page
  document.body.insertBefore(banner, document.body.firstChild);
}

var contentDiv = document.getElementById("event");
var moreInfoButton = document.getElementById("moreInfoButton");

var lastVisit = localStorage.getItem("lastVisit");

var currentVisit = new Date().getTime();

localStorage.setItem("lastVisit", currentVisit);

if (lastVisit) {
  var timeDifference = currentVisit - parseInt(lastVisit);
  var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
} else {
}

document.getElementById("timeDifference").textContent =
  "Welcome Back! Days since last visit: " + daysDifference;

const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0,
  rootMarin: "0px 0px 100px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
