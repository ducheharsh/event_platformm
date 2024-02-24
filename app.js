/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const productData = [
  { id: 1, name: "Birthday Parties", category: "parties", price: 99.99 },
  { id: 2, name: "Wedding", category: "clothing", price: 24.99 },
  { id: 3, name: "Hackathon", category: "tech", price: 49.99 },
  { id: 4, name: "DJ Night", category: "parties", price: 49.99 },
  { id: 5, name: "Engagement", category: "ceremonies", price: 49.99 },
  { id :10, name: "Yoga events", catergory:"ceremonies", price:49.99},
  

  // ... more products
];

const productContainer = document.querySelector(".products");
const filterSelect = document.getElementById("filter-category");

function renderProducts(products) {
  productContainer.innerHTML = ""; // Clear existing products
  products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
          <img src="images/${product.id}.jpg" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
      `;
      productContainer.appendChild(card);
  });
}

renderProducts(productData); // Render all products initially

filterSelect.addEventListener("change", () => {
  const selectedCategory = filterSelect.value;
  let filteredProducts;
  if (selectedCategory) {
      filteredProducts = productData.filter((product) => product.category === selectedCategory);
  } else {
      filteredProducts = productData;
  }
  renderProducts(filteredProducts);
});

