const data_obj = [
  {
    id: 4,
    title: "Gaming Keyboard",
    price: 205,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image_url:
      "https://silvergear.eu/storage/productoptions/4432/331513_medium.png.webp",
  },
  {
    id: 7,
    title: "Ergonomic Wooden Tuna",
    price: 743,
    description:
      "Created in a small artisan workshop in the province of Venice, the Wooden Tuna is a unique and symbolic piece of art by the Italian artist, Silvia Pasqualato.",
    image_url:
      "https://kampos.com/cdn/shop/products/kampos-wooden-tuna-955911_2048x.jpg?v=1614238024",
  },
  {
    id: 9,
    title: "Electronic Bronze Chips",
    price: 808,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image_url:
      "https://image.made-in-china.com/202f0j00JwCTAboElagm/Precision-Metal-Spring-Chip-Chemical-Photo-Etching-Stamping-Parts-for-Electronic-Component.webp",
  },
  {
    id: 11,
    title: "Awesome Shoes",
    price: 382,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image_url:
      "https://i.insider.com/54e3a5f46da811dd73d059d0?width=1000&format=jpeg&auto=webp",
  },
  {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image_url:
      "https://image.made-in-china.com/44f3j00nCGVpBMRlAzd/High-Quality-Tyre-Recycled-Granulated-Rubber-SBR-EPDM-Rubber-Granules-Rubber-Powder-Wholesale.webp",
  },
];

const newCard = document.getElementById("cards");

const {
  id: card_id,
  title: card_title,
  description: card_description,
  image_url: card_img_url,
  price: card_price,
} = data_obj;

for (let i = 0; i < data_obj.length; i++) {
  newCard.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${data_obj[i].image_url}" class="card-img-top" alt="${data_obj[i].title}">
<div class="card-body">
  <h5 class="card-title">${data_obj[i].title}</h5>
  <p class="card-text">${data_obj[i].description}</p>
  <p class="card-text" style="color:red;font-weight:bold;">PKR ${data_obj[i].price}.00</p>
  <a href="#" class="btn btn-primary">Purchase</a>
</div>
</div>`;
}
