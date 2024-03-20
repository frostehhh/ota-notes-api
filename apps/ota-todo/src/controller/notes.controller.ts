import type { CreateNoteInput, GetNoteInput, UpdateNoteInput } from '@ota/core';
import { ApiError } from '@ota/core';
import type { Request, Response } from 'express';

import { createNote, findNote, getNotes, updateNote } from '../service';

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

export async function getNoteHandler(
  req: Request<GetNoteInput['params']>,
  res: Response,
  next,
) {
  try {
    const noteId = req.params.id;

    const note = await findNote(noteId);

    if (!note) {
      throw new ApiError({ statusCode: 404, message: 'Note does not exist' });
    }

    return res.send(note);
  } catch (e) {
    next(e);
  }
}

export async function updateNoteHandler(
  req: Request<UpdateNoteInput['params'], UpdateNoteInput['body']>,
  res: Response,
  next,
) {
  try {
    const noteId = req.params.id;
    const noteUpdate = req.body;

    const note = await findNote(noteId);

    if (!note) {
      throw new ApiError({ statusCode: 404, message: 'Note does not exist' });
    }

    const updatedNote = await updateNote(note, noteUpdate);

    return res.send(updatedNote);
  } catch (e) {
    next(e);
  }
}