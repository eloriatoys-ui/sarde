/* ============================================================
   SARDE — Home page image loader
   Pulls site_images from Supabase and swaps src on managed images.
   ============================================================ */
(async () => {
  const sb = window.sb;
  if (!sb) return;

  const { data: images, error } = await sb.from('site_images').select('*').order('sort_order');
  if (error || !images) {
    console.warn('[home-loader] failed to fetch site_images', error);
    return;
  }

  const bySection = {};
  for (const img of images) {
    (bySection[img.section] ||= []).push(img);
  }

  // 1) Direct attribute: data-image="section/slot"
  document.querySelectorAll('[data-image]').forEach(el => {
    const [section, slot] = el.dataset.image.split('/');
    const row = (bySection[section] || []).find(r => r.slot === slot);
    if (row?.image_url) {
      if (el.tagName === 'IMG') {
        el.src = row.image_url;
        if (row.label_en && !el.alt) el.alt = row.label_en;
      } else {
        el.style.backgroundImage = `url("${row.image_url}")`;
      }
    }
  });

  // 2) Ordered slots inside a container: data-image-section="about"
  document.querySelectorAll('[data-image-section]').forEach(container => {
    const section = container.dataset.imageSection;
    const rows = bySection[section] || [];
    let targets = [];
    if (section === 'about') {
      targets = container.querySelectorAll('figure img');
    } else if (section === 'signatures') {
      targets = container.querySelectorAll('.dish .dish-image img');
    } else if (section === 'gallery') {
      targets = container.querySelectorAll('.gallery-item img');
    }
    Array.from(targets).forEach((img, i) => {
      const row = rows[i];
      if (row?.image_url) {
        img.src = row.image_url;
        if (row.label_en && !img.alt) img.alt = row.label_en;
      }
    });
  });
})();
