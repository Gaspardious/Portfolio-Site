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





function openNav() {
    document.getElementById("myNav").style.width = "60%";
    document.getElementById("backgroundOverlay").style.display = "block";
    backgroundOverlay.style.opacity = "1"; 
}

function closeNav() {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("backgroundOverlay").style.display = "none";
    backgroundOverlay.style.opacity = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById('myNav');
    var overlayContent = document.querySelector('.overlay-content');
    var backgroundOverlay = document.getElementById('backgroundOverlay');
    var navLinks = document.querySelectorAll('.overlay-content a'); // Select all nav links


    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeNav();
        });
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closeNav();
        }
    });

    backgroundOverlay.addEventListener('click', function() {
        closeNav();
    });

    overlayContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

   // This ensures that the background overlay disappears from the layout when it's fully transparent
   backgroundOverlay.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'opacity' && backgroundOverlay.style.opacity === '0') {
        backgroundOverlay.style.display = 'none';
    }
});

function openNav() {
document.getElementById("myNav").style.width = "60%";
var backgroundOverlay = document.getElementById("backgroundOverlay");
backgroundOverlay.style.display = 'block';  // Make sure the element is display block before changing opacity
setTimeout(function() {  // Ensure the display change has taken effect
    backgroundOverlay.style.opacity = '1';
}, 10);  // Small timeout to ensure the display property has taken effect
}