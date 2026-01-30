/**
 * N-TECH B.V. - Main JavaScript
 * Client-side interactiviteit
 */

// Wacht tot DOM geladen is
document.addEventListener('DOMContentLoaded', () => {
  console.log('N-TECH B.V. Website geladen');
  
  // Smooth scroll voor anchor links
  initSmoothScroll();
  
  // Formulier validatie
  initFormValidation();
  
  // Mobile menu (voor toekomstige uitbreiding)
  // initMobileMenu();
});

/**
 * Smooth scroll voor anchor links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip als href alleen '#' is
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Formulier validatie
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      // Basis validatie - HTML5 doet het meeste werk
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#e74c3c';
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Vul alle verplichte velden in.');
      }
    });
    
    // Reset border color bij typen
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  });
}

/**
 * Mobile menu toggle (voor toekomstige uitbreiding)
 * Kan geactiveerd worden wanneer mobile menu geïmplementeerd is
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    });
  }
}

/**
 * Fade-in animatie voor elementen bij scrollen
 * Gebruik class 'fade-in-on-scroll' op elementen
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observeer alle elementen met fade-in-on-scroll class
document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
  observer.observe(el);
});
