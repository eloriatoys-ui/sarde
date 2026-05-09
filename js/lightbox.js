/* ============================================================
   SARDE — Image lightbox
   Click any dish / gallery / banner image → opens large popup.
   ============================================================ */
(() => {
  // Inject the lightbox markup once (works whether or not it's in HTML)
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.setAttribute('aria-hidden', 'true');
    lb.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <figure class="lightbox-figure">
        <img class="lightbox-img" alt="" />
        <figcaption class="lightbox-caption"></figcaption>
      </figure>`;
    document.body.appendChild(lb);
  }

  const img     = lb.querySelector('.lightbox-img');
  const caption = lb.querySelector('.lightbox-caption');
  const closeBtn = lb.querySelector('.lightbox-close');

  function upscaleUnsplash(src) {
    if (!src) return src;
    if (src.includes('images.unsplash.com')) {
      // bump w= and q= to higher values for crisp popup
      let s = src.replace(/([?&])w=\d+/, '$1w=1600').replace(/([?&])q=\d+/, '$1q=85');
      if (!/[?&]w=/.test(s)) s += (s.includes('?') ? '&' : '?') + 'w=1600&q=85';
      return s;
    }
    return src;
  }

  function open(src, alt) {
    img.src = upscaleUnsplash(src);
    img.alt = alt || '';
    caption.textContent = alt || '';
    caption.style.display = alt ? 'block' : 'none';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    img.removeAttribute('src');
    document.body.style.overflow = '';
  }

  // Delegated click listener — any image inside a known container opens lightbox
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName !== 'IMG') return;
    const trigger = target.closest('.menu-item, .dish-image, .gallery-item, .cat-banner, .hero-image');
    if (!trigger) return;
    e.preventDefault();
    open(target.currentSrc || target.src, target.alt);
  });

  // Close on backdrop click
  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target.classList.contains('lightbox-figure')) close();
  });

  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb.classList.contains('open')) close();
  });
})();
