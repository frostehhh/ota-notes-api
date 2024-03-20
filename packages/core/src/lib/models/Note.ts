import { z } from 'zod';

export const NoteSchema = z.object({
  id: z.string().uuid(),
  title: z.string({
    required_error: 'Title is required',
  }),
  body: z.string().optional(),
});

const payload = {
  body: NoteSchema.omit({ id: true }),
};

const params = {
  params: NoteSchema.pick({ id: true }),
};

export const CreateNoteInputSchema = z.object({
  ...payload,
});
export const GetNoteInputSchema = z.object({
  ...params,
});
export const UpdateNoteInputSchema = z.object({
  ...payload,
  ...params,
});

export type Note = z.infer<typeof NoteSchema>;
export type CreateNoteInput = z.infer<typeof CreateNoteInputSchema>;
export type GetNoteInput = z.infer<typeof GetNoteInputSchema>;
export type UpdateNoteInput = z.infer<typeof UpdateNoteInputSchema>;