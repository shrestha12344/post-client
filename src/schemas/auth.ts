import Joi from "joi";

const authSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
  password: Joi.string().required()
});

export default authSchema;