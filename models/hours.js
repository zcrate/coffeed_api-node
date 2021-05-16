const Joi = require("joi");
const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
  open: {
    type: String,
    required: true,
  },
  close: {
    type: String,
    required: true,
  },
});

const Hours = mongoose.model("Hours", hoursSchema);

function validateHours(hours) {
  const schema = Joi.object({
    open: Joi.string().required(),
    close: Joi.string().required(),
  });

  return schema.validate(hours);
}

exports.hoursSchema = hoursSchema;
exports.Hours = Hours;
exports.validate = validateHours;
