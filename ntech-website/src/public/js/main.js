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

  // Animaties
  initHeaderShadow();
  initScrollReveal();
  initCounters();
  initWordRotator();
  initSparks();
});

// Respecteer de systeeminstelling 'minder beweging'
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
/**
 * Schaduw onder de header zodra er gescrold wordt
 */
function initHeaderShadow() {
  const header = document.querySelector('.header');
  if (!header) return;

  const update = () => header.classList.toggle('scrolled', window.scrollY > 10);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/**
 * Elementen laten invliegen wanneer ze in beeld komen
 */
function initScrollReveal() {
  const selectors = [
    '.section-head', '.section-title:not(.section-head .section-title)', '.split-text', '.collage',
    '.card', '.info-box', '.feature', '.gallery-item', '.contact-form', '.contact-info-box'
  ];
  const elements = document.querySelectorAll(selectors.join(','));

  if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

  elements.forEach(el => {
    // Kleine vertraging per element binnen dezelfde rij voor een golf-effect
    const siblings = Array.from(el.parentElement.children).filter(child => child.matches(selectors.join(',')));
    const index = siblings.indexOf(el);
    el.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 0.1}s`);
    el.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      // Daarna weer de normale (hover-)transities van het element gebruiken
      el.addEventListener('transitionend', () => el.classList.remove('reveal', 'is-visible'), { once: true });
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => revealObserver.observe(el));
}

/**
 * Tellers die oplopen tot hun eindwaarde (data-count)
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length || prefersReducedMotion) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animate(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => {
    el.textContent = '0';
    counterObserver.observe(el);
  });
}

/**
 * Wisselende woorden in de hero-titel (data-words, gescheiden door |)
 */
function initWordRotator() {
  const rotator = document.querySelector('.word-rotator');
  if (!rotator || prefersReducedMotion) return;

  const words = rotator.dataset.words.split('|');
  let current = 0;

  const show = (word) => {
    rotator.classList.remove('is-leaving');
    rotator.innerHTML = '';
    [...word].forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${i * 0.03}s`;
      rotator.appendChild(span);
    });
  };

  rotator.setAttribute('aria-label', words.join(', '));

  setInterval(() => {
    if (document.hidden) return;
    rotator.classList.add('is-leaving');
    setTimeout(() => {
      current = (current + 1) % words.length;
      show(words[current]);
    }, 350);
  }, 3200);
}

/**
 * Vonkenregen (zoals bij slijpen/lassen) op de canvas in de hero
 */
function initSparks() {
  const canvas = document.querySelector('.hero-sparks');
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  const sparks = [];
  let width = 0;
  let height = 0;
  let visible = true;
  let last = performance.now();

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // Bron van de vonken: rechtsonder, waar in de foto gelast wordt
  const emitter = () => ({
    x: width * (width < 700 ? 0.85 : 0.72),
    y: height * 0.62
  });

  const spawn = () => {
    const origin = emitter();
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.2;
    const speed = 120 + Math.random() * 380;
    sparks.push({
      x: origin.x + (Math.random() - 0.5) * 16,
      y: origin.y + (Math.random() - 0.5) * 16,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      maxLife: 0.6 + Math.random() * 1.1,
      size: 0.8 + Math.random() * 1.6
    });
  };

  const frame = (now) => {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    if (visible && !document.hidden) {
      const burst = Math.random() < 0.04 ? 14 : 2;
      for (let i = 0; i < burst; i++) spawn();
    }

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.life += dt;
      if (s.life > s.maxLife) {
        sparks.splice(i, 1);
        continue;
      }
      s.vy += 520 * dt; // zwaartekracht
      s.vx *= 0.995;
      const px = s.x;
      const py = s.y;
      s.x += s.vx * dt;
      s.y += s.vy * dt;

      const fade = 1 - s.life / s.maxLife;
      ctx.strokeStyle = `rgba(255, ${170 + Math.round(70 * fade)}, ${60 + Math.round(120 * fade)}, ${fade})`;
      ctx.lineWidth = s.size;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(px - s.vx * 0.02, py - s.vy * 0.02);
      ctx.lineTo(s.x, s.y);
      ctx.stroke();
    }

    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(frame);
  };

  // Alleen vonken maken als de hero in beeld is
  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
  }).observe(hero);

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(frame);
}
