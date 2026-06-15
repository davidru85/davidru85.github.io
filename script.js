/**
 * Client-side scripting for David Ruiz Urraca CV website.
 * Contains interactive card spotlights, dynamic subtitle typing,
 * collapsible experiences, copy-to-clipboard actions, and mobile menu behaviors.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initCardSpotlights();
  initTypingEffect();
  initCollapsibleExperiences();
  initCopyEmail();
  initActiveNavHighlight();
});

/* -----------------------------------------
   1. Sticky Header
   ----------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
}

/* -----------------------------------------
   2. Mobile Menu Navigation
   ----------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-item');

  if (!menuToggle || !navMenu) return;

  const toggleMenu = () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('mobile-open');
    document.body.classList.toggle('no-scroll');
  };

  const closeMenu = () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('mobile-open');
    document.body.classList.remove('no-scroll');
  };

  menuToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* -----------------------------------------
   3. Spotlight Mouse-Tracking Effect
   ----------------------------------------- */
function initCardSpotlights() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  const cards = document.querySelectorAll('.spotlight-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      // Calculate mouse position relative to the element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update custom properties in CSS
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* -----------------------------------------
   4. Typing Effect for Subtitle
   ----------------------------------------- */
function initTypingEffect() {
  const element = document.getElementById('typing-text');
  if (!element) return;

  const isSpanish = document.documentElement.lang === 'es';
  const roles = isSpanish ? [
    "Ingeniero Android",
    "Especialista en Flutter",
    "Kotlin Multiplatform (KMP) Explorer",
    "Desarrollador AI-First"
  ] : [
    "Android Engineer",
    "Flutter Specialist",
    "Kotlin Multiplatform (KMP) Explorer",
    "AI-First Developer"
  ];
  
  // Disable typing animation if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    element.textContent = isSpanish ? "Desarrollador Android y Flutter" : "Android & Flutter Developer";
    return;
  }
  
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      // Deleting character
      element.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50; // Deletes faster than typing
    } else {
      // Typing character
      element.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 100;
    }
    
    // Switch states
    if (!isDeleting && charIdx === currentRole.length) {
      // Fully typed: pause before deleting
      isDeleting = true;
      typingSpeed = 2000; // Pause at the end of word
    } else if (isDeleting && charIdx === 0) {
      // Fully deleted: move to next word
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 500; // Pause before typing next
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Start typing
  setTimeout(type, 1000);
}

/* -----------------------------------------
   5. Collapsible Experiences
   ----------------------------------------- */
function initCollapsibleExperiences() {
  const toggleBtn = document.getElementById('toggle-older-exp');
  const olderContainer = document.getElementById('older-experiences');
  
  if (!toggleBtn || !olderContainer) return;
  
  const isSpanish = document.documentElement.lang === 'es';
  
  toggleBtn.addEventListener('click', () => {
    const isExpanded = olderContainer.classList.contains('expanded');
    const textSpan = toggleBtn.querySelector('span');
    
    if (isExpanded) {
      olderContainer.style.maxHeight = null;
      textSpan.textContent = isSpanish ? "Mostrar experiencia anterior" : "Show Older Experience";
    } else {
      // Programmatically set max-height based on content height for a smooth transition
      olderContainer.style.maxHeight = olderContainer.scrollHeight + "px";
      textSpan.textContent = isSpanish ? "Ocultar experiencia anterior" : "Hide Older Experience";
    }
    
    olderContainer.classList.toggle('expanded');
    toggleBtn.classList.toggle('active');
  });
}

/* -----------------------------------------
   6. Copy Email to Clipboard
   ----------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const tooltip = document.getElementById('copy-tooltip');
  const emailText = "david@ruizurraca.com";
  
  if (!copyBtn || !tooltip) return;
  
  const isSpanish = document.documentElement.lang === 'es';
  
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText)
      .then(() => {
        // Successful copy
        tooltip.textContent = isSpanish ? "¡Copiado!" : "Copied!";
        copyBtn.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(() => {
          tooltip.textContent = isSpanish ? "Copiar" : "Copy";
          copyBtn.classList.remove('copied');
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
        tooltip.textContent = isSpanish ? "Error" : "Error";
      });
  });
}

/* -----------------------------------------
   7. Navigation Active Section Highlight
   ----------------------------------------- */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section.scroll-offset');
  const navItems = document.querySelectorAll('.nav-item');
  
  if (sections.length === 0 || navItems.length === 0) return;
  
  const options = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle portion of viewport
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update active class on nav links
        navItems.forEach(item => {
          const href = item.getAttribute('href');
          if (href === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, options);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}
