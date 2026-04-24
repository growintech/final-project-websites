 // ===== HAMBURGER MENU FUNCTIONALITY =====
  const navMenu = document.getElementById('navMenu');
  {
      navMenu.classList.toggle('active');
  };
  
  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
      });
  });
  
  // ===== COUNTDOWN TIMER =====
  function startCountdown() {
      // Target date: May 8, 2026 at 11:59 PM
      const targetDate = new Date('2026-05-08T23:59:59').getTime();
  
      function updateCountdown() {
          const now = new Date().getTime();
          const timeRemaining = targetDate - now;
  
          if (timeRemaining < 0) {
              document.getElementById('days').textContent = '0';
              document.getElementById('hours').textContent = '0';
              document.getElementById('minutes').textContent = '0';
              document.getElementById('seconds').textContent = '0';
              return;
          }
  
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
          document.getElementById('days').textContent = String(days).padStart(2, '0');
          document.getElementById('hours').textContent = String(hours).padStart(2, '0');
          document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
          document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
      }
  
      // Update immediately
      updateCountdown();
  
      // Update every second
      setInterval(updateCountdown, 1000);
  }
  
  // Start countdown when page loads
  startCountdown();
  
  // ===== IMAGE CAROUSEL =====
    const immagini = [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg"
    ];

  // current img
    let indiceCorrente = 0;

  // Select the HTML element
    const tagImmagine = document.getElementById("mainImage");
    const btnAvanti = document.getElementById("nextBtn");
    const btnIndietro = document.getElementById("prevBtn");

  // Encrease or decrease img
    function aggiornaImmagine() {
      tagImmagine.src = immagini[indiceCorrente];
    }

  // next img
    btnAvanti.onclick = function() {
        indiceCorrente++; 
        if (indiceCorrente >= immagini.length) {
            indiceCorrente = 0; // if it finishes, restart
        }
        aggiornaImmagine();
    };

  // before img
    btnIndietro.onclick = function() {
        indiceCorrente--; 
        if (indiceCorrente < 0) {
            indiceCorrente = immagini.length - 1; // if goes below zero go to the last one
        }
        aggiornaImmagine();
    };
  
  // ===== CONTACT FORM SUBMISSION =====
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const age = document.getElementById('age').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Validate form
      if (!name || !email || !age) {
          alert('❌ Please fill in all required fields!');
          return;
      }
  
      if (age < 16 || age > 26) {
          alert('⚠️ Age must be between 16 and 26!');
          return;
      }
  
      // Show success message
      alert(`✅ Success! Thank you, ${name}!\n\nWe've received your message and will contact you at ${email} when TrackBus launches.\n\nGet ready to never be on foot again! 🚌`);
  
      // Reset form
      contactForm.reset();
  
      // Optional: Scroll back to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // ===== SMOOTH SCROLL FOR NAVIGATION LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
  