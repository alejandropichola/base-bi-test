import { Action, createReducer, on } from '@ngrx/store';

import { ErrorInterface } from '@/app/interfaces/error';
import * as ErrorActions from '@/app/store/error.actions';
import { AppState } from '../app.state';

// 2 - Estado inicial
const initialState: Array<ErrorInterface> = [];

// 3 - Switch con las funciones puras
export const errorReducer = createReducer(initialState,
    on(ErrorActions.ADD_ERROR, (state, { payload }) => {
        return payload
    }))
