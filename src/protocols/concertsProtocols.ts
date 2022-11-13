type ConcertEntity = {
    id: number,
    userName: string,
    bandName: string, 
    alreadyWatched: boolean, 
    concertDate?: string, 
    concertCity?: string, 
    concertRate?: number
};

type Concert = Omit<ConcertEntity, "id">;

type NotWatchedConcert = Omit<Concert, "concertDate" | "concertCity" | "concertRate">;

type UpdatingConcert = Omit<ConcertEntity, "userName" | "bandName">; 

export { ConcertEntity, Concert, NotWatchedConcert, UpdatingConcert };