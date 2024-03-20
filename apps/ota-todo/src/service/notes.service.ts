import type { CreateNoteInput, Note, UpdateNoteInput } from '@ota/core';
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

export async function findNote(noteId: Note['id']) {
  const notes = getNotesFromJson();
  return notes.notes.find(({ id }) => id === noteId);
}

export async function updateNote(note: Note, noteUpdate: UpdateNoteInput['body']) {
  const notes = getNotesFromJson();
  const noteIdx = notes.notes.findIndex(({ id }) => id === note.id);

  notes.notes[noteIdx] = {
    id: note.id,
    ...noteUpdate,
  };

  fs.writeFileSync(dummyDataPath, JSON.stringify(notes));

  return notes.notes[noteIdx];
}

export async function deleteNote(note: Note) {
  const notes = getNotesFromJson();
  const noteIdx = notes.notes.findIndex(({ id }) => id === note.id);

  notes.notes.splice(noteIdx, 1);

  fs.writeFileSync(dummyDataPath, JSON.stringify(notes));
}