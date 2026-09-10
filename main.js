const menuData = {
  breakfast: [
    ["እንቁላል ፍርፍር", "Scrambled Egg", "150"],
    ["እንቁላል በስጋ", "Egg & Meat", "200"],
    ["እንቁላል ሳንድዊች", "Egg Sandwich", "150"],
    ["እንቁላል ስልስ", "Egg Sauce", "150"],
    ["ፉል ኖርማል", "Normal Ful", "150"],
    ["ፉል እስፔሻል", "Special Ful", "200"],
    ["ጨጨብሳ ኖርማል", "Normal Chachabsa", "150"],
    ["ጨጨብሳ እስፔሻል", "Special Chachabsa", "200"],
    ["ፖስታ በስጎ", "Pasta Sauce", "200"],
    ["ፖስታ በአትክልት", "Pasta with Vegetables", "200"],
    ["የፆም ፋርፋር", "Fasting Firfir", "150"],
    ["ሥጋ ፋርፋር", "Meat Firfir", "200"]
  ],

  coffee: [
    ["እስቲም ቡና", "Steamed Coffee", "50"],
    ["ማኪያቶ", "Macchiato", "80"],
    ["ስፕሪስ", "Spris", "60"]
  ],

  tea: [
    ["ሻይ", "Tea", "35"],
    ["ቀሽር ሻይ", "Ginger Tea", "50"],
    ["የለውዝ ሻይ", "Peanut Tea", "60"],
    ["አረንጓዴ ሻይ", "Green Tea", "60"]
  ],

  "soft-drinks": [
    ["Coca-Cola", "Classic soft drink", "Ask us"],
    ["Fanta", "Orange soft drink", "Ask us"],
    ["Sprite", "Lemon-lime soft drink", "Ask us"]
  ],

  pastries: [
    ["Pastry of the Day", "Fresh selection — ask our team what is available today.", "Ask us"],
    ["Fresh Croissant", "Buttery, freshly served pastry.", "Ask us"],
    ["Sweet Pastry", "A rotating sweet treat for your coffee.", "Ask us"]
  ],

  snacks: [
    ["Chuko", "Traditional Oromo snack made from roasted barley flour, seasoned butter and spices.", "Ask us"],
    ["Popcorn", "A simple classic to enjoy alongside Ethiopian coffee.", "Ask us"],
    ["Sambusa", "Crispy savory snack — availability may vary.", "Ask us"]
  ]
};

const menuPanel = document.querySelector("#menu-panel");
const menuTabs = document.querySelectorAll(".menu-tab");

function renderMenu(category) {
  const items = menuData[category] || [];

  menuPanel.innerHTML = items.map(([name, desc, price]) => `
    <article class="menu-item">
      <div class="menu-item-top">
        <h3 class="menu-item-name">${name}</h3>
        <span class="menu-dots"></span>
        <span class="menu-price">${price === "Ask us" ? price : `${price} ETB`}</span>
      </div>
      <p class="menu-item-desc">${desc}</p>
    </article>
  `).join("");
}

menuTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    menuTabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

renderMenu("breakfast");

/* Mobile navigation */
const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

/* Gallery lightbox */
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeLightbox = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function hideLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

closeLightbox.addEventListener("click", hideLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) hideLightbox();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideLightbox();
});

/* Footer year */
document.querySelector("#year").textContent = new Date().getFullYear();
