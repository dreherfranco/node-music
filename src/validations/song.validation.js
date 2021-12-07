const Joi = require('joi');

const createSong = {
  body: Joi.object().keys({
    userId: Joi.string().required(),
    description: Joi.string(),
    files: Joi.object().keys({
      song: Joi.object().required().keys({
        path: Joi.required(),
      }),
    }),
  }),
};

module.exports = {
  createSong,
};
