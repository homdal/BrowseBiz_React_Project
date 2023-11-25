import Joi from "joi";
import validation from "./validation";

const creationSchema = Joi.object({
  title: Joi.string()
    .messages({
      "string.empty": "must enter a title",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .required()
    .min(2)
    .max(256),
  subtitle: Joi.string()
    .messages({
      "string.empty": "must enter a subtitle",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .required()
    .min(2)
    .max(256),
  description: Joi.string()
    .messages({
      "string.empty": "must enter a description",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 1024 characters",
    })
    .required()
    .min(2)
    .max(1024),
  phone: Joi.string()
    .messages({
      "string.empty": "must provide a phone number",
      "string.min": "must be at least 9 characters long",
      "string.max": "cannot be longer than 11 characters",
    })
    .required()
    .min(9)
    .max(11),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "must provide an email",
      "string.email":
        "must be a valid email address, example: name@example.com",
      "string.min": "must be at least 5 characters long",
    })
    .min(5),
  web: Joi.string()
    .messages({
      "string.min": "must be at least 14 characters long",
    })
    .min(14)
    .allow(""),
  url: Joi.string()
    .messages({
      "string.min": "must be at least 14 characters long",
    })
    .min(14)
    .allow(""),
  alt: Joi.string()
    .messages({
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .min(2)
    .max(256)
    .allow(""),
  state: Joi.string().allow(""),
  country: Joi.string()
    .messages({
      "string.empty": "must enter a country",
    })
    .required(),
  city: Joi.string()
    .messages({
      "string.empty": "must enter a city",
    })
    .required(),
  street: Joi.string()
    .messages({
      "string.empty": "must enter a street",
    })
    .required(),
  houseNumber: Joi.number()
    .messages({
      "string.empty": "must enter house number",
      "string.min": "must be at least 1 characters long",
      "number.base": "house number has to be a number",
    })
    .min(1)
    .required(),
  zip: Joi.number()
    .messages({
      "number.base": "house number has to be a number",
    })
    .allow(""),
}).options({ allowUnknown: true });

const validateCreation = (inputToCheck) =>
  validation(creationSchema, inputToCheck);

export { validateCreation };
