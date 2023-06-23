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

const cardViewButton = document.getElementById("cardViewButton");
const listViewButton = document.getElementById("listViewButton");
let currentView = "card"; // Initial view mode

cardViewButton.addEventListener("click", () => {
  if (currentView !== "card") {
    currentView = "card";
    getBusinessData();
  }
});

listViewButton.addEventListener("click", () => {
  if (currentView !== "list") {
    currentView = "list";
    getBusinessData();
  }
});

const createCardView = (business) => {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let image = document.createElement("img");
  let info = document.createElement("div");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");

  h2.textContent = business.name;
  address.textContent = business.address;
  phone.textContent = business.phone;
  website.textContent = business.website;

  website.setAttribute("href", business.website);
  image.setAttribute("src", business.image);
  image.setAttribute("alt", `Portrait of ${business.name}`);
  image.setAttribute("loading", "lazy");
  image.setAttribute("width", "600");
  image.setAttribute("height", "400");

  info.setAttribute("class", "info-box");

  card.setAttribute("class", "card");

  card.appendChild(h2);
  info.appendChild(address);
  info.appendChild(phone);
  card.appendChild(info);
  info.appendChild(website);

  return card;
};

const createListView = (business) => {
  let tableRow = document.createElement("tr");

  let nameCell = document.createElement("td");
  let addressCell = document.createElement("td");
  let phoneCell = document.createElement("td");
  let websiteCell = document.createElement("td");

  nameCell.textContent = business.name;
  addressCell.textContent = business.address;
  phoneCell.textContent = business.phone;

  let websiteLink = document.createElement("a");
  websiteLink.textContent = business.website;
  websiteLink.setAttribute("href", business.website);
  websiteLink.target = "_blank"; // Open the link in a new tab

  websiteCell.appendChild(websiteLink);

  tableRow.appendChild(nameCell);
  tableRow.appendChild(addressCell);
  tableRow.appendChild(phoneCell);
  tableRow.appendChild(websiteCell);

  return tableRow;
};

const displayBusinesses = (businesses, viewMode) => {
  const container = document.querySelector("div.cards"); // select the output container element

  // Clear the container before rendering the new view
  container.innerHTML = "";

  businesses.forEach((business) => {
    let item;

    if (viewMode === "card") {
      item = createCardView(business);
    } else {
      item = createListView(business);
    }

    container.appendChild(item);
  });

  // Update CSS based on view mode
  container.classList.toggle("list-view", viewMode === "list");
};

async function getBusinessData() {
  const response = await fetch("data.json");
  const data = await response.json();
  console.table(data.businesses);
  displayBusinesses(data.businesses, currentView);
}

getBusinessData();
