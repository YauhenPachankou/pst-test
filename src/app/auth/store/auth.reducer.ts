import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from 'src/app/auth/store/auth.actions';
import { IUserModel } from '../models/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  user: IUserModel;
}

const initialAuthState: AuthState = {
  isLoggedIn: false,
  isAdmin: false,
  user: null
};

const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.logIn, (state: AuthState, user: IUserModel) => ({
    ...state,
    user,
    isLoggedIn: true
  })),
  on(AuthActions.logOut , ((state: AuthState) => ({...state, isLoggedIn: false, user: null}))),
  on(AuthActions.logInAsadmin , ((state: AuthState) => ({...state, isAdmin: true})))
);

export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}

