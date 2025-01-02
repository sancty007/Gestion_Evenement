import { Request, Response } from 'express';
import { Event } from '../models/event';


const appStatus = [{id : 1 , name : 'To Do'}, {id : 2 , name : 'In Progress'}, {id : 3 , name : 'Completed'}]

export const getEvents = async (req: Request, res: Response) => {
   try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching events' });
  }  
  
};

export const getStatus = async (req: Request, res: Response) => {
  
  res.json(appStatus)

}

export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating event' });
  }
};

export const addEvent = async (req: Request, res: Response) => {
  try {
    const { title, description, startDate, endDate, status } = req.body;

   /*  const statusIndex = appStatus.findIndex(indexStatus => indexStatus.name === status)

     if(statusIndex == -1 ){
       return res.status(400).json({ message: 'Invalid status' });
     } */


    await Event.create({
      title,
      description,
      startDate,
      endDate,
      status,
      
    }); 

   //res.status(201).json(req.body);

   res.json({ok: true})

  } catch (error :any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedEvent = req.body;
    await Event.update(updatedEvent, { where: { id } });
    res.json({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating event' });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Event.destroy({ where: { id } });
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event' });
  }
};
