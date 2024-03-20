import { CreateNoteInputSchema, DeleteNoteInputSchema, GetNoteInputSchema, UpdateNoteInputSchema } from '@ota/core';
import { Router } from 'express';

import { createNoteHandler, deleteNoteHandler, getNoteHandler, getNotesHandler, updateNoteHandler } from '../controller';
import { validateResource } from '../middleware';

const router = Router();

router.get('/', getNotesHandler);
router.post('/', validateResource(CreateNoteInputSchema), createNoteHandler);
router.get('/:id', validateResource(GetNoteInputSchema), getNoteHandler);
router.put('/:id', validateResource(UpdateNoteInputSchema), updateNoteHandler);
router.delete('/:id', validateResource(DeleteNoteInputSchema), deleteNoteHandler);

export { router as notesRoute };