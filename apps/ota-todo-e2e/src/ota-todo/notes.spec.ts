import { NoteSchema } from '@ota/core';
import axios from 'axios';

const notesPath = '/notes';

describe('Note Endpoints /notes', () => {
  it('should return a list of notes', async () => {
    const res = await axios.get(notesPath);

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('notes');
    expect (Array.isArray(res.data.notes)).toBe(true);
  });

  it('should create a note', async () => {
    const res = await axios.post(notesPath, { title: 'Title', body: 'Sample body' });
    expect(res.status).toEqual(201);
    expect(NoteSchema.parse(res.data)).toBeTruthy();
  });

  it('should retrieve a note by id', async () => {
    const noteId = '7774c403-abae-4626-b665-648dfb277e53';
    const res = await axios.get(`${notesPath}/${noteId}`);
    expect(res.status).toEqual(200);
    expect(NoteSchema.parse(res.data)).toBeTruthy();
    expect(res.data.id).toEqual(noteId);
  });
});
