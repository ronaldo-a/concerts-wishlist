import { NextFunction, Request, Response } from "express";
import { Concert, UpdatingConcert } from "../protocols/concertsProtocols.js";
import { newConcertSchema, updatingConcertSchema } from "../schemas/concertSchemas.js";

function verifyNewConcert (req: Request, res: Response, next: NextFunction) {
    const concert = req.body as Concert;

    const validation = newConcertSchema.validate(concert, {abortEarly: false});

    if (validation.error) {
        return res.status(401).send(validation.error.message);
    }

    next();
}

function verifyUpdatingConcert (req: Request, res: Response, next: NextFunction) {
    const concert = req.body as UpdatingConcert;

    const validation = updatingConcertSchema.validate(concert, {abortEarly: false});

    if (validation.error) {
        return res.status(401).send(validation.error.message)
    }

    next();
}

export { verifyNewConcert, verifyUpdatingConcert };

