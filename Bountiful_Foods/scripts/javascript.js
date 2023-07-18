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

