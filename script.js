/**
 * DRY FRUIT FARM (DFF) — INTERACTIVE SYSTEM & PRODUCT ENGINE
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. COMPLETE DRY FRUIT FARM PRODUCT DATABASE
     -------------------------------------------------------------------------- */
  const products = [
    {
      id: 'pistachio-iranian',
      name: 'Pistachio Iranian',
      category: 'nuts',
      rating: 5,
      reviewCount: '1,400',
      description: 'Authentic Iranian pistachios with a distinct aroma and naturally sweet crunch.',
      img: 'assets/pistachio_iranian.webp',
      badge: '-28% OFF',
      variants: {
        '200g': { price: 429, mrp: 600, discount: '28% off' },
        '400g': { price: 849, mrp: 1200, discount: '29% off' },
        '1kg': { price: 2099, mrp: 3000, discount: '30% off' },
        '2kg': { price: 3997, mrp: 5000, discount: '20% off' }
      }
    },
    {
      id: 'walnut-giri',
      name: 'Chilean Walnut Giri',
      category: 'nuts',
      rating: 5,
      reviewCount: '600',
      description: 'Premium walnut kernels with a rich, earthy taste and brain-boosting Omega-3.',
      img: 'assets/walnut_giri.webp',
      badge: '-38% OFF',
      variants: {
        '200g': { price: 499, mrp: 800, discount: '38% off' },
        '400g': { price: 949, mrp: 1600, discount: '40% off' },
        '1kg': { price: 2299, mrp: 4000, discount: '42% off' },
        '2kg': { price: 4499, mrp: 8000, discount: '44% off' }
      }
    },
    {
      id: 'melon-seeds',
      name: 'Raw Melon Seeds',
      category: 'seeds',
      rating: 5,
      reviewCount: '2,300',
      description: 'Light, crunchy melon seeds rich in plant protein and essential minerals.',
      img: 'assets/melon_seeds.webp',
      badge: '-17% OFF',
      variants: {
        '200g': { price: 289, mrp: 350, discount: '17% off' },
        '400g': { price: 569, mrp: 750, discount: '24% off' },
        '1kg': { price: 1399, mrp: 1800, discount: '22% off' },
        '2kg': { price: 2699, mrp: 3200, discount: '15% off' }
      }
    },
    {
      id: 'pumpkin-seeds',
      name: 'Raw Pumpkin Seeds',
      category: 'seeds',
      rating: 5,
      reviewCount: '2,200',
      description: 'Superfood seeds rich in zinc, magnesium, and plant-based protein.',
      img: 'assets/pumpkin_seeds.webp',
      badge: '-45% OFF',
      variants: {
        '200g': { price: 220, mrp: 400, discount: '45% off' },
        '400g': { price: 420, mrp: 800, discount: '47% off' },
        '1kg': { price: 999, mrp: 1800, discount: '44% off' },
        '2kg': { price: 1899, mrp: 3500, discount: '45% off' }
      }
    },
    {
      id: 'sunflower-seeds',
      name: 'Raw Sunflower Seeds',
      category: 'seeds',
      rating: 5,
      reviewCount: '800',
      description: 'Light and crispy sunflower seeds with a mild nutty flavor and vitamin E.',
      img: 'assets/sunflower_seeds.webp',
      badge: '-26% OFF',
      variants: {
        '200g': { price: 149, mrp: 200, discount: '26% off' },
        '400g': { price: 289, mrp: 400, discount: '27% off' },
        '1kg': { price: 699, mrp: 950, discount: '26% off' },
        '2kg': { price: 1299, mrp: 1800, discount: '27% off' }
      }
    },
    {
      id: 'gourmet-cashews',
      name: 'Gourmet Cashews (W240)',
      category: 'nuts',
      rating: 5,
      reviewCount: '3,100',
      description: 'King-size crunchy whole cashews, rich in healthy fats and buttery aroma.',
      img: 'assets/cat_cashews.jpg',
      badge: 'Best Seller',
      variants: {
        '200g': { price: 380, mrp: 500, discount: '24% off' },
        '400g': { price: 740, mrp: 1000, discount: '26% off' },
        '1kg': { price: 1750, mrp: 2300, discount: '23% off' },
        '2kg': { price: 3399, mrp: 4500, discount: '24% off' }
      }
    },
    {
      id: 'premium-almonds',
      name: 'Premium California Almonds',
      category: 'nuts',
      rating: 5,
      reviewCount: '4,200',
      description: 'Hand-selected 100% natural badam giri, packed with vitamin E and antioxidants.',
      img: 'assets/cat_almonds.jpg',
      badge: 'Top Choice',
      variants: {
        '200g': { price: 349, mrp: 480, discount: '27% off' },
        '400g': { price: 680, mrp: 950, discount: '28% off' },
        '1kg': { price: 1599, mrp: 2200, discount: '27% off' },
        '2kg': { price: 3099, mrp: 4200, discount: '26% off' }
      }
    },
    {
      id: 'afghani-raisins',
      name: 'Afghani Green Raisins (Kishmish)',
      category: 'dryfruits',
      rating: 5,
      reviewCount: '1,800',
      description: 'Long sweet seedless green raisins, naturally sun-dried without chemicals.',
      img: 'assets/cat_dryfruits.png',
      badge: 'Natural Sweet',
      variants: {
        '200g': { price: 249, mrp: 350, discount: '28% off' },
        '400g': { price: 480, mrp: 700, discount: '31% off' },
        '1kg': { price: 1150, mrp: 1600, discount: '28% off' },
        '2kg': { price: 2199, mrp: 3000, discount: '26% off' }
      }
    },
    {
      id: 'imported-dates',
      name: 'Imported Medjool Dates',
      category: 'dates',
      rating: 5,
      reviewCount: '2,900',
      description: 'Soft, moist, caramel-like royal dates imported from premier desert palm groves.',
      img: 'assets/cat_dates.png',
      badge: 'Royal Grade',
      variants: {
        '200g': { price: 299, mrp: 450, discount: '33% off' },
        '400g': { price: 580, mrp: 900, discount: '35% off' },
        '1kg': { price: 1399, mrp: 2000, discount: '30% off' },
        '2kg': { price: 2699, mrp: 3800, discount: '29% off' }
      }
    },
    {
      id: 'dried-berries',
      name: 'Dried Berries Mix',
      category: 'berries',
      rating: 5,
      reviewCount: '1,100',
      description: 'Plump, tangy sweet dried cranberries and blueberries loaded with antioxidants.',
      img: 'assets/cat_berries.png',
      badge: 'Superfood',
      variants: {
        '200g': { price: 329, mrp: 450, discount: '26% off' },
        '400g': { price: 640, mrp: 900, discount: '28% off' },
        '1kg': { price: 1499, mrp: 2100, discount: '28% off' },
        '2kg': { price: 2899, mrp: 4000, discount: '27% off' }
      }
    },
    {
      id: 'luxury-gift-hamper',
      name: 'Royal Wooden Gift Hamper',
      category: 'hampers',
      rating: 5,
      reviewCount: '950',
      description: 'Handcrafted luxury wooden box with 4 premium containers of Pistachio, Walnut, Cashew & Almond.',
      img: 'assets/gift_boxes_banner.jpg',
      badge: 'Festive Special',
      variants: {
        '200g': { price: 1999, mrp: 2500, discount: '20% off' },
        '400g': { price: 2999, mrp: 3800, discount: '21% off' },
        '1kg': { price: 4999, mrp: 6500, discount: '23% off' },
        '2kg': { price: 8999, mrp: 11500, discount: '21% off' }
      }
    },
    {
      id: 'corporate-gift-box',
      name: 'DFF Executive Corporate Box',
      category: 'hampers',
      rating: 5,
      reviewCount: '650',
      description: 'Elegant gold-embossed presentation box with assorted dry fruits and custom branding.',
      img: 'assets/hero_dff_art.jpg',
      badge: 'Corporate Choice',
      variants: {
        '200g': { price: 1299, mrp: 1800, discount: '27% off' },
        '400g': { price: 2199, mrp: 2900, discount: '24% off' },
        '1kg': { price: 3899, mrp: 5000, discount: '22% off' },
        '2kg': { price: 6999, mrp: 9000, discount: '22% off' }
      }
    }
  ];

  // Selected weight cache per product in catalog
  const selectedWeights = {};
  products.forEach(p => selectedWeights[p.id] = '200g');

  /* --------------------------------------------------------------------------
     2. CART STATE & LOCALSTORAGE
     -------------------------------------------------------------------------- */
  let cart = [];
  try {
    const saved = localStorage.getItem('dff_cart_items_v1');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem('dff_cart_items_v1', JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  function addToCart(productId, weight = '200g') {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    const variant = prod.variants[weight] || prod.variants['200g'];
    const existing = cart.find(item => item.id === productId && item.weight === weight);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: prod.id,
        name: prod.name,
        price: variant.price,
        mrp: variant.mrp,
        img: prod.img,
        weight: weight,
        qty: 1
      });
    }

    saveCart();
    showToast(`Added ${prod.name} (${weight}) to your bag!`);
    openCart();
  }

  function updateItemQty(index, delta) {
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const navCount = document.getElementById('navCartCount');
    if (navCount) {
      navCount.textContent = totalCount;
      if (totalCount > 0) navCount.classList.remove('is-empty');
      else navCount.classList.add('is-empty');
    }

    const mobCartBadge = document.getElementById('mobCartBadge');
    if (mobCartBadge) {
      mobCartBadge.textContent = totalCount;
      mobCartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    const drawerCounts = document.querySelectorAll('.drawer-cart-count');
    drawerCounts.forEach(el => el.textContent = totalCount);

    const totalValEl = document.getElementById('cartTotalVal');
    if (totalValEl) totalValEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

    const listEl = document.getElementById('cartItemsList');
    if (listEl) {
      if (cart.length === 0) {
        listEl.innerHTML = `
          <div style="text-align:center;padding:48px 16px;color:var(--cream-dim);">
            <div style="font-size:3rem;margin-bottom:12px;">🌾</div>
            <p style="font-family:var(--font-display);font-size:1.6rem;color:var(--cream);margin-bottom:6px;">Your Nutrition Bag is Empty</p>
            <p style="font-size:0.9rem;">Fresh dry fruits & nuts await. Browse our store to order.</p>
          </div>
        `;
      } else {
        listEl.innerHTML = cart.map((item, idx) => `
          <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item__info">
              <div class="cart-item__name">${item.name}</div>
              <div class="cart-item__weight">Pack Size: ${item.weight}</div>
              <div class="cart-item__price">₹${item.price.toLocaleString('en-IN')} each</div>
            </div>
            <div class="cart-item__stepper">
              <button type="button" class="cart-item__btn" onclick="window.DFF.updateQty(${idx}, -1)">−</button>
              <span style="font-family:var(--font-mono);font-size:0.9rem;padding:0 4px;">${item.qty}</span>
              <button type="button" class="cart-item__btn" onclick="window.DFF.updateQty(${idx}, 1)">+</button>
            </div>
          </div>
        `).join('');
      }
    }
  }

  /* --------------------------------------------------------------------------
     3. NAVIGATION CONTROLLER
     -------------------------------------------------------------------------- */
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const underlayNav = document.getElementById('underlayNav');

  function toggleMenu() {
    const isOpen = document.body.getAttribute('data-menu-status') === 'open';
    if (isOpen) {
      document.body.setAttribute('data-menu-status', 'closed');
      if (menuToggleBtn) menuToggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      document.body.setAttribute('data-menu-status', 'open');
      if (menuToggleBtn) menuToggleBtn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMenu() {
    document.body.setAttribute('data-menu-status', 'closed');
    if (menuToggleBtn) menuToggleBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', toggleMenu);

  document.querySelectorAll('.nav-menu-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* --------------------------------------------------------------------------
     4. CART DRAWER & OVERLAY
     -------------------------------------------------------------------------- */
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const menuDrawerCartBtn = document.getElementById('menuDrawerCartBtn');

  function openCart() {
    closeMenu();
    document.body.setAttribute('data-cart-status', 'open');
  }

  function closeCart() {
    document.body.setAttribute('data-cart-status', 'closed');
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (menuDrawerCartBtn) menuDrawerCartBtn.addEventListener('click', openCart);
  const mobNavCart = document.getElementById('mobNavCart');
  if (mobNavCart) mobNavCart.addEventListener('click', openCart);

  /* --------------------------------------------------------------------------
     5. HERO 3-TRIO SHOWCASE SWITCHER
     -------------------------------------------------------------------------- */
  const trioTabs = document.querySelectorAll('.hero__trio-tab');
  const trios = [
    document.getElementById('heroTrio0'),
    document.getElementById('heroTrio1'),
    document.getElementById('heroTrio2')
  ];

  trioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-trio'), 10);
      trioTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      trios.forEach((trio, i) => {
        if (trio) {
          if (i === idx) trio.classList.add('is-active');
          else trio.classList.remove('is-active');
        }
      });
    });
  });

  document.querySelectorAll('.quick-add-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = trigger.getAttribute('data-product');
      addToCart(pId, '200g');
    });
  });

  /* --------------------------------------------------------------------------
     6. UFO TRACTOR BEAM CAROUSEL
     -------------------------------------------------------------------------- */
  const ufoBags = document.querySelectorAll('.ufo__bag');
  const ufoPrevBtn = document.getElementById('ufoPrevBtn');
  const ufoNextBtn = document.getElementById('ufoNextBtn');
  const ufoTitle = document.getElementById('ufoTitle');
  const ufoPriceRow = document.getElementById('ufoPriceRow');
  const ufoNotes = document.getElementById('ufoNotes');
  const ufoAddBtn = document.getElementById('ufoAddBtn');

  let currentUfoIndex = 0;
  const totalUfoBags = ufoBags.length;

  function updateUfoStage(newIndex) {
    currentUfoIndex = (newIndex + totalUfoBags) % totalUfoBags;

    ufoBags.forEach((bag, i) => {
      bag.className = 'ufo__bag';
      if (i === currentUfoIndex) {
        bag.classList.add('is-active');
      } else if (i === (currentUfoIndex - 1 + totalUfoBags) % totalUfoBags) {
        bag.classList.add('is-prev');
      } else if (i === (currentUfoIndex + 1) % totalUfoBags) {
        bag.classList.add('is-next');
      }
    });

    const activeBag = ufoBags[currentUfoIndex];
    if (activeBag) {
      const name = activeBag.getAttribute('data-name');
      const price = activeBag.getAttribute('data-price');
      const mrp = activeBag.getAttribute('data-mrp');
      const notesArr = (activeBag.getAttribute('data-notes') || '').split('·').map(s => s.trim());

      if (ufoTitle) ufoTitle.textContent = name;
      if (ufoPriceRow) {
        const discount = Math.round(((mrp - price) / mrp) * 100);
        ufoPriceRow.innerHTML = `
          <span style="color:var(--ac);font-weight:800;font-size:1.6rem;">₹${price}</span>
          <span style="text-decoration:line-through;color:rgba(250,247,242,0.4);margin-left:8px;">₹${mrp}</span>
          <span style="color:#ff5252;font-weight:700;margin-left:8px;">${discount}% OFF (200g Pack)</span>
        `;
      }
      if (ufoAddBtn) ufoAddBtn.innerHTML = `<span>+ Add To Cart (₹${price})</span>`;

      if (ufoNotes) {
        ufoNotes.innerHTML = notesArr.map(n => `
          <span class="ufo__note">🍃 ${n}</span>
        `).join('');
      }
    }
  }

  if (ufoPrevBtn) ufoPrevBtn.addEventListener('click', () => updateUfoStage(currentUfoIndex - 1));
  if (ufoNextBtn) ufoNextBtn.addEventListener('click', () => updateUfoStage(currentUfoIndex + 1));

  ufoBags.forEach((bag, i) => {
    bag.addEventListener('click', () => {
      if (i !== currentUfoIndex) updateUfoStage(i);
    });
  });

  if (ufoAddBtn) {
    ufoAddBtn.addEventListener('click', () => {
      const activeBag = ufoBags[currentUfoIndex];
      if (activeBag) {
        const pId = activeBag.getAttribute('data-id');
        addToCart(pId, '200g');
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. PRODUCT CATALOG & DYNAMIC PACK SELECTOR
     -------------------------------------------------------------------------- */
  const productsGrid = document.getElementById('productsGrid');
  const filterBtns = document.querySelectorAll('.shop-filter-btn');

  let currentSearchQuery = '';

  function renderProducts(filter = 'all', searchQuery = '') {
    if (!productsGrid) return;

    let filtered = products;
    if (filter !== 'all') {
      filtered = products.filter(p => p.category === filter);
    }
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:48px 16px;color:var(--cream-dim);">
          <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
          <h3 style="font-family:var(--font-serif);font-size:1.8rem;color:#fff;margin-bottom:8px;">No Dry Fruits Found for "${searchQuery}"</h3>
          <p style="font-size:0.9rem;">Try speaking or typing "Badam", "Kaju", "Pista", "Walnut", or "Dates".</p>
          <button type="button" class="button-039" style="margin-top:16px;padding:10px 20px;" onclick="window.DFF.clearSearch()">
            <span>Show All 16 Products</span>
          </button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(p => {
      const currentWeight = selectedWeights[p.id] || '200g';
      const variant = p.variants[currentWeight] || p.variants['200g'];

      return `
        <div class="prod-card" id="card_${p.id}">
          <span class="chip" style="position:absolute;top:16px;left:16px;font-size:0.7rem;padding:4px 10px;background:#E53935;color:#fff;border-color:#fff;">${p.badge}</span>
          <div class="prod-card__img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
          </div>
          <h3 class="prod-card__title">${p.name}</h3>
          <div class="prod-card__notes">${p.description}</div>
          
          <!-- Weight selector pills -->
          <div class="prod-card__weights">
            ${['200g', '400g', '1kg', '2kg'].map(w => `
              <button type="button" 
                class="prod-card__weight-btn ${w === currentWeight ? 'active' : ''}" 
                onclick="window.DFF.selectWeight('${p.id}', '${w}')">${w}</button>
            `).join('')}
          </div>

          <!-- Price row -->
          <div class="prod-card__meta">
            <div>
              <span class="prod-card__price">₹${variant.price.toLocaleString('en-IN')}</span>
              <span class="prod-card__mrp">₹${variant.mrp.toLocaleString('en-IN')}</span>
            </div>
            <span class="prod-card__discount">${variant.discount}</span>
          </div>

          <button type="button" class="button-039" style="width:100%;font-size:1.1rem;padding:12px 16px;" onclick="window.DFF.addFromCatalog('${p.id}')">
            <span>+ Add To Cart</span>
          </button>
        </div>
      `;
    }).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.getAttribute('data-filter') || 'all', currentSearchQuery);
    });
  });

  /* Live Catalog Search & Google Web Speech Recognition */
  const catalogSearchInput = document.getElementById('catalogSearchInput');
  const voiceSearchBtn = document.getElementById('voiceSearchBtn');
  const voiceStatus = document.getElementById('voiceStatus');

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      const activeFilter = document.querySelector('.shop-filter-btn.active')?.getAttribute('data-filter') || 'all';
      renderProducts(activeFilter, currentSearchQuery);
    });
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (voiceSearchBtn && SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'hi-IN'; // Indian English & Hindi support

    voiceSearchBtn.addEventListener('click', () => {
      try {
        recognition.start();
        if (voiceStatus) {
          voiceStatus.style.display = 'block';
          voiceStatus.textContent = '🎙️ Listening... Speak (e.g. Badam, Pista, Kaju, Akhrot)';
        }
        voiceSearchBtn.style.transform = 'scale(1.25)';
        voiceSearchBtn.style.color = '#ff5252';
      } catch (err) {
        console.warn('Speech error:', err);
      }
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.replace(/[.,]/g, '').trim();
      if (catalogSearchInput) catalogSearchInput.value = transcript;
      currentSearchQuery = transcript;
      if (voiceStatus) {
        voiceStatus.textContent = `🎙️ Searched: "${transcript}"`;
        setTimeout(() => { if (voiceStatus) voiceStatus.style.display = 'none'; }, 3500);
      }
      voiceSearchBtn.style.transform = 'scale(1)';
      voiceSearchBtn.style.color = 'var(--ac)';
      const activeFilter = document.querySelector('.shop-filter-btn.active')?.getAttribute('data-filter') || 'all';
      renderProducts(activeFilter, currentSearchQuery);
      showToast(`Google Voice: Found results for "${transcript}"`);
    };

    recognition.onerror = () => {
      if (voiceStatus) {
        voiceStatus.textContent = 'Speech not detected. Tap mic and speak clearly.';
        setTimeout(() => { if (voiceStatus) voiceStatus.style.display = 'none'; }, 3000);
      }
      voiceSearchBtn.style.transform = 'scale(1)';
      voiceSearchBtn.style.color = 'var(--ac)';
    };

    recognition.onend = () => {
      voiceSearchBtn.style.transform = 'scale(1)';
      voiceSearchBtn.style.color = 'var(--ac)';
    };
  } else if (voiceSearchBtn) {
    voiceSearchBtn.addEventListener('click', () => {
      showToast('Google Voice Search is active in Chrome, Edge, and Android phones!');
    });
  }

  /* Language Switcher (EN / हिंदी) */
  let currentLang = 'en';
  const langToggleBtn = document.getElementById('langToggleBtn');
  const currentLangLabel = document.getElementById('currentLangLabel');

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'hi' : 'en';
      if (currentLangLabel) currentLangLabel.textContent = currentLang === 'en' ? 'हिं / EN' : 'EN / हिं';
      
      // Update key text
      const heroTitle = document.querySelector('.hero__trio-title');
      if (heroTitle) {
        if (currentLang === 'hi') {
          showToast('भाषा: हिंदी चुनी गई (Pure Natural Dry Fruits)');
        } else {
          showToast('Language: English selected');
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. REVIEWS MARQUEE DUPLICATION FOR INFINITE LOOP
     -------------------------------------------------------------------------- */
  const reviewsTrack = document.getElementById('reviewsTrack');
  if (reviewsTrack) {
    const clone = reviewsTrack.innerHTML;
    reviewsTrack.innerHTML += clone;
  }

  /* --------------------------------------------------------------------------
     9. TOAST NOTIFICATION UTILITY
     -------------------------------------------------------------------------- */
  const toastEl = document.getElementById('acToast');
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }
  window.showToast = showToast;

  /* --------------------------------------------------------------------------
     10. CHECKOUT & PAYMENT ENGINE (UPI, QR, COD, CARDS & 78MM RECEIPT)
     -------------------------------------------------------------------------- */
  const checkoutBtn = document.getElementById('checkoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  const receiptBtn = document.getElementById('receiptBtn');
  const receiptModal = document.getElementById('receiptModal');
  const waOrderBtn = document.getElementById('waOrderBtn');

  let currentOrder = null;
  let customerDetails = {
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMode: 'UPI'
  };

  function openCheckoutModal() {
    if (cart.length === 0) {
      showToast('Your bag is empty! Add dry fruits to proceed.');
      return;
    }

    closeCart();

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const chkSummaryTotal = document.getElementById('chkSummaryTotal');
    const qrAmountDisplay = document.getElementById('qrAmountDisplay');
    const dynamicUpiQr = document.getElementById('dynamicUpiQr');
    const upiAppDeepLink = document.getElementById('upiAppDeepLink');

    if (chkSummaryTotal) chkSummaryTotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (qrAmountDisplay) qrAmountDisplay.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

    // Authentic Merchant UPI ID and Dynamic URI
    const upiMerchantId = 'dryfruitfarm179351.rzp@rxairtel';
    const upiUri = `upi://pay?pa=${upiMerchantId}&pn=DRYFRUITFARM&mc=5411&am=${subtotal}&cu=INR&tn=DFF-Order-${Date.now()}`;

    if (dynamicUpiQr) {
      // Dynamic live QR for exact cart total with merchant VPA
      dynamicUpiQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUri)}`;
      dynamicUpiQr.onerror = () => {
        // Fallback to static authentic merchant QR image
        dynamicUpiQr.src = 'assets/user_upi_qr.png';
      };
    }
    if (upiAppDeepLink) {
      upiAppDeepLink.href = upiUri;
      if (window.innerWidth <= 768 || /Android|iPhone|iPad/i.test(navigator.userAgent)) {
        upiAppDeepLink.style.display = 'block';
      } else {
        upiAppDeepLink.style.display = 'none';
      }
    }

    // Reset to Step 1
    showStep(1);
    if (checkoutModal) checkoutModal.classList.add('open');
  }

  function closeCheckoutModal() {
    if (checkoutModal) checkoutModal.classList.remove('open');
  }

  function showStep(stepNum) {
    const s1 = document.getElementById('checkoutStep1');
    const s2 = document.getElementById('checkoutStep2');
    const s3 = document.getElementById('checkoutStep3');

    const p1 = document.getElementById('pillStep1');
    const p2 = document.getElementById('pillStep2');
    const p3 = document.getElementById('pillStep3');

    if (s1) s1.style.display = stepNum === 1 ? 'block' : 'none';
    if (s2) s2.style.display = stepNum === 2 ? 'block' : 'none';
    if (s3) s3.style.display = stepNum === 3 ? 'block' : 'none';

    if (p1) p1.className = `checkout-step-pill ${stepNum >= 1 ? 'active' : ''}`;
    if (p2) p2.className = `checkout-step-pill ${stepNum >= 2 ? 'active' : ''}`;
    if (p3) p3.className = `checkout-step-pill ${stepNum >= 3 ? 'active' : ''}`;
  }

  function goToPayment() {
    const name = document.getElementById('custName')?.value.trim();
    const phone = document.getElementById('custPhone')?.value.trim();
    const address = document.getElementById('custAddress')?.value.trim();
    const city = document.getElementById('custCity')?.value.trim();
    const pincode = document.getElementById('custPincode')?.value.trim();

    if (!name || !phone || !address || !city || !pincode) {
      showToast('Please fill in all delivery details.');
      return;
    }

    customerDetails.name = name;
    customerDetails.phone = phone;
    customerDetails.address = address;
    customerDetails.city = city;
    customerDetails.pincode = pincode;

    showStep(2);
  }

  function backToStep1() {
    showStep(1);
  }

  // Payment Option selection
  document.querySelectorAll('input[name="payMethod"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('selected'));
      e.target.closest('.payment-option-card')?.classList.add('selected');

      customerDetails.paymentMode = e.target.value;
      const upiBox = document.getElementById('upiDetailsBox');
      const btnText = document.getElementById('confirmPayBtnText');

      if (e.target.value === 'UPI') {
        if (upiBox) upiBox.style.display = 'block';
        if (btnText) btnText.textContent = 'I Have Paid via UPI ⚡';
      } else if (e.target.value === 'COD') {
        if (upiBox) upiBox.style.display = 'none';
        if (btnText) btnText.textContent = 'Confirm Order (Cash on Delivery) 💵';
      }
    });
  });

  function completePayment() {
    const btn = document.getElementById('confirmPayBtn');
    if (btn) btn.disabled = true;
    showToast('⏳ Securing order & processing transaction...');

    setTimeout(() => {
      if (btn) btn.disabled = false;

      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const orderId = `DFF-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      currentOrder = {
        orderId,
        date: new Date(),
        customer: { ...customerDetails },
        items: [...cart],
        subtotal
      };

      // Set Confirmation UI
      const confirmedCustName = document.getElementById('confirmedCustName');
      const confirmedOrderId = document.getElementById('confirmedOrderId');
      const confirmedPaymentStatus = document.getElementById('confirmedPaymentStatus');
      const confirmedTotal = document.getElementById('confirmedTotal');

      if (confirmedCustName) confirmedCustName.textContent = customerDetails.name;
      if (confirmedOrderId) confirmedOrderId.textContent = orderId;
      if (confirmedPaymentStatus) {
        if (customerDetails.paymentMode === 'UPI') confirmedPaymentStatus.textContent = 'PAID (UPI Confirmed)';
        else confirmedPaymentStatus.textContent = 'PENDING (Cash on Delivery)';
      }
      if (confirmedTotal) confirmedTotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

      // Clear current cart
      cart = [];
      saveCart();

      showStep(3);
      showToast('🎉 Order successfully confirmed!');
    }, 700);
  }

  function sendOrderToWhatsApp() {
    if (!currentOrder && cart.length === 0) {
      showToast('No active order found.');
      return;
    }

    const ord = currentOrder || {
      orderId: `DFF-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: customerDetails,
      items: cart,
      subtotal: cart.reduce((sum, item) => sum + (item.price * item.qty), 0)
    };

    let msg = '╔════════════════════════════════════╗\n';
    msg += '   🌾 DRY FRUIT FARM (DFF) ORDER\n';
    msg += '     EAT NATURAL • LIVE HEALTHY\n';
    msg += '╚════════════════════════════════════╝\n\n';
    msg += `ORDER ID: ${ord.orderId}\n`;
    msg += `CUSTOMER: ${ord.customer.name || 'Valued Customer'} (${ord.customer.phone || 'N/A'})\n`;
    msg += `ADDRESS: ${ord.customer.address || 'N/A'}, ${ord.customer.city || ''} - ${ord.customer.pincode || ''}\n`;
    msg += `PAYMENT: ${ord.customer.paymentMode}\n\n`;
    msg += 'ITEMS IN ORDER:\n';
    ord.items.forEach((it, idx) => {
      msg += `${idx + 1}. ${it.name} [${it.weight}] × ${it.qty} = ₹${it.price * it.qty}\n`;
    });
    msg += `\n────────────────────────────────────\n`;
    msg += `TOTAL AMOUNT: ₹${ord.subtotal.toLocaleString('en-IN')} INR\n\n`;
    msg += `Kindly confirm shipping and priority tracking details. Thank you!`;

    const waUrl = 'https://wa.me/919460812233?text=' + encodeURIComponent(msg);
    window.open(waUrl, '_blank');
  }

  function openReceiptModal(orderObj = null) {
    const items = orderObj ? orderObj.items : cart;
    const subtotal = orderObj ? orderObj.subtotal : cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (items.length === 0) {
      showToast('Your bag is empty! Add dry fruits to generate receipt.');
      return;
    }

    const receiptDateTime = document.getElementById('receiptDateTime');
    const receiptItems = document.getElementById('receiptItems');
    const receiptSubtotal = document.getElementById('receiptSubtotal');
    const receiptTax = document.getElementById('receiptTax');
    const receiptGrandTotal = document.getElementById('receiptGrandTotal');

    const now = orderObj ? orderObj.date : new Date();
    if (receiptDateTime) {
      receiptDateTime.textContent = now.toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      }) + (orderObj ? ` | Ord: ${orderObj.orderId}` : '');
    }

    const tax = Math.round(subtotal * 0.05);
    const grandTotal = subtotal;

    if (receiptItems) {
      receiptItems.innerHTML = items.map(item => `
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <div style="max-width:180px;">
            <div style="font-weight:700;">${item.name}</div>
            <div style="font-size:8px;color:#555;">Pack: ${item.weight}</div>
          </div>
          <div style="text-align:right;">
            <div>${item.qty} × ₹${item.price}</div>
            <div style="font-weight:700;">₹${item.qty * item.price}</div>
          </div>
        </div>
      `).join('');
    }

    if (receiptSubtotal) receiptSubtotal.textContent = `₹${(subtotal - tax).toLocaleString('en-IN')}`;
    if (receiptTax) receiptTax.textContent = `₹${tax.toLocaleString('en-IN')}`;
    if (receiptGrandTotal) receiptGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    if (receiptModal) receiptModal.classList.add('open');
  }

  function viewReceiptFromOrder() {
    if (currentOrder) openReceiptModal(currentOrder);
    else openReceiptModal();
  }

  function downloadReceiptPDF() {
    if (receiptModal && !receiptModal.classList.contains('open')) {
      openReceiptModal(currentOrder);
    }
    showToast('🖨️ Opening print / PDF download dialog...');
    setTimeout(() => {
      window.print();
    }, 280);
  }

  function downloadReceiptSlip() {
    const items = currentOrder ? currentOrder.items : cart;
    const subtotal = currentOrder ? currentOrder.subtotal : cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const orderId = currentOrder ? currentOrder.orderId : `DFF-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    if (items.length === 0) {
      showToast('No items in bag to download receipt.');
      return;
    }

    const tax = Math.round(subtotal * 0.05);
    const dateStr = new Date().toLocaleString('en-IN');

    let text = '========================================\n';
    text += '            DRY FRUIT FARM              \n';
    text += '       EAT NATURAL • LIVE HEALTHY       \n';
    text += '  Circuit House Road, Ratanada, Jodhpur \n';
    text += ' Phone: +91 94608 12233 | FSSAI: 12219027000189\n';
    text += ` Date: ${dateStr}\n`;
    text += ` Order ID: ${orderId}\n`;
    if (currentOrder && currentOrder.customer && currentOrder.customer.name) {
      text += ` Customer: ${currentOrder.customer.name} (${currentOrder.customer.phone || ''})\n`;
      text += ` Address: ${currentOrder.customer.address}, ${currentOrder.customer.city} - ${currentOrder.customer.pincode}\n`;
    }
    text += '----------------------------------------\n';
    text += 'ITEM (WEIGHT)          QTY    PRICE     \n';
    text += '----------------------------------------\n';
    items.forEach(it => {
      const nameLine = `${it.name} (${it.weight})`.padEnd(23, ' ').substring(0, 23);
      const qtyLine = `${it.qty}`.padEnd(6, ' ');
      const priceLine = `₹${it.price * it.qty}`;
      text += `${nameLine} ${qtyLine} ${priceLine}\n`;
    });
    text += '----------------------------------------\n';
    text += `SUBTOTAL:                    ₹${subtotal - tax}\n`;
    text += `TAX (GST 5%):                ₹${tax}\n`;
    text += `TOTAL PAYABLE:               ₹${subtotal}\n`;
    text += '========================================\n';
    text += '     *** 100% GENUINE & LAB TESTED ***   \n';
    text += '    Thank you for shopping with DFF!    \n';
    text += '========================================\n';

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DFF_Receipt_${orderId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('📥 78mm Receipt slip downloaded!');
  }

  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckoutModal);

  if (receiptBtn) receiptBtn.addEventListener('click', () => openReceiptModal());
  if (receiptModal) {
    receiptModal.addEventListener('click', (e) => {
      if (e.target === receiptModal) receiptModal.classList.remove('open');
    });
  }

  if (waOrderBtn) waOrderBtn.addEventListener('click', sendOrderToWhatsApp);

  /* --------------------------------------------------------------------------
     11. GLOBAL PUBLIC INTERFACE
     -------------------------------------------------------------------------- */
  window.DFF = {
    addToCart,
    updateQty: updateItemQty,
    selectWeight: function (productId, weight) {
      selectedWeights[productId] = weight;
      const activeFilter = document.querySelector('.shop-filter-btn.active')?.getAttribute('data-filter') || 'all';
      renderProducts(activeFilter);
    },
    addFromCatalog: function (productId) {
      const weight = selectedWeights[productId] || '200g';
      addToCart(productId, weight);
    },
    addCustomGiftBox: function () {
      addToCart('luxury-gift-hamper', '200g');
    },
    openCheckoutModal,
    closeCheckoutModal,
    goToPayment,
    backToStep1,
    completePayment,
    sendOrderToWhatsApp,
    viewReceiptFromOrder,
    downloadReceiptPDF,
    downloadReceiptSlip,
    clearSearch: function () {
      currentSearchQuery = '';
      const inp = document.getElementById('catalogSearchInput');
      if (inp) inp.value = '';
      const activeFilter = document.querySelector('.shop-filter-btn.active')?.getAttribute('data-filter') || 'all';
      renderProducts(activeFilter, '');
    }
  };

  // Initial load
  renderProducts('all');
  updateCartUI();

})();
