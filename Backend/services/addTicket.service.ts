import Ticket from "../models/ticket.model";

export const addTicket = async (ticketObj: any) => {
  try {
    return Ticket.create({
      title: ticketObj.title,
      severity: ticketObj.severity,
      dateAdded: ticketObj.dateAdded,
      ticketAuthor: ticketObj.ticketAuthor,
      description: ticketObj.description,
    })
  } catch (err) {
    console.log(err);
  }
}
