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
  
  // Mobile menu
  initMobileMenu();
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
 * Mobile menu toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('mobileNav');
  
  if (toggleBtn && nav) {
    // Toggle menu bij klik op hamburger
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    });
    
    // Sluit menu bij klik op een link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        toggleBtn.classList.remove('active');
      });
    });
    
    // Sluit menu bij klik buiten het menu
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggleBtn.contains(e.target)) {
        nav.classList.remove('active');
        toggleBtn.classList.remove('active');
      }
    });
    
    // Sluit menu bij escape toets
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggleBtn.classList.remove('active');
      }
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