import Joi from "joi";

const newConcertSchema = Joi.object({
    userName: Joi.string().required().empty(' '),
    bandName: Joi.string().required().empty(' '),
    alreadyWatched: Joi.boolean().required(),
    concertDate: Joi.string(), 
    concertCity: Joi.string(), 
    concertRate: Joi.number()
})

const updatingConcertSchema = Joi.object({
    alreadyWatched: Joi.boolean().valid(true).required(),
    concertDate: Joi.string().required(), 
    concertCity: Joi.string().required(), 
    concertRate: Joi.number().required()
})

export { newConcertSchema, updatingConcertSchema }