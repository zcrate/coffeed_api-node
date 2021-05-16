const Joi = require("joi");
const mongoose = require("mongoose");
const { hoursSchema } = require("./hours");
const { menuItemSchema } = require("./menuItem");

const Shop = mongoose.model(
  "Shop",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    hours: {
      type: hoursSchema,
      required: true,
    },
    menu: [
      {
        type: menuItemSchema,
        required: true,
      },
    ],
    description: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 255,
    },
  })
);

function validateShop(shop) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    hours: Joi.object().required(),
    menu: Joi.array().required(),
    description: Joi.string().min(3).max(250).required(),
  });

  return schema.validate(shop);
}

exports.Shop = Shop;
exports.validate = validateShop;
