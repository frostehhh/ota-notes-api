import axios from 'axios';

const notesPath = '/notes';

describe('GET /api/notes', () => {
  it('should return a list of notes', async () => {
    const res = await axios.get(notesPath);

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('notes');
    expect (Array.isArray(res.data.notes)).toBe(true);
  });
});
