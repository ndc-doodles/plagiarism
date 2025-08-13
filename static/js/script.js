  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    menuOverlay.classList.remove('hidden');
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    menuOverlay.classList.add('hidden');
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);





// faq


  const faqs = document.querySelectorAll("#faq-container details");

  faqs.forEach((faq) => {
    faq.addEventListener("toggle", () => {
      if (faq.open) {
        faqs.forEach((other) => {
          if (other !== faq) {
            other.removeAttribute("open");
          }
        });
      }
    });
  });
