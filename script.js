/* ============================================
   CUP O' JOY — Website Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== NAVBAR SCROLL ====================
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-to-top button
    if (scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Active nav link highlighting
    updateActiveNavLink();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Scroll to top
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==================== ACTIVE NAV LINK ====================
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ==================== MOBILE MENU ====================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const mobileLinks = document.querySelectorAll('.mobile-menu__links a, .mobile-menu__cta');

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  document.body.appendChild(overlay);

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMobileMenu);
  mobileClose.addEventListener('click', closeMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ==================== SMOOTH SCROLL ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==================== SCROLL REVEAL ====================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay for siblings
        const parent = entry.target.parentElement;
        const siblings = parent.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        let delay = 0;

        siblings.forEach((sibling, i) => {
          if (sibling === entry.target) {
            delay = i * 100;
          }
        });

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.min(delay, 400));

        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==================== MENU TABS ====================
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuCategories = document.querySelectorAll('.menu-category');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');

      // Update active tab
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show matching category
      menuCategories.forEach(cat => {
        if (cat.getAttribute('data-category') === category) {
          cat.classList.add('active');
        } else {
          cat.classList.remove('active');
        }
      });
    });
  });

  // ==================== GALLERY FILTERS ====================
  const galleryFilters = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const filterValue = filter.getAttribute('data-filter');

      // Update active filter
      galleryFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      // Filter items
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ==================== LIGHTBOX ====================
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');
      const label = item.querySelector('.gallery-item__label');
      const caption = label ? label.textContent : '';

      lightboxImage.src = src;
      lightboxCaption.textContent = caption;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeMobileMenu();
    }
  });

  // ==================== RESERVATION FORM ====================
  const reservationForm = document.getElementById('reservationForm');

  if (reservationForm) {
    // Set min date to today
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
      dateInput.value = today;
    }

    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value;
      const phone = document.getElementById('resPhone').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const guests = document.getElementById('resGuests').value;
      const request = document.getElementById('resRequest').value;

      // Validate
      if (!name || !phone || !date || !time || !guests) {
        showToast('Please fill in all required fields', 'error');
        return;
      }

      // Format WhatsApp message
      const formattedDate = new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      let message = `🍽️ *Table Reservation — Cup O' Joy*\n\n`;
      message += `👤 *Name:* ${name}\n`;
      message += `📞 *Phone:* ${phone}\n`;
      message += `📅 *Date:* ${formattedDate}\n`;
      message += `⏰ *Time:* ${time}\n`;
      message += `👥 *Guests:* ${guests}\n`;
      if (request) {
        message += `📝 *Special Request:* ${request}\n`;
      }
      message += `\nPlease confirm my reservation. Thank you! 🙏`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919853010156?text=${encodedMessage}`;

      // Show success message
      showToast('Redirecting to WhatsApp to confirm your reservation...', 'success');

      // Open WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    });
  }

  // ==================== TOAST NOTIFICATION ====================
  function showToast(message, type = 'success') {
    // Remove existing toasts
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <span class="toast__icon">${type === 'success' ? '✅' : '⚠️'}</span>
      <span class="toast__text">${message}</span>
    `;

    // Style the toast
    Object.assign(toast.style, {
      position: 'fixed',
      top: '100px',
      left: '50%',
      transform: 'translateX(-50%) translateY(-20px)',
      background: type === 'success' ? '#1B3A2A' : '#7f1d1d',
      color: 'white',
      padding: '14px 28px',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      zIndex: '5000',
      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
      opacity: '0',
      transition: 'all 0.4s ease',
      maxWidth: '90vw',
      textAlign: 'center'
    });

    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Remove after 4s
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-20px)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // ==================== COUNTER ANIMATION ====================
  const counters = document.querySelectorAll('.memory-stat__number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;

        // Skip non-numeric values like ∞
        if (text === '∞') {
          counterObserver.unobserve(target);
          return;
        }

        const endValue = parseInt(text.replace(/[^\d]/g, ''));
        if (isNaN(endValue)) {
          counterObserver.unobserve(target);
          return;
        }

        const suffix = text.replace(/[\d]/g, '');
        let current = 0;
        const increment = endValue / 60;
        const duration = 2000;
        const stepTime = duration / 60;

        const timer = setInterval(() => {
          current += increment;
          if (current >= endValue) {
            target.textContent = text;
            clearInterval(timer);
          } else {
            target.textContent = Math.floor(current) + suffix;
          }
        }, stepTime);

        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // ==================== INITIAL STATE ====================
  handleScroll();

});
