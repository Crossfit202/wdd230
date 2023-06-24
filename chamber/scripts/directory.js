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
