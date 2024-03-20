import { CreateNoteInputSchema, GetNoteInputSchema } from '@ota/core';
import { Router } from 'express';

import { createNoteHandler, getNoteHandler, getNotesHandler } from '../controller';
import { validateResource } from '../middleware';

const router = Router();

router.get('/', getNotesHandler);
router.post('/', validateResource(CreateNoteInputSchema), createNoteHandler);
router.get('/:id', validateResource(GetNoteInputSchema), getNoteHandler);

export { router as notesRoute };