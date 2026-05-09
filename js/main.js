/* ============================================================
   SARDE — Site interactions
   ============================================================ */
(() => {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---- Sticky nav state ---- */
  const nav = $('#nav');
  const tabs = $('#menuTabs');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 32);
    if (tabs) tabs.classList.toggle('scrolled', y > 200);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  const toggle = $('#navToggle');
  const mobileMenu = $('#mobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      mobileMenu.setAttribute('aria-hidden', String(!open));
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  /* ---- Reveal on scroll ---- */
  const els = $$('[data-reveal]');
  if ('IntersectionObserver' in window && els.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('in'));
  }

  /* ---- Menu page tabs (scroll-spy + smooth click) ---- */
  const menuTabs = $$('.menu-tab');
  const menuSections = menuTabs
    .map(t => document.getElementById(t.dataset.target))
    .filter(Boolean);

  if (menuTabs.length && menuSections.length) {
    menuTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.target;
        const target = document.getElementById(id);
        if (!target) return;
        const offset = 130;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });

    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          menuTabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
          // scroll active tab into view in horizontal scroller
          const active = document.querySelector(`.menu-tab.active`);
          if (active && active.scrollIntoView) {
            active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
          }
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    menuSections.forEach(s => spy.observe(s));
  }

  /* ---- Year stamp ---- */
  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
