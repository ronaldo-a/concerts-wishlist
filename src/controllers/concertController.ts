import { Request, Response } from "express";
import { Concert, ConcertEntity, NotWatchedConcert } from "../protocols/concertsProtocols.js";
import { deleteConcertData, getAllConcerts, getUserConcerts, insertNotWatchedConcert, insertWatchedConcert, updateConcertInfo } from "../repositories/concertsRepository.js";

async function insertConcert (req: Request, res: Response) {

    const newConcert = req.body as Concert;
    const newNotWatchedConcert = req.body as NotWatchedConcert;

    if (newConcert.alreadyWatched === undefined || !newConcert.bandName || !newConcert.userName) {
        return res.status(401).send("need to inform user name, band name and if concert was already watched.");
    }

    if (newConcert.alreadyWatched) {
        if (newConcert.userName && newConcert.bandName && newConcert.concertDate && newConcert.concertCity && newConcert.concertRate) {
            
            await insertWatchedConcert(newConcert);
            return res.status(201).send("watched concert added");
        }
    } else {
        if (newNotWatchedConcert.bandName && newNotWatchedConcert.bandName) {
            await insertNotWatchedConcert(newNotWatchedConcert);
            return res.status(201).send("not watched concert added");
        }
    }
}

async function listConcerts (req: Request, res: Response) {
    
    const allConcerts = (await getAllConcerts()).rows;
    return res.status(200).send(allConcerts);
}

async function listUserConcerts (req: Request, res: Response) {
    const userName = req.query.username as string;

    const userConcerts = (await getUserConcerts(userName)).rows;
    res.status(200).send(userConcerts);
}

async function updateConcert (req: Request, res: Response) {
    const concert = req.body as ConcertEntity;
    concert.id = Number(req.params.id);

    await updateConcertInfo(concert);

    return res.status(200).send("concert updated to watched");
}

async function deleteConcert (req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
        const promise = await deleteConcertData(id);

        if (promise.rowCount === 0) {
            return res.status(400).send("concert not deleted")
        }

        return res.status(200).send("concert deleted");
    } catch (error) {
        return error; 
    }
    
}

export { insertConcert, listConcerts, listUserConcerts, updateConcert, deleteConcert };