/* ============================================================
   SARDE — Admin panel logic — v2 (with site images)
   ============================================================ */
(() => {
console.log('[Sarde admin] v2 loaded');
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const sb = window.sb;
const BUCKET = window.SARDE_BUCKET;

let currentUser = null;
let isAdmin = false;
let categories = [];
let items = [];
let currentCategoryId = null;

const toast = (msg, type = '') => {
  const el = $('#toast');
  el.textContent = msg;
  el.className = 'toast show ' + type;
  setTimeout(() => el.classList.remove('show'), 2500);
};

/* ---------- AUTH ---------- */
async function checkAuth() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) return showLogin();

  currentUser = session.user;

  // Check if admin
  const { data: adminRow, error } = await sb.from('admins').select('user_id').eq('user_id', currentUser.id).maybeSingle();
  if (error) { toast('Failed to verify admin: ' + error.message, 'error'); return showLogin(); }

  if (!adminRow) {
    toast('You are signed in but not in the admins table. Add your user_id to public.admins.', 'error');
    setTimeout(async () => { await sb.auth.signOut(); showLogin(); }, 4000);
    return;
  }

  isAdmin = true;
  showAdmin();
}

function showLogin() {
  $('#loginShell').style.display = 'grid';
  $('#adminShell').style.display = 'none';
}
function showAdmin() {
  $('#loginShell').style.display = 'none';
  $('#adminShell').style.display = 'flex';
  $('#userEmail').textContent = currentUser.email;
  loadAll();
}

$('#loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = $('#loginEmail').value.trim();
  const password = $('#loginPassword').value;
  const err = $('#loginErr');
  err.classList.remove('show');
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) { err.textContent = error.message; err.classList.add('show'); return; }
  checkAuth();
});

$('#logoutBtn').addEventListener('click', async () => {
  await sb.auth.signOut();
  showLogin();
});

/* ---------- DATA ---------- */
async function loadAll() {
  const { data: cats, error: e1 } = await sb.from('categories').select('*').order('sort_order');
  if (e1) return toast(e1.message, 'error');
  categories = cats || [];

  const { data: its, error: e2 } = await sb.from('menu_items').select('*').order('sort_order');
  if (e2) return toast(e2.message, 'error');
  items = its || [];

  renderCatList();
  if (currentCategoryId && categories.find(c => c.id === currentCategoryId)) {
    renderItems();
  } else if (categories.length > 0) {
    selectCategory(categories[0].id);
  } else {
    renderEmpty();
  }
}

function renderCatList() {
  const list = $('#catList');
  if (categories.length === 0) {
    list.innerHTML = '<p style="font-size:13px; color: rgba(242,234,220,.5); padding: 1rem 0;">No categories yet.<br>Click &ldquo;New category&rdquo; or &ldquo;Import default menu&rdquo;.</p>';
    return;
  }
  list.innerHTML = categories.map(c => {
    const count = items.filter(i => i.category_id === c.id).length;
    const cls = c.id === currentCategoryId ? 'active' : '';
    return `<button class="${cls}" data-id="${c.id}">
      <span>${escape(c.name_en)}</span>
      <span class="count">${count}</span>
    </button>`;
  }).join('');
  $$('.cat-list button').forEach(b => {
    b.addEventListener('click', () => selectCategory(b.dataset.id));
  });
}

function selectCategory(id) {
  currentCategoryId = id;
  renderCatList();
  renderItems();
}

function renderEmpty() {
  $('#itemsArea').innerHTML = `
    <div class="empty-state">
      <h3>No menu yet.</h3>
      <p>Add your first category from the sidebar — or click <b>Import default menu</b> to start with the full Sarde menu.</p>
    </div>`;
  $('#catTitle').innerHTML = 'Welcome <em>back.</em><span class="small">Get started</span>';
  $('#editCatBtn').disabled = true;
  $('#deleteCatBtn').disabled = true;
  $('#addItemBtn').disabled = true;
}

function renderItems() {
  const cat = categories.find(c => c.id === currentCategoryId);
  if (!cat) return renderEmpty();

  $('#editCatBtn').disabled = false;
  $('#deleteCatBtn').disabled = false;
  $('#addItemBtn').disabled = false;

  $('#catTitle').innerHTML = `${escape(cat.name_en)}<span class="small">${cat.is_active ? 'Active' : 'Hidden'} · ${items.filter(i => i.category_id === cat.id).length} items</span>`;

  const catItems = items.filter(i => i.category_id === cat.id).sort((a,b) => a.sort_order - b.sort_order);
  if (catItems.length === 0) {
    $('#itemsArea').innerHTML = `
      <div class="empty-state">
        <h3>No dishes yet.</h3>
        <p>Click <b>+ Add dish</b> to add the first item to this category.</p>
      </div>`;
    return;
  }

  $('#itemsArea').innerHTML = `<div class="item-grid">${catItems.map(i => itemCard(i)).join('')}</div>`;
  $$('.item-card [data-edit]').forEach(b => b.addEventListener('click', () => openItemModal(b.dataset.edit)));
  $$('.item-card [data-del]').forEach(b => b.addEventListener('click', () => deleteItem(b.dataset.del)));
}

function itemCard(i) {
  const badges = [];
  if (i.badge) badges.push(`<span class="badge ${i.badge === 'signature' ? 'signature' : ''}">${i.badge.replace('_',' ')}</span>`);
  if (!i.is_active) badges.push(`<span class="badge inactive">Hidden</span>`);

  const img = i.image_url
    ? `<img src="${escape(i.image_url)}" alt="" loading="lazy" />`
    : `<span class="placeholder">No image</span>`;

  return `
    <article class="item-card" data-id="${i.id}">
      <div class="img">${img}</div>
      <div class="body">
        <div class="name">${escape(i.name_en)}</div>
        <div class="meta">
          <span class="price">${i.price_aed} AED</span>
          <div class="badges">${badges.join('')}</div>
        </div>
      </div>
      <div class="actions">
        <button class="btn-admin small ghost" data-edit="${i.id}">Edit</button>
        <button class="btn-admin small danger" data-del="${i.id}">Delete</button>
      </div>
    </article>`;
}

/* ---------- CATEGORY CRUD ---------- */
$('#addCategoryBtn').addEventListener('click', () => openCategoryModal());
$('#editCatBtn').addEventListener('click', () => openCategoryModal(currentCategoryId));
$('#deleteCatBtn').addEventListener('click', () => deleteCategory(currentCategoryId));

function openCategoryModal(id = null) {
  const m = $('#catModal');
  const f = $('#catForm');
  f.reset();
  switchLangTab(m, 'en');

  if (id) {
    const c = categories.find(x => x.id === id);
    if (!c) return;
    $('#catModalTitle').innerHTML = 'Edit <em>category</em>';
    f.id.value = c.id;
    f.slug.value = c.slug;
    f.sort_order.value = c.sort_order;
    f.name_en.value = c.name_en || '';
    f.name_ar.value = c.name_ar || '';
    f.name_ru.value = c.name_ru || '';
    f.desc_en.value = c.desc_en || '';
    f.desc_ar.value = c.desc_ar || '';
    f.desc_ru.value = c.desc_ru || '';
    f.banner_image_url.value = c.banner_image_url || '';
    f.is_active.checked = c.is_active;
    setUploadPreview(m.querySelector('[data-upload="banner_image_url"]'), c.banner_image_url);
  } else {
    $('#catModalTitle').innerHTML = 'New <em>category</em>';
    f.id.value = '';
    f.sort_order.value = (categories.length + 1) * 10;
    setUploadPreview(m.querySelector('[data-upload="banner_image_url"]'), null);
  }
  m.classList.add('open');
}

$('#catForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.target;
  const payload = {
    slug: f.slug.value.trim(),
    sort_order: parseInt(f.sort_order.value || 0, 10),
    name_en: f.name_en.value.trim(),
    name_ar: f.name_ar.value.trim() || null,
    name_ru: f.name_ru.value.trim() || null,
    desc_en: f.desc_en.value.trim() || null,
    desc_ar: f.desc_ar.value.trim() || null,
    desc_ru: f.desc_ru.value.trim() || null,
    banner_image_url: f.banner_image_url.value || null,
    is_active: f.is_active.checked
  };

  let res;
  if (f.id.value) {
    res = await sb.from('categories').update(payload).eq('id', f.id.value).select().single();
  } else {
    res = await sb.from('categories').insert(payload).select().single();
  }
  if (res.error) return toast(res.error.message, 'error');

  toast('Saved.', 'success');
  $('#catModal').classList.remove('open');
  if (!f.id.value) currentCategoryId = res.data.id;
  await loadAll();
});

async function deleteCategory(id) {
  const c = categories.find(x => x.id === id);
  if (!c) return;
  const itemsInCat = items.filter(i => i.category_id === id).length;
  if (!confirm(`Delete "${c.name_en}"?\nThis will also delete ${itemsInCat} dish(es) inside.`)) return;
  const { error } = await sb.from('categories').delete().eq('id', id);
  if (error) return toast(error.message, 'error');
  currentCategoryId = null;
  toast('Category deleted.', 'success');
  await loadAll();
}

/* ---------- ITEM CRUD ---------- */
$('#addItemBtn').addEventListener('click', () => openItemModal());

function openItemModal(id = null) {
  const m = $('#itemModal');
  const f = $('#itemForm');
  f.reset();
  switchLangTab(m, 'en');
  f.category_id.value = currentCategoryId;

  if (id) {
    const i = items.find(x => x.id === id);
    if (!i) return;
    $('#itemModalTitle').innerHTML = 'Edit <em>dish</em>';
    f.id.value = i.id;
    f.name_en.value = i.name_en || '';
    f.name_ar.value = i.name_ar || '';
    f.name_ru.value = i.name_ru || '';
    f.price_aed.value = i.price_aed;
    f.badge.value = i.badge || '';
    f.sort_order.value = i.sort_order;
    f.is_active.checked = i.is_active;
    f.image_url.value = i.image_url || '';
    setUploadPreview(m.querySelector('[data-upload="image_url"]'), i.image_url);
  } else {
    $('#itemModalTitle').innerHTML = 'New <em>dish</em>';
    const catItems = items.filter(i => i.category_id === currentCategoryId);
    f.sort_order.value = (catItems.length + 1) * 10;
    setUploadPreview(m.querySelector('[data-upload="image_url"]'), null);
  }
  m.classList.add('open');
}

$('#itemForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.target;
  const payload = {
    category_id: f.category_id.value,
    sort_order: parseInt(f.sort_order.value || 0, 10),
    name_en: f.name_en.value.trim(),
    name_ar: f.name_ar.value.trim() || null,
    name_ru: f.name_ru.value.trim() || null,
    price_aed: parseFloat(f.price_aed.value),
    image_url: f.image_url.value || null,
    badge: f.badge.value || null,
    is_active: f.is_active.checked
  };

  let res;
  if (f.id.value) {
    res = await sb.from('menu_items').update(payload).eq('id', f.id.value).select().single();
  } else {
    res = await sb.from('menu_items').insert(payload).select().single();
  }
  if (res.error) return toast(res.error.message, 'error');

  toast('Saved.', 'success');
  $('#itemModal').classList.remove('open');
  await loadAll();
});

async function deleteItem(id) {
  const i = items.find(x => x.id === id);
  if (!i) return;
  if (!confirm(`Delete "${i.name_en}"?`)) return;
  const { error } = await sb.from('menu_items').delete().eq('id', id);
  if (error) return toast(error.message, 'error');
  toast('Dish deleted.', 'success');
  await loadAll();
}

/* ---------- MODAL helpers ---------- */
$$('[data-close]').forEach(b => b.addEventListener('click', e => {
  e.target.closest('.modal-backdrop').classList.remove('open');
}));
$$('.modal-backdrop').forEach(m => m.addEventListener('click', e => {
  if (e.target === m) m.classList.remove('open');
}));

/* Lang-tab toggling inside modals */
$$('.modal .lang-tabs button').forEach(b => {
  b.addEventListener('click', () => switchLangTab(b.closest('.modal'), b.dataset.lang));
});
function switchLangTab(modal, lang) {
  $$('.lang-tabs button', modal).forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  $$('.lang-pane', modal).forEach(p => p.classList.toggle('active', p.dataset.pane === lang));
}

/* ---------- IMAGE UPLOAD ---------- */
$$('.upload-zone').forEach(zone => {
  const fileInput = zone.querySelector('input[type="file"]');
  const hiddenInput = zone.querySelector('input[type="hidden"]');
  const preview = zone.querySelector('.preview img');
  const pickBtn = zone.querySelector('[data-pickfile]');

  pickBtn.addEventListener('click', () => fileInput.click());
  zone.addEventListener('click', e => {
    if (e.target === zone || e.target.closest('.preview')) fileInput.click();
  });

  fileInput.addEventListener('change', async () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) return toast('Image too large (5 MB max).', 'error');

    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;
    toast('Uploading…');
    const { error: upErr } = await sb.storage.from(BUCKET).upload(path, file, { upsert: false, contentType: file.type });
    if (upErr) return toast('Upload failed: ' + upErr.message, 'error');
    const { data: pub } = sb.storage.from(BUCKET).getPublicUrl(path);
    const url = pub.publicUrl;
    hiddenInput.value = url;
    preview.src = url;
    preview.style.display = 'block';
    toast('Image uploaded.', 'success');
  });
});

function setUploadPreview(zone, url) {
  const preview = zone.querySelector('.preview img');
  const hidden = zone.querySelector('input[type="hidden"]');
  if (url) {
    preview.src = url;
    preview.style.display = 'block';
    hidden.value = url;
  } else {
    preview.removeAttribute('src');
    preview.style.display = 'none';
    hidden.value = '';
  }
}

/* ---------- SEED ---------- */
$('#seedBtn').addEventListener('click', async () => {
  if (!window.SARDE_SEED) return toast('Seed data not loaded.', 'error');
  if (categories.length > 0) {
    if (!confirm(`This will ADD ${window.SARDE_SEED.categories.length} categories and ${window.SARDE_SEED.items.length} items on top of what you already have. Continue?`)) return;
  } else {
    if (!confirm(`This will create ${window.SARDE_SEED.categories.length} categories and ${window.SARDE_SEED.items.length} dishes. Continue?`)) return;
  }
  toast('Importing categories…');

  const slugMap = {};
  for (const c of window.SARDE_SEED.categories) {
    const { data, error } = await sb.from('categories').upsert(c, { onConflict: 'slug' }).select().single();
    if (error) return toast('Cat error: ' + error.message, 'error');
    slugMap[c.slug] = data.id;
  }

  toast('Importing items…');
  const itemRows = window.SARDE_SEED.items.map(i => ({
    category_id: slugMap[i.category_slug],
    sort_order: i.sort_order,
    name_en: i.name_en,
    name_ar: i.name_ar,
    name_ru: i.name_ru,
    price_aed: i.price_aed,
    image_url: i.image_url,
    badge: i.badge,
    is_active: true
  })).filter(r => r.category_id);

  // Batch in chunks of 50
  for (let k = 0; k < itemRows.length; k += 50) {
    const slice = itemRows.slice(k, k + 50);
    const { error } = await sb.from('menu_items').insert(slice);
    if (error) return toast('Items error: ' + error.message, 'error');
  }

  toast('Default menu imported.', 'success');
  await loadAll();
});

/* ---------- UTIL ---------- */
function escape(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]);
}

/* ============================================================
   SITE IMAGES VIEW (home page hero / about / signatures / gallery)
   ============================================================ */
let viewMode = 'menu';        // 'menu' | 'images'
let siteImages = [];

const viewMenuBtn = $('#viewMenuBtn');
const viewImagesBtn = $('#viewImagesBtn');

viewMenuBtn.addEventListener('click', () => switchView('menu'));
viewImagesBtn.addEventListener('click', () => switchView('images'));

function switchView(mode) {
  console.log('[admin] switching to', mode);
  viewMode = mode;
  viewMenuBtn.style.background  = mode === 'menu'   ? 'var(--terracotta)' : 'transparent';
  viewImagesBtn.style.background = mode === 'images' ? 'var(--terracotta)' : 'transparent';
  $('#addCategoryBtn').style.display = mode === 'menu' ? '' : 'none';
  $('#catList').style.display       = mode === 'menu' ? '' : 'none';

  if (mode === 'images') {
    loadSiteImages();
  } else {
    renderCatList();
    if (currentCategoryId) renderItems();
    else renderEmpty();
  }
}

async function loadSiteImages() {
  $('#itemsArea').innerHTML = `<div class="empty-state"><h3>Loading images…</h3></div>`;
  $('#catTitle').innerHTML = `Home page <em>images</em><span class="small">Pick a slot, upload to replace</span>`;
  $('#editCatBtn').disabled = true;
  $('#deleteCatBtn').disabled = true;
  $('#addItemBtn').disabled = true;

  const { data, error } = await sb.from('site_images').select('*').order('section').order('sort_order');
  if (error) { toast(error.message, 'error'); return; }
  siteImages = data || [];

  renderSiteImages();
}

function renderSiteImages() {
  const sections = {
    hero:       { title: 'Hero',       desc: 'Main hero image at the top of the home page.' },
    about:      { title: 'About',      desc: 'The 3 photos shown next to the About section.' },
    signatures: { title: 'Signatures', desc: 'The 6 signature dish photos on the home page.' },
    gallery:    { title: 'Gallery',    desc: 'The 7 gallery tiles on the home page.' },
  };

  const grouped = {};
  for (const img of siteImages) (grouped[img.section] ||= []).push(img);

  let html = '';
  for (const [key, meta] of Object.entries(sections)) {
    const rows = (grouped[key] || []).sort((a,b) => a.sort_order - b.sort_order);
    html += `
      <section style="margin-bottom: 2.5rem;">
        <header style="display:flex;align-items:baseline;gap:1rem;margin-bottom:1rem;padding-bottom:.65rem;border-bottom:1px solid rgba(27,23,20,.12);">
          <h2 style="font-family:var(--display);font-size:24px;font-weight:600;letter-spacing:-.01em;">${meta.title}</h2>
          <span style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-mute);">${rows.length} slot${rows.length===1?'':'s'}</span>
          <span style="margin-left:auto;font-size:13px;color:var(--ink-mute);">${meta.desc}</span>
        </header>
        <div class="item-grid">
          ${rows.map(img => imgSlotCard(img)).join('')}
        </div>
      </section>`;
  }
  $('#itemsArea').innerHTML = html;

  // Wire up upload buttons
  $$('.img-slot-card').forEach(card => {
    const id = card.dataset.id;
    const fileInput = card.querySelector('input[type="file"]');
    const pickBtn = card.querySelector('[data-pick]');
    pickBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => uploadAndUpdateSlot(id, fileInput.files[0], card));
  });
}

function imgSlotCard(img) {
  const preview = img.image_url
    ? `<img src="${escape(img.image_url)}" alt="" loading="lazy" />`
    : `<span class="placeholder">No image</span>`;
  return `
    <article class="item-card img-slot-card" data-id="${img.id}">
      <div class="img">${preview}</div>
      <div class="body">
        <div class="name" style="font-style:normal;font-family:var(--body);font-size:13px;font-weight:600;letter-spacing:.04em;">${escape(img.label_en || (img.section + '/' + img.slot))}</div>
        <div class="meta">
          <span style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-mute);">${img.section} / ${img.slot}</span>
        </div>
      </div>
      <div class="actions">
        <button class="btn-admin small ghost" data-pick>Replace image</button>
        <input type="file" accept="image/*" style="display:none;" />
      </div>
    </article>`;
}

async function uploadAndUpdateSlot(id, file, card) {
  if (!file) return;
  if (file.size > 8 * 1024 * 1024) return toast('Image too large (8 MB max).', 'error');
  toast('Uploading…');

  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
  const path = `home/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;
  const { error: upErr } = await sb.storage.from(BUCKET).upload(path, file, { upsert: false, contentType: file.type });
  if (upErr) return toast('Upload failed: ' + upErr.message, 'error');
  const { data: pub } = sb.storage.from(BUCKET).getPublicUrl(path);
  const url = pub.publicUrl;

  const { error: updErr } = await sb.from('site_images').update({ image_url: url }).eq('id', id);
  if (updErr) return toast('Update failed: ' + updErr.message, 'error');

  toast('Image updated.', 'success');
  // Refresh the card preview in place
  const imgWrap = card.querySelector('.img');
  imgWrap.innerHTML = `<img src="${url}" alt="" />`;
  // Update local state
  const row = siteImages.find(s => s.id === id);
  if (row) row.image_url = url;
}

/* ---------- Boot ---------- */
checkAuth();
})();
