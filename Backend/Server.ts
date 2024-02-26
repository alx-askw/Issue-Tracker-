//Server.js

import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser'; // didn't need this before?
import mongoose from 'mongoose';



// Connecting to DB
const DevDBLink: string = "mongodb://localhost:27017";

const dbConnect = async () => {
  console.log("Connecting to DB");
  await mongoose.connect(DevDBLink);
  console.log("Connected to DB");
}

dbConnect().catch(err => console.log(err));

//Starting express server
const PORT: number = 3030;

const server: Express = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get("/", (req: Request, res: Response) => {
  res.send("Inital Setup");
})

server.post("/", (req: Request, res: Response) => {
  res.send("we recieve you!");
  console.log(req.body.test);
})


const SERVER = server.listen(PORT, () => {
  console.log(`server running on 127.0.0.1:${PORT}`)
})


export default SERVER;
