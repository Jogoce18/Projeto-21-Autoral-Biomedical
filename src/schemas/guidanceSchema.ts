import Joi from 'joi';

const guidanceSchema = Joi.object({
  question: Joi.string().trim().required(),
  answer: Joi.string().trim().required(),
});

export default guidanceSchema;