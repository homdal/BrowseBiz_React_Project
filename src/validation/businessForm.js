import Joi from "joi";
import validation from "./validation";

const formSchema = Joi.object({
  name: Joi.string()
    .messages({
      "string.empty": "must enter name",
    })
    .required()
    .min(1),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "must provide an email",
      "string.email":
        "must be a valid email address, example: name@example.com",
      "string.min": "must be at least 5 characters long",
    })
    .required()
    .min(5),
  message: Joi.string()
    .messages({
      "string.empty": "must enter a message",
    })
    .required(),
});

const validateForm = (inputToCheck) => validation(formSchema, inputToCheck);

export { validateForm };
