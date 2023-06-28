const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let info = document.createElement("div");
    let birthDate = document.createElement("p");
    let birthPlace = document.createElement("p");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");

    info.setAttribute("class", "info-box");

    card.setAttribute("class", "card");

    // Append the section(card) with the created elements
    card.appendChild(h2);

    info.appendChild(birthDate);
    info.appendChild(birthPlace);
    card.appendChild(info);

    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();
