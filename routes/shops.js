const { Shop, validate } = require("../models/shop");
const { MenuItem } = require("../models/menuItem");
const validateObjectId = require("../middleware/validateObjectId");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const shops = await Shop.find().sort("name");

  res.send(shops);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const shop = await Shop.findById(req.params.id).select("-__v");

  if (!shop)
    return res.status(404).send("The shop with the given ID was not found");

  res.send(shop);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const menu = [];
  for (i in req.body.menu) {
    item = req.body.menu[i];
    console.log(i);
    console.log(item);
    menu.push(
      new MenuItem({
        name: item.name,
        price: item.price,
        category: item.category,
      })
    );
  }

  const shop = new Shop({
    name: req.body.name,
    hours: {
      open: req.body.hours.open,
      close: req.body.hours.close,
    },
    menu: menu,
    description: req.body.description,
  });
  await shop.save();

  res.send(shop);
});

module.exports = router;
