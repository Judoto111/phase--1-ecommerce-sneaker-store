const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 3500,
    colors: [
      {
        code: "white",
        img: "./images/airforce11.jpg",
      },
      {
        code: "black",
        img: "./images/airforce22.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 5500,
    colors: [
      {
        code: "black",
        img: "./images/jordan22.jpg",
      },
      {
        code: "red",
        img: "./images/jordan22.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 4000,
    colors: [
      {
        code: "black",
        img: "./images/blazer11.jpg",
      },
      {
        code: "lightbrown",
        img: "./images/blazer22.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 4200,
    colors: [
      {
        code: "black",
        img: "./images/crater11.jpg",
      },
      {
        code: "white",
        img: "./images/crater22.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 3500,
    colors: [
      {
        code: "yellow",
        img: "./images/hippie11 (1).jpg",
      },
      {
        code: "brown",
        img: "./images/hippie22.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;


    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});