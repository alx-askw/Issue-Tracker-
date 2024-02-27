//TODO: TEMPT FILE

import Ticket from "../models/ticket.model";

export const getAllTickets = async () => {
  return await Ticket.find({});
}
