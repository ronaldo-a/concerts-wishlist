import { QueryResult } from "pg";
import connection from "../db.js";
import { Concert, ConcertEntity, NotWatchedConcert, UpdatingConcert } from "../protocols/concertsProtocols.js";

async function insertWatchedConcert (concert: Concert): Promise<QueryResult> {

    try {
         
        return await connection.query(
        `INSERT INTO concerts ("userName", "bandName", "alreadyWatched", "concertDate", "concertCity", "concertRate") 
        VALUES ('${concert.userName}', '${concert.bandName}', ${concert.alreadyWatched}, '${concert.concertDate}', '${concert.concertCity}', ${concert.concertRate});`
        );
        
    } catch (error) {  
        return error;
    }
}

async function insertNotWatchedConcert (concert: NotWatchedConcert): Promise<QueryResult> {

    try {

        return await connection.query(
        `INSERT INTO concerts ("userName", "bandName", "alreadyWatched") 
        VALUES ('${concert.userName}', '${concert.bandName}', ${concert.alreadyWatched});`
        );

    } catch (error) {  
        return error
    }
}

async function getAllConcerts (): Promise<QueryResult<ConcertEntity[]>> {

    try {
        return await connection.query(`SELECT * FROM concerts;`);
    } catch (error) {
        return error;
    }

}

async function getUserConcerts (userName: string): Promise<QueryResult<ConcertEntity[]>> {
    try {    
        return await connection.query(`SELECT * FROM concerts WHERE "userName"='${userName}';`);
    } catch (error) {
        return error;
    }
}

async function updateConcertInfo (concert: UpdatingConcert): Promise<QueryResult> {

    try {
        return await connection.query(`UPDATE concerts SET 
        "alreadyWatched"=${concert.alreadyWatched}, 
        "concertDate"='${concert.concertDate}', 
        "concertCity"='${concert.concertCity}', 
        "concertRate"=${concert.concertRate}
        WHERE id=${concert.id};`);

    } catch (error) {
        return error
    }
}

async function deleteConcertData (id:number): Promise<QueryResult> {

        return await connection.query(`DELETE FROM concerts WHERE id=${id};`);

}

export { 
    insertWatchedConcert, 
    insertNotWatchedConcert, 
    getAllConcerts, 
    updateConcertInfo, 
    deleteConcertData,
    getUserConcerts };