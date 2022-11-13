import { newConcertSchema, updatingConcertSchema } from "../schemas/concertSchemas.js";
function verifyNewConcert(req, res, next) {
    var concert = req.body;
    var validation = newConcertSchema.validate(concert, { abortEarly: false });
    if (validation.error) {
        return res.status(401).send(validation.error.message);
    }
    next();
}
function verifyUpdatingConcert(req, res, next) {
    var concert = req.body;
    var validation = updatingConcertSchema.validate(concert, { abortEarly: false });
    if (validation.error) {
        return res.status(401).send(validation.error.message);
    }
    next();
}
export { verifyNewConcert, verifyUpdatingConcert };
