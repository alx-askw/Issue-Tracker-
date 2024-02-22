//Server.js

import express, { Express, Request, Response } from 'express';

//CONSTS
const PORT: number = 3030;

const server = express();

server.get("/", (req: Request, res: Response) => {
  res.send("Inital Setup");
})

const SERVER = server.listen(PORT, () => {
  console.log(`server running on 127.0.0.1:${PORT}`)
})


export default SERVER;
