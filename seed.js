const { Shop } = require("./models/shop");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "The Joe",
    hours: {
      open: "05:00",
      close: "17:00",
    },
    menu: [
      { name: "a hot cup of joe", price: 4, category: "beverages" },
      { name: "a cold one", price: 4, category: "beverages" },
      { name: "juice", price: 3, category: "beverages" },
      { name: "soft drink", price: 3, category: "beverages" },
      { name: "donut", price: 2, category: "food" },
      { name: "sandwich", price: 7, category: "food" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    name: "Dave's Place",
    hours: {
      open: "05:00",
      close: "20:00",
    },
    menu: [
      { name: "coffee", price: 8, category: "drinks" },
      { name: "tea", price: 7, category: "drinks" },
      { name: "fancy water", price: 6, category: "drinks" },
      { name: "bagel", price: 4, category: "eats" },
      { name: "sandwich", price: 13, category: "eats" },
      { name: "wrap", price: 15, category: "eats" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    name: "Rise and Shine Cafe",
    hours: {
      open: "05:00",
      close: "11:00",
    },
    menu: [
      { name: "coffee", price: 4, category: "drinks" },
      { name: "tea", price: 4, category: "drinks" },
      { name: "cappuccino", price: 6, category: "drinks" },
      { name: "bagel", price: 3, category: "food" },
      { name: "donut", price: 2, category: "food" },
      { name: "breakfast burrito", price: 9, category: "food" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Martha & Martha's",
    hours: {
      open: "08:00",
      close: "22:00",
    },
    menu: [
      { name: "the darkest roast", price: 4, category: "drinks" },
      { name: "medium roast", price: 4, category: "drinks" },
      { name: "tea", price: 4, category: "drinks" },
      { name: "bagel", price: 4, category: "food" },
      { name: "donut", price: 3, category: "food" },
      { name: "superwrap", price: 8, category: "food" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Shop.deleteMany({});

  for (shop of data) {
    const shops = data.map((shop) => ({
      ...data.shop,
    }));

    await Shop.insertMany(shops);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
