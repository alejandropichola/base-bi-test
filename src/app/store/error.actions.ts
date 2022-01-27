import { createAction, props } from '@ngrx/store';
import { ErrorInterface } from '@/app/interfaces/error';

export const ADD_ERROR = createAction(
  'ADD_ERROR',
  props<{ payload: Array<ErrorInterface> }>()
);
