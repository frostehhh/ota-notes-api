import { Router } from 'express';

import { getNotesHandler } from '../controller';

const router = Router();

router.get('/', getNotesHandler);

export { router as notesRoute };