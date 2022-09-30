import Joi from 'joi';

const maintenanceSchema = Joi.object({
  title: Joi.string().trim().required(),
  resume: Joi.string().required(),
  importantInfos: Joi.string().required(),
  startDate: Joi.date().required(),
  limitDate: Joi.date().required(),
  clientId: Joi.number().required(),
  value: Joi.number().required(),
});

export default maintenanceSchema;