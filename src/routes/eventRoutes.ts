import { Router } from 'express';
import { getEvents, addEvent, updateEvent, deleteEvent,getEventById,getStatus } from '../controllers/eventController';

const router = Router();

router.get('/', getEvents);
router.get('/status', getStatus);
router.get('/:id', getEventById);
router.post('/', addEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
