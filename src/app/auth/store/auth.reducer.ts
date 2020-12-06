import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from 'src/app/auth/store/auth.actions';
import { IUserModel } from 'src/app/auth/models/user.model';

export const authFeatureKey = 'auth';

export interface IAuthState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  user: IUserModel;
}

const initialAuthState: IAuthState = {
  isLoggedIn: false,
  isAdmin: false,
  user: null
};

const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.logIn, (state: IAuthState, user: IUserModel) => ({
    ...state,
    user,
    isLoggedIn: true
  })),
  on(AuthActions.logOut , ((state: IAuthState) => ({...state, isLoggedIn: false, user: null}))),
  on(AuthActions.logInAsAdmin , ((state: IAuthState) => ({...state, isAdmin: true})))
);

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action);
}

