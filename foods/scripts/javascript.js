const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  menu.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", function () {
  var footer = document.getElementById('last-modified');
  var lastModifiedDate = document.lastModified;
  footer.textContent = 'Last modified: ' + lastModifiedDate;
});

// javascript.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to get the current drink count from local storage
  function getDrinkCount() {
    return parseInt(localStorage.getItem("drinkCount")) || 0;
  }

  // Display the drink count in the span element
  const drinkCountSpan = document.getElementById("drinkCount");
  drinkCountSpan.textContent = getDrinkCount();
});
