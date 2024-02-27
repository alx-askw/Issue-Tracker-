//Server.js

import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser'; // didn't need this before?
import mongoose from 'mongoose';



// Connecting to DB
const DevDBLink: string = "mongodb://localhost:27017/issueTrackerDev";

const dbConnect = async () => {
  console.log("Connecting to DB");
  await mongoose.connect(DevDBLink);
  console.log("Connected to DB on : " + DevDBLink);
}

dbConnect().catch(err => console.log(err));

//TODO: GET RID OF THIS 
//import { addUser } from './services/addUser.service';
//addUser({ name: "TESTNAME 2", userName: "TESTUNAME", userEmail: "TESTEMAIL", password: "TESTPASSWROD", permissions: "ADMIN" });

//import { addTicket } from './services/addTicket.service';
//addTicket({ title: "Example Ticket 2", severity: "HIGH", dateAdded: new Date, ticketAuthor: "Example Author", description: "LOREM IPSUM" })

//Starting express server
const PORT: number = 3030;

const server: Express = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get("/", (req: Request, res: Response) => {
  res.send("Inital Setup");
})

// ################################################################
import { getAllUsers } from './services/getListOfUsers.service';
server.get("/getusers", async (req: Request, res: Response) => {
  let allUsers = await getAllUsers();
  res.send(allUsers);
})

import { getAllTickets } from './services/getListOfTickets';
server.get("/gettickets", async (req: Request, res: Response) => {
  let allTickets = await getAllTickets();
  res.send(allTickets);
})

//#################################################################



server.post("/", (req: Request, res: Response) => {
  res.send("we recieve you!");
  console.log(req.body.test);
})


const SERVER = server.listen(PORT, () => {
  console.log(`server running on 127.0.0.1:${PORT}`)
})


export default SERVER;
