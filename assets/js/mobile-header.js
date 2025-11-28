(() => {
  const header = document.getElementById('mobileHeader');
  if (!header) return;

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;

  const update = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = currentScroll > lastScrollY;
    const reachedTop = currentScroll <= 0;
    if (isScrollingDown && !reachedTop) {
      header.classList.add('mobile-header--hidden');
    } else {
      header.classList.remove('mobile-header--hidden');
    }

    lastScrollY = currentScroll <= 0 ? 0 : currentScroll;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();

