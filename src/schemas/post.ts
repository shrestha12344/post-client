import Joi from "joi";

const postSchema = Joi.object({
  post: Joi.string().required()
});

export default postSchema;