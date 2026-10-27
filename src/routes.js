import express from 'express';
import { createNote, deleteNoteById, getNotes, getNotesById, editNoteById} from './controller.js';

const router = express.Router();

router.post('/notes', createNote);
router.get('/notes', getNotes);
router.get('/notes/:id', getNotesById);
router.put('/notes/:id', editNoteById);
router.delete('/notes/:id', deleteNoteById);

export default router;