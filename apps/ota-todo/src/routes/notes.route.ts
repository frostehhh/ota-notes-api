import { CreateNoteInputSchema } from '@ota/core';
import { Router } from 'express';

import { createNoteHandler, getNotesHandler } from '../controller';
import { validateResource } from '../middleware';

const router = Router();

router.get('/', getNotesHandler);
router.post('/', validateResource(CreateNoteInputSchema), createNoteHandler);

export { router as notesRoute };