import * as fs from 'fs';

export async function getNotes() {
  const notes = fs.readFileSync('./apps/ota-todo/src/assets/data.json', 'utf8');
  return JSON.parse(notes);
}