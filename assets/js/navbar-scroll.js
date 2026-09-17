document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) { // 50px后变色，可调整
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});