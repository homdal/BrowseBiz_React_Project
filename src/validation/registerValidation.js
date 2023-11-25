import Joi from "joi";
import validation from "./validation";
const registerSchema = Joi.object({
  first: Joi.string()
    .required()
    .messages({
      "string.empty": "must provide a first name",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot longer than 256 characters",
    })
    .min(2)
    .max(256),
  middle: Joi.string()
    .allow("")
    .messages({
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .min(2)
    .max(256),
  last: Joi.string()
    .required()
    .messages({
      "string.empty": "must provide a last name",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .min(2)
    .max(256),
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
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/
      )
    )
    .messages({
      "string.pattern.base":
        "the password must be between 7 to 20 characters in length containing at least one upper case letter, one lower case, one number and one of the following symbols !@#$%^&*",
      "string.empty": "must provide a password",
      "string.min": "must be at least 7 characters long",
      "string.max": "cannot be longer than 20 characters",
    })
    .min(7)
    .max(20)
    .required(),
  phone: Joi.string()
    .required()
    .messages({
      "string.empty": "must provide a phone number",
      "string.min": "must be at least 9 characters long",
      "string.max": "cannot be longer than 11 characters",
    })
    .min(9)
    .max(11),
  url: Joi.string().min(14).allow(""),
  alt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow("").min(2).max(256),
  country: Joi.string()
    .required()
    .messages({
      "string.empty": "must enter a country",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .min(2)
    .max(256),
  city: Joi.string()
    .required()
    .messages({
      "string.empty": "must enter a city",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .min(2)
    .max(256),
  street: Joi.string()
    .required()
    .messages({
      "string.empty": "must enter a street",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .min(2)
    .max(256),
  houseNumber: Joi.number()
    .required()
    .messages({
      "string.empty": "must enter house number",
      "number.base": "house number has to be a number",
      "string.min": "must be at least 1 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .min(1)
    .max(256),
  zip: Joi.string()
    .pattern(new RegExp(/^[0-9]+$/))
    .messages({
      "string.empty": "must enter zip code",
      "string.pattern.base": "zip code has to be a number",
      "string.min": "must be at least 2 characters long",
      "string.max": "cannot be longer than 256 characters",
    })
    .min(2)
    .max(256)
    .required(),
  isBusiness: Joi.boolean(),
});

const registerValidation = (inputToCheck) =>
  validation(registerSchema, inputToCheck);

export { registerValidation };
