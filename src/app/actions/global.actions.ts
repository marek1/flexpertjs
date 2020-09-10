import { createAction, props } from '@ngrx/store';

export const setMessage = createAction(
  '[Global] insert a message',
  props<{body: string, color: string}>()
);

export const removeMessage = createAction(
  '[Global] remove a message',
  props<{id: number}>()
);
