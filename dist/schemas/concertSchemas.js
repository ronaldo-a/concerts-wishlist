import Joi from "joi";
var newConcertSchema = Joi.object({
    userName: Joi.string().required().empty(' '),
    bandName: Joi.string().required().empty(' '),
    alreadyWatched: Joi.boolean().required(),
    concertDate: Joi.string(),
    concertCity: Joi.string(),
    concertRate: Joi.number()
});
var updatingConcertSchema = Joi.object({
    alreadyWatched: Joi.boolean().valid(true).required(),
    concertDate: Joi.string().required(),
    concertCity: Joi.string().required(),
    concertRate: Joi.number().required()
});
export { newConcertSchema, updatingConcertSchema };
