import { getNotes } from '../service';

export async function getNotesHandler(req, res, next) {
  try {
    res.send(await getNotes());
  } catch (e) {
    next(e);
  }
}