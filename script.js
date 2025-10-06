const products = [
  { id: 1, name: "Gold Necklace", price: 1200, category: "jewelry", image: "https://www.jewelsmart.in/media/catalog/product/cache/5e5d5507ad17a23dc9f1bc728eeab23c/t/v/tv_artists_preferred_antique_one_gram_gold_chain_necklace_set_simple_elegant_3815.jpg" },
  { id: 2, name: "Leather Handbag", price: 1800, category: "bags", image: "https://i.pinimg.com/originals/0f/e2/8d/0fe28d1f0bb7c9690d7fcd612d50e3ec.jpg" },
  { id: 3, name: "Silver Earrings", price: 800, category: "jewelry", image: "https://cdn.notonthehighstreet.com/system/product_images/images/001/742/165/original_solid-sterling-silver-interwoven-hoop-earrings.jpg" },
  { id: 4, name: "Classic Sunglasses", price: 900, category: "sunglasses", image: "https://cdn11.bigcommerce.com/s-hlxuc6bu/images/stencil/1280x1280/products/2347/18068/ZXWLYXGX-2018-new-fashion-sunglasses-sunglasses-ms-man-retro-colorful-transparent-small-colorful-CatEye-Sunglasses__10586.1534031093.jpg?c=2" },
  { id: 5, name: "Tote Bag", price: 1500, category: "bags", image: "https://i.pinimg.com/originals/fe/ca/7e/feca7ec20ae56ea2f74dbc3b2289e245.jpg" },
  { id: 6, name: "Stylish Shades", price: 1100, category: "sunglasses", image: "https://i.pinimg.com/originals/d8/67/42/d86742e3f8fb50e06a2097c68810f83b.jpg" }
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const cartTotal = document.getElementById('cartTotal');
let total = 0;

function showProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.price})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(price) {
  total += price;
  cartTotal.textContent = total;
}

categoryFilter.addEventListener('change', () => {
  const category = categoryFilter.value;
  if (category === "all") {
    showProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    showProducts(filtered);
  }
});

showProducts(products);