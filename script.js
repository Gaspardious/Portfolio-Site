document.addEventListener('DOMContentLoaded', function () {

  const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      section && section.scrollIntoView({ behavior: 'smooth' });
  };

  // Event listener for the menu links and logo
  const menuLinks = document.querySelectorAll('.menu-link');
  const logo = document.getElementById('logo');

  menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          scrollToSection(link.getAttribute('href').substring(1));
      });
  });

  // Logo click event
  logo && logo.addEventListener('click', () => {
      scrollToSection('home');
  });

  // Event listener for the menu button
  const menuButton = document.getElementById('menu');
  menuButton && menuButton.addEventListener('click', () => {
      const nav = document.getElementById('nav');
      nav && nav.classList.toggle('show');
  });
});


let menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px";
  });


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
/*   document.getElementById("main").style.marginLeft= "0"; */
}