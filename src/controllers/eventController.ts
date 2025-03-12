/* import { Request, Response } from "express";
import { User } from "../models/User";
import { Event } from "../models/event";

const appStatus = [
  { id: 1, name: "To Do" },
  { id: 2, name: "In Progress" },
  { id: 3, name: "Completed" },
];
type Params = {
  userId: string;
};

export const getEventByUserId = async (req: Request<Params>, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await Event.findByPk(userId, {
      attributes: ["id", "name", "email"],
      include: [
        {
          model: Event,
          as: "events",
          required: false,
          attributes: ["id", "title", "status", "startDate", "endDate"],
        },
      ],
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const events = Event.userId || [];
    if (events.length === 0) {
      return res.status(200).json({ message: "No events found for this user" });
    }

    res.status(200).json(events);
  } catch (error: any) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: error.message });
  }
};

/* export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating event" });
  }
}; */

/* export const addEvent = async (req: Request, res: Response) => {
  try {
    const { title, description, startDate, endDate, status, userId } = req.body;

    // verifier si l'utilisateur existe
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

  
    const events = await Event.create({
      title,
      description,
      startDate,
      endDate,
      status,
      userId,
    });

    res.status(201).json(events);

    res.json({ ok: true });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}; */

/* export const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedEvent = req.body;
    await Event.update(updatedEvent, { where: { id } });
    res.json({ message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating event" });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Event.destroy({ where: { id } });
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event" });
  }
}; */

/* export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching events" });
  }
}; */
