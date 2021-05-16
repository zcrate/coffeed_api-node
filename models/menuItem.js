const Joi = require("joi");
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

function validateMenuItem(menuItem) {
  const schema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    price: Joi.number().required(),
    category: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(menuItem);
}

exports.menuItemSchema = menuItemSchema;
exports.MenuItem = MenuItem;
exports.validate = validateMenuItem;
