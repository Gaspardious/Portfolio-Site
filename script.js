document.addEventListener('DOMContentLoaded', function () {

  const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      section && section.scrollIntoView({ behavior: 'smooth' });
  };


  const menuLinks = document.querySelectorAll('.menu-link');
  const logo = document.getElementById('logo');

  menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          scrollToSection(link.getAttribute('href').substring(1));
      });
  });


  logo && logo.addEventListener('click', () => {
      scrollToSection('home');
  });


  const menuButton = document.getElementById('menu');
  menuButton && menuButton.addEventListener('click', () => {
      const nav = document.getElementById('nav');
      nav && nav.classList.toggle('show');
  });
});







function openNav() {
    document.getElementById("myNav").style.width = "60%";
    var backgroundOverlay = document.getElementById("backgroundOverlay");
    backgroundOverlay.style.display = 'block';  
    setTimeout(function() {  
        backgroundOverlay.style.opacity = '1';        
    }, 20);  
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
    var navLinks = document.querySelectorAll('.overlay-content a'); 


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

  
   backgroundOverlay.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'opacity' && backgroundOverlay.style.opacity === '0') {
        backgroundOverlay.style.display = 'none';
    }
});