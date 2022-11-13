import express from "express";
import  { listConcerts, insertConcert, updateConcert, deleteConcert, listUserConcerts } from "./controllers/concertController.js";
import { verifyNewConcert, verifyUpdatingConcert } from "./middlewares/concertMiddleware.js";

const server = express();
server.use(express.json());

server.get("/concerts", listConcerts)
server.get("/concerts/user", listUserConcerts)
server.post("/concerts", verifyNewConcert, insertConcert)
server.put("/concerts/:id", verifyUpdatingConcert, updateConcert)
server.delete("/concerts/:id", deleteConcert)

server.listen(4000, () => console.log("magic at 4000"));