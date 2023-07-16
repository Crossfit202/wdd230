function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.classList.toggle('change');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}


document.addEventListener("DOMContentLoaded", function () {
  var footer = document.getElementById('last-modified');
  var lastModifiedDate = document.lastModified;
  footer.textContent = 'Last modified: ' + lastModifiedDate;
});

