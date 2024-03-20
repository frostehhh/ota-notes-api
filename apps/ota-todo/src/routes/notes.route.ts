import { CreateNoteInputSchema, GetNoteInputSchema, UpdateNoteInputSchema } from '@ota/core';
import { Router } from 'express';

import { createNoteHandler, getNoteHandler, getNotesHandler, updateNoteHandler } from '../controller';
import { validateResource } from '../middleware';

const router = Router();

router.get('/', getNotesHandler);
router.post('/', validateResource(CreateNoteInputSchema), createNoteHandler);
router.get('/:id', validateResource(GetNoteInputSchema), getNoteHandler);
router.put('/:id', validateResource(UpdateNoteInputSchema), updateNoteHandler);

export { router as notesRoute };