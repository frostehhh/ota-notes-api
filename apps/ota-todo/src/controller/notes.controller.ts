import type { CreateNoteInput } from '@ota/core';
import type { Request, Response } from 'express';

import { createNote, getNotes } from '../service';

export async function getNotesHandler(req, res, next) {
  try {
    res.send(await getNotes());
  } catch (e) {
    next(e);
  }
}

export async function createNoteHandler(
  req: Request<CreateNoteInput>,
  res: Response,
  next,
) {
  try {
    const { body } = req;
    const note = await createNote({ ...body });

    res.status(201).send(note);
  } catch (e) {
    next(e);
  }
}