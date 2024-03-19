import { z } from 'zod';

export const NoteSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  body: z.string().nullable(),
});

export type Note = z.infer<typeof NoteSchema>;
