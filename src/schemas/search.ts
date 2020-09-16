import Joi from "joi";

const querySchema = Joi.object({
  query: Joi.string().required()
});

export default querySchema;