import mongoose from "mongoose";

type SeverityLevel = {
  high: string,
  medium: string,
  low: string
}


//TODO: Increase amount of  information requried in assignedUsers
const ticketSchema = new mongoose.Schema({

  title: { type: String, required: true },
  severity: { type: String, required: true },
  dateAdded: { type: Date, required: true },
  dataDue: { type: Date, required: false },
  ticketAuthor: { type: String, required: true },
  description: { type: String, required: false },
  assignedUsers: [{
    userName: { type: String, required: true },
  }],
  comments: [{
    commentAuthor: { type: String, required: true },
    commentContent: { type: String, required: true }
  }]
})

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;

