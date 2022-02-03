import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../interfaces/user';

export const ADD_USER = createAction(
  'ADD_USER',
  props<{ payload: UserInterface }>()
);
