document.querySelectorAll('.navigator-links').forEach((link) => {
  const menuId = link.getAttribute('data-menu');
  const megaMenu = document.getElementById(`mega-menu-${menuId}`);
  let timeout;

  link.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    if (megaMenu) {
      megaMenu.classList.remove('hidden');
      megaMenu.classList.add('show');
      link.setAttribute('aria-expanded', 'true');
    }
  });

  link.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      if (megaMenu) {
        megaMenu.classList.remove('show');
        link.setAttribute('aria-expanded', 'false');
      }
    }, 200);
  });

  megaMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    megaMenu.classList.add('show');
  });

  megaMenu.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      megaMenu.classList.remove('show');
    }, 200);
  });
});
