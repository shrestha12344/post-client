import Joi from "joi";

const profileSchema = Joi.object({
  username: Joi.string().required(),
  information: Joi.string().required()
});

export default profileSchema;