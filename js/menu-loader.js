/* ============================================================
   SARDE — Public menu loader
   Fetches categories + items from Supabase and renders.
   ============================================================ */
(async () => {
  console.log('[menu-loader] start');
  const root = document.getElementById('menuRoot');
  const tabsInner = document.getElementById('menuTabsInner');

  if (!root) { console.error('[menu-loader] #menuRoot missing'); return; }

  // Show loading state immediately
  root.innerHTML = `<p style="text-align:center; padding:4rem 1rem; color:var(--ink-mute); font-family:var(--display); font-style:italic; font-size:20px;">Loading menu…</p>`;

  const sb = window.sb;
  if (!sb) {
    console.error('[menu-loader] window.sb not defined — supabase-client.js not loaded?');
    root.innerHTML = `<p style="text-align:center; padding:4rem 1rem; color:#B23030;">Error: Supabase client not initialized. Check console.</p>`;
    return;
  }
  console.log('[menu-loader] sb OK, fetching…');

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]);

  let categories = [], items = [];
  try {
    const [cR, iR] = await Promise.all([
      sb.from('categories').select('*').eq('is_active', true).order('sort_order'),
      sb.from('menu_items').select('*').eq('is_active', true).order('sort_order')
    ]);
    if (cR.error) throw cR.error;
    if (iR.error) throw iR.error;
    categories = cR.data || [];
    items = iR.data || [];
    console.log(`[menu-loader] fetched ${categories.length} categories, ${items.length} items`);
  } catch (err) {
    console.error('[menu-loader] fetch failed', err);
    root.innerHTML = `<p style="text-align:center; padding:4rem 1rem; color:#B23030;">Unable to load the menu: ${esc(err.message || String(err))}</p>`;
    return;
  }

  if (categories.length === 0) {
    root.innerHTML = `<p style="text-align:center; padding:4rem 1rem; color:var(--ink-mute); font-family:var(--display); font-style:italic; font-size:24px;">Menu coming soon.</p>`;
    return;
  }

  // Tabs
  tabsInner.innerHTML = categories.map((c, i) => `
    <button class="menu-tab${i === 0 ? ' active' : ''}"
            data-target="${esc(c.slug)}"
            data-name-en="${esc(c.name_en)}"
            data-name-ar="${esc(c.name_ar || c.name_en)}"
            data-name-ru="${esc(c.name_ru || c.name_en)}">${esc(c.name_en)}</button>
  `).join('');

  // Sections
  root.innerHTML = categories.map((c, idx) => {
    const catItems = items.filter(i => i.category_id === c.id).sort((a,b) => a.sort_order - b.sort_order);
    const num = String(idx + 1).padStart(2, '0');

    return `
      <section id="${esc(c.slug)}" class="menu-section">
        <header class="menu-section-head">
          <div class="num">${num}</div>
          <div>
            <h2 data-name-en="${esc(c.name_en)}"
                data-name-ar="${esc(c.name_ar || c.name_en)}"
                data-name-ru="${esc(c.name_ru || c.name_en)}">${esc(c.name_en)}</h2>
            <p class="desc"
               data-desc-en="${esc(c.desc_en || '')}"
               data-desc-ar="${esc(c.desc_ar || '')}"
               data-desc-ru="${esc(c.desc_ru || '')}">${esc(c.desc_en || '')}</p>
          </div>
        </header>
        <ul class="menu-list${catItems.length > 0 && catItems.every(it => !it.image_url) ? ' list-only' : ''}">
          ${catItems.map(it => itemHTML(it)).join('') || '<li style="grid-column:1/-1;color:var(--ink-mute);font-style:italic;">No dishes in this category yet.</li>'}
        </ul>
      </section>`;
  }).join('');

  function itemHTML(i) {
    const pillKey = i.badge ? ('pill.' + i.badge) : null;
    const pillText = pillKeyToText(i.badge);
    const pill = i.badge
      ? `<span class="pill ${i.badge === 'signature' ? 'featured' : ''}" data-pill="${i.badge}">${pillText}</span>`
      : '';
    const img = i.image_url
      ? `<img loading="lazy" src="${esc(i.image_url)}" alt="${esc(i.name_en)}" />`
      : `<div style="width:100%;height:100%;background:var(--cream-shade);display:grid;place-items:center;color:var(--ink-mute);font-size:11px;letter-spacing:.18em;text-transform:uppercase;">No image</div>`;

    return `
      <li class="menu-item"
          data-id="${esc(i.id)}"
          data-name-en="${esc(i.name_en)}"
          data-name-ar="${esc(i.name_ar || i.name_en)}"
          data-name-ru="${esc(i.name_ru || i.name_en)}">
        <div class="img-wrap">${pill}${img}</div>
        <div class="body">
          <span class="name">${esc(i.name_en)}</span>
          <span class="price">${i.price_aed} <small>AED</small></span>
        </div>
      </li>`;
  }

  function pillKeyToText(badge) {
    return ({signature:'Signature', premium:'Premium', family:'Family', for_two:'For Two'})[badge] || '';
  }

  // Re-bind tab clicks (main.js wired them at DOMContentLoaded — too early)
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.target;
      const target = document.getElementById(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Scroll-spy for tabs
  const tabs = document.querySelectorAll('.menu-tab');
  const sections = Array.from(tabs)
    .map(t => document.getElementById(t.dataset.target))
    .filter(Boolean);
  if (sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
          const active = document.querySelector('.menu-tab.active');
          if (active && active.scrollIntoView) {
            active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
          }
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(s => spy.observe(s));
  }

  // Apply current language to the freshly-rendered nodes
  if (window.SardeI18n && window.SardeI18n.applyTranslations) {
    window.SardeI18n.applyTranslations(window.SardeI18n.getCurrentLang());
  }

  // Re-trigger reveal-on-scroll observer for any data-reveal in new content (none currently, but safe)
  document.dispatchEvent(new CustomEvent('sarde:menu-loaded'));
})();
