/**
 * Yohanan Coffee — Main Interactive JavaScript
 * Addis Ababa, Ethiopia
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. AUTHENTIC MENU DATA & RENDERING
     ========================================================================== */
  const menuData = {
    breakfast: [
      {
        amharic: "እንቁላል ፍርፍር",
        english: "Scrambled Egg Firfir",
        desc: "Ethiopian scrambled eggs spiced with berbere, onions, jalapeños & tomatoes, served with warm crusty bread.",
        price: 150,
        tag: "Popular"
      },
      {
        amharic: "እንቁላል በስጋ",
        english: "Egg & Beef Sauté",
        desc: "Savory lean beef cubes tossed with spiced scrambled eggs, sweet peppers and aromatic herbs.",
        price: 200,
        tag: "House Special"
      },
      {
        amharic: "እንቁላል ሳንድዊች",
        english: "Fresh Egg Sandwich",
        desc: "Fluffy seasoned egg omelet with tomatoes, crisp greens, and house dressing tucked inside fresh artisan bread.",
        price: 150,
        tag: ""
      },
      {
        amharic: "እንቁላል ስልስ",
        english: "Egg in Spiced Sauce",
        desc: "Eggs simmered gently in a fragrant, slow-cooked spicy berbere and tomato gravy.",
        price: 150,
        tag: ""
      },
      {
        amharic: "ፉል ኖርማል",
        english: "Classic Ful",
        desc: "Simmered fava beans seasoned with cumin, garlic, olive oil, diced tomatoes, and warm green peppers.",
        price: 150,
        tag: "Fasting Friendly"
      },
      {
        amharic: "ፉል እስፔሻል",
        english: "Special Ful Feast",
        desc: "Creamy seasoned fava beans crowned with fresh ayib cottage cheese, boiled egg, chili, and warm bread.",
        price: 200,
        tag: "Chef's Pick"
      },
      {
        amharic: "ጨጨብሳ ኖርማል",
        english: "Classic Chechebsa",
        desc: "Shredded warm kita flatbread infused with fragrant spiced niter kibbeh butter and mild berbere.",
        price: 150,
        tag: "Traditional"
      },
      {
        amharic: "ጨጨብሳ እስፔሻል",
        english: "Special Chechebsa with Honey",
        desc: "Warm shredded kita lavishly drizzled with pure Ethiopian highland honey and fresh ayib cottage cheese.",
        price: 200,
        tag: "Must Try"
      },
      {
        amharic: "ፖስታ በስጎ",
        english: "Pasta with Beef Sugo",
        desc: "Al dente pasta smothered in our savory slow-cooked beef and herb tomato sauce.",
        price: 200,
        tag: ""
      },
      {
        amharic: "ፖስታ በአትክልት",
        english: "Vegetable Garden Pasta",
        desc: "Pasta tossed with sautéed carrots, bell peppers, zucchini, garlic, and fresh basil.",
        price: 200,
        tag: "Vegan / Fasting"
      },
      {
        amharic: "የፆም ፍርፍር",
        english: "Fasting Firfir (Vegan)",
        desc: "Shredded injera soaked in spicy berbere onion stew with rosemary and green chili.",
        price: 150,
        tag: "Vegan / Fasting"
      },
      {
        amharic: "ሥጋ ፍርፍር",
        english: "Hearty Beef Firfir",
        desc: "Tender beef pieces sautéed with seasoned injera gravy, spiced clarified butter and green peppers.",
        price: 200,
        tag: "Customer Favorite"
      }
    ],

    coffee: [
      {
        amharic: "ማኪያቶ",
        english: "Classic Ethiopian Macchiato",
        desc: "Addis Ababa's pride: double-shot single-origin espresso crowned with thick, velvety steamed milk microfoam.",
        price: 80,
        tag: "Bestseller"
      },
      {
        amharic: "እስቲም ቡና",
        english: "Steamed Ethiopian Buna",
        desc: "Freshly roasted single-origin Arabica pulled with thick hazelnut-colored crema.",
        price: 50,
        tag: "Single Origin"
      },
      {
        amharic: "ስፕሪስ ቡና",
        english: "Coffee Spris (Tea & Coffee)",
        desc: "The beloved Ethiopian café classic: layered spiced black tea base topped with bold espresso.",
        price: 60,
        tag: "Addis Classic"
      },
      {
        amharic: "የጀበና ቡና",
        english: "Traditional Jebena Buna",
        desc: "Slowly brewed in our authentic black clay pot, served hot with fresh roasted popcorn (fendisha).",
        price: 70,
        tag: "Ceremony"
      },
      {
        amharic: "ድርብ ማኪያቶ",
        english: "Double Shot Macchiato",
        desc: "For true coffee aficionados — double strength espresso balanced with creamy steamed foam.",
        price: 100,
        tag: "Extra Bold"
      },
      {
        amharic: "ካፌ ላቴ",
        english: "Smooth Caffe Latte",
        desc: "Gentle espresso folded into generous warm silky milk with delicate latte art.",
        price: 90,
        tag: ""
      }
    ],

    tea: [
      {
        amharic: "ሻይ",
        english: "Spiced Black Tea",
        desc: "Selected Ethiopian highland tea steeped with fresh cloves, cardamom, and cinnamon.",
        price: 35,
        tag: "Classic"
      },
      {
        amharic: "ቀሽር ሻይ",
        english: "Fresh Ginger Spiced Tea",
        desc: "Spicy crushed ginger root infused with cloves and honey for natural warmth and vigor.",
        price: 50,
        tag: "Wellness"
      },
      {
        amharic: "የለውዝ ሻይ",
        english: "Peanut Infusion Tea",
        desc: "Rich traditional roasted peanut brew with comforting sweetness and fragrant aroma.",
        price: 60,
        tag: "Traditional"
      },
      {
        amharic: "አረንጓዴ ሻይ",
        english: "Organic Green Tea",
        desc: "Pure steamed green tea leaves served with fresh lemon slices and honey on request.",
        price: 60,
        tag: "Antioxidant"
      },
      {
        amharic: "የእፅዋት ሻይ",
        english: "Hibiscus Cinnamon Cooler",
        desc: "Bright tart hibiscus flower infusion brewed with cinnamon sticks — delicious hot or iced.",
        price: 65,
        tag: "Caffeine Free"
      }
    ],

    "cold-drinks": [
      {
        amharic: "ስፕሪስ ጁስ",
        english: "Layered Spris Juice",
        desc: "Three thick layers of freshly blended ripe avocado, sweet papaya, and mango, served with a lime wedge.",
        price: 120,
        tag: "Signature Fresh"
      },
      {
        amharic: "የብርቱካን ጁስ",
        english: "Fresh Squeezed Orange",
        desc: "Pure 100% freshly pressed sweet oranges made directly to order. No added sugar.",
        price: 100,
        tag: "100% Pure"
      },
      {
        amharic: "ሎሚ ናዕናዕ",
        english: "Lemon Mint Sparkler",
        desc: "Fresh muddled garden mint, zesty Ethiopian limes, and sparkling Ambo mineral water.",
        price: 80,
        tag: "Cooling"
      },
      {
        amharic: "ለስላሳ መጠጦች",
        english: "Chilled Soft Drinks",
        desc: "Coca-Cola, Fanta, Sprite, or chilled sparkling Ambo Mineral Water in glass bottles.",
        price: 50,
        tag: "Chilled"
      }
    ],

    pastries: [
      {
        amharic: "ቅቤ ክሮዋሳን",
        english: "Classic French Croissant",
        desc: "Flaky, multi-layered butter pastry baked to a golden crisp every morning.",
        price: 90,
        tag: "Baked Fresh"
      },
      {
        amharic: "ቸኮሌት ክሮዋሳን",
        english: "Pain au Chocolat",
        desc: "Golden laminated pastry dough wrapped around rich, melt-in-your-mouth dark chocolate batons.",
        price: 110,
        tag: "Sweet Pick"
      },
      {
        amharic: "የቀኑ ኬክ",
        english: "Artisanal Cake of the Day",
        desc: "Rotating daily selections: Moist Spiced Carrot Cake, Rich Chocolate Fudge, or Lemon Ricotta.",
        price: 130,
        tag: "Rotating"
      },
      {
        amharic: "የምስር ሳምቡሳ",
        english: "Crispy Lentil Sambusa (2 pcs)",
        desc: "Handcrafted crispy pastry pockets stuffed with savory seasoned brown lentils, onions, and jalapeños.",
        price: 60,
        tag: "Savory / Vegan"
      }
    ],

    snacks: [
      {
        amharic: "ጩኮ",
        english: "Traditional Oromo Chuko",
        desc: "Wholesome roasted barley powder seasoned with clarified spiced butter and cardamom. Incredibly satisfying.",
        price: 100,
        tag: "Heritage Craft"
      },
      {
        amharic: "ፈንዲሻ",
        english: "Fresh Popcorn (Fendisha)",
        desc: "Warm, lightly salted corn freshly popped beside our coffee roasting station.",
        price: 40,
        tag: "Ceremony Pair"
      },
      {
        amharic: "ቆሎና ለውዝ",
        english: "Roasted Kolo & Peanuts",
        desc: "Crunchy toasted whole grains, chickpeas, and peanuts seasoned with a touch of salt.",
        price: 50,
        tag: "Crunchy Snack"
      }
    ]
  };

  const menuPanel = document.querySelector("#menu-panel");
  const menuTabs = document.querySelectorAll(".menu-tab");

  function renderMenu(category) {
    if (!menuPanel) return;
    const items = menuData[category] || [];

    // Fade out slightly then swap content
    menuPanel.style.opacity = "0";
    menuPanel.style.transform = "translateY(8px)";
    
    setTimeout(() => {
      menuPanel.innerHTML = items.map(item => `
        <article class="menu-item-card">
          <div class="menu-item-head">
            <div class="menu-item-titles">
              <h3 class="menu-item-amharic">${item.amharic}</h3>
              <span class="menu-item-english">${item.english}</span>
            </div>
            <div class="menu-price-box">
              <span class="menu-price-val">${item.price}</span>
              <span class="menu-price-cur">ETB</span>
            </div>
          </div>
          <p class="menu-item-desc">${item.desc}</p>
          ${item.tag ? `<div class="menu-item-tag">${item.tag}</div>` : ""}
        </article>
      `).join("");

      menuPanel.style.transition = "opacity 0.28s ease, transform 0.28s ease";
      menuPanel.style.opacity = "1";
      menuPanel.style.transform = "translateY(0)";
    }, 150);
  }

  // Tab click listeners
  menuTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      menuTabs.forEach(item => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderMenu(tab.dataset.category);
    });
  });

  // Initial render
  renderMenu("breakfast");

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER & ACCESSIBILITY
     ========================================================================== */
  const menuToggle = document.querySelector("#menu-toggle");
  const mobileDrawer = document.querySelector("#mobile-drawer");
  const drawerBackdrop = document.querySelector("#drawer-backdrop");
  const drawerClose = document.querySelector("#drawer-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function openMobileNav() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    document.body.classList.add("nav-open");
    menuToggle?.setAttribute("aria-expanded", "true");
    mobileDrawer.setAttribute("aria-hidden", "false");
  }

  function closeMobileNav() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
    document.body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileDrawer.setAttribute("aria-hidden", "true");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileDrawer?.classList.contains("open");
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  drawerClose?.addEventListener("click", closeMobileNav);
  drawerBackdrop?.addEventListener("click", closeMobileNav);

  // Close when clicking any nav link in the mobile drawer
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMobileNav();
    });
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (mobileDrawer?.classList.contains("open")) {
        closeMobileNav();
      }
      if (lightbox?.classList.contains("open")) {
        hideLightbox();
      }
    }
  });

  /* ==========================================================================
     3. GALLERY LIGHTBOX WITH NAVIGATION (PREV/NEXT/KEYBOARD)
     ========================================================================== */
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const lightboxCounter = document.querySelector("#lightbox-counter");
  const closeLightboxBtn = document.querySelector("#lightbox-close");
  const prevBtn = document.querySelector("#lightbox-prev");
  const nextBtn = document.querySelector("#lightbox-next");
  const galleryCards = Array.from(document.querySelectorAll(".gallery-card"));

  let currentGalleryIndex = 0;

  function showLightboxIndex(index) {
    if (index < 0) index = galleryCards.length - 1;
    if (index >= galleryCards.length) index = 0;
    currentGalleryIndex = index;

    const card = galleryCards[currentGalleryIndex];
    if (!card) return;

    const fullSrc = card.getAttribute("data-full");
    const caption = card.getAttribute("data-caption") || "";

    if (lightboxImage) {
      lightboxImage.src = fullSrc;
      lightboxImage.alt = caption;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = caption;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryCards.length}`;
    }

    lightbox?.classList.add("open");
    lightbox?.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }

  function hideLightbox() {
    lightbox?.classList.remove("open");
    lightbox?.setAttribute("aria-hidden", "true");
    if (lightboxImage) lightboxImage.src = "";
    document.body.classList.remove("lightbox-open");
  }

  galleryCards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      showLightboxIndex(idx);
    });
  });

  closeLightboxBtn?.addEventListener("click", hideLightbox);

  prevBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    showLightboxIndex(currentGalleryIndex - 1);
  });

  nextBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    showLightboxIndex(currentGalleryIndex + 1);
  });

  lightbox?.addEventListener("click", (e) => {
    // If click was directly on background or container (not on controls/image)
    if (e.target === lightbox || e.target.classList.contains("lightbox-dialog")) {
      hideLightbox();
    }
  });

  // Keyboard navigation for lightbox
  document.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("open")) return;
    if (e.key === "ArrowLeft") {
      showLightboxIndex(currentGalleryIndex - 1);
    } else if (e.key === "ArrowRight") {
      showLightboxIndex(currentGalleryIndex + 1);
    }
  });

  /* ==========================================================================
     4. HEADER SCROLL EFFECT & SCROLLSPY ACTIVE LINK
     ========================================================================== */
  const siteHeader = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const sections = document.querySelectorAll("main section[id]");

  function handleScroll() {
    const scrollPos = window.scrollY;

    // Header shadow & blur strength on scroll
    if (siteHeader) {
      if (scrollPos > 30) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }

    // Scrollspy: update active link in navbar
    let currentId = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     5. DYNAMIC FOOTER YEAR & OPEN STATUS
     ========================================================================== */
  const yearElem = document.querySelector("#year");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // Real-time "Open Now" check
  const liveStatusElem = document.querySelector("#live-open-status");
  if (liveStatusElem) {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hours = now.getHours();

    let isOpen = false;
    if (day === 0) { // Sunday 9am - 8pm
      isOpen = (hours >= 9 && hours < 20);
    } else if (day === 6) { // Saturday 8am - 10pm
      isOpen = (hours >= 8 && hours < 22);
    } else { // Mon-Fri 7am - 9pm
      isOpen = (hours >= 7 && hours < 21);
    }

    if (isOpen) {
      liveStatusElem.innerHTML = `<span class="pulse-dot"></span> Open Right Now`;
      liveStatusElem.classList.remove("closed");
    } else {
      liveStatusElem.innerHTML = `<span class="closed-dot"></span> Opens Tomorrow at 7:00 AM`;
      liveStatusElem.classList.add("closed");
    }
  }
});
