import type { CreateNoteInput } from '@ota/core';
import { randomUUID } from 'crypto';
import * as fs from 'fs';

const dummyDataPath = './apps/ota-todo/src/assets/data.json';

function getNotesFromJson() {
  const notes = fs.readFileSync(dummyDataPath, 'utf8');
  return JSON.parse(notes);
}

export async function getNotes() {
  const notes = fs.readFileSync(dummyDataPath, 'utf8');
  return JSON.parse(notes);
}

export async function createNote(createNoteInput: CreateNoteInput) {
  const id = randomUUID();
  const notes = getNotesFromJson();

  const createdNote = {
    id,
    ...createNoteInput,
  };

  notes.notes.push(createdNote);

  fs.writeFileSync(dummyDataPath, JSON.stringify(notes));

  return createdNote;
}