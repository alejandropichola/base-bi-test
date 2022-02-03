import { Action, createReducer, on } from '@ngrx/store';

import * as UserAction from '@/app/store/user.actions';
import { UserInterface } from '@/app/interfaces/user';

// 2 - Estado inicial
const initialState: UserInterface = {
  name: '',
  lastname: '',
  dpi: '',
  phone: '',
  email: '',
  photo: ''
};

// 3 - Switch con las funciones puras
export const userReducer = createReducer(
  initialState,
  on(UserAction.ADD_USER, (state, { payload }) => {
    console.log(payload);
    return payload;
  })
);
