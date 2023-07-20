document.addEventListener("DOMContentLoaded", function () {
  // Function to get the current drink count from local storage
  function getDrinkCount() {
    const countString = localStorage.getItem("drinkCount");
    // Parse the countString to an integer and handle invalid values
    const count = parseInt(countString, 10);
    return isNaN(count) ? 0 : count;
  }

  // Display the drink count in the span element
  const drinkCountSpan = document.getElementById("drinkCount");
  if (drinkCountSpan) {
    drinkCountSpan.textContent = getDrinkCount();
  }

  // Function to update the drink count in the local storage and span element
  function updateDrinkCount(count) {
    localStorage.setItem("drinkCount", count);
    if (drinkCountSpan) {
      drinkCountSpan.textContent = count;
    }
  }

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    menu.classList.toggle('open');
  });

  // Display the last modified date
  var footer = document.getElementById('last-modified');
  var lastModifiedDate = document.lastModified;
  footer.textContent = 'Last modified: ' + lastModifiedDate;
});
