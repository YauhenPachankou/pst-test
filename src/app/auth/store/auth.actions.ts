import { createAction, props } from '@ngrx/store';

import { IUserModel } from 'src/app/auth/models/user.model';

export const enum AuthActionsTypes {
  LOG_IN = '[Auth Page] Log in',
  LOG_OUT = '[Home Page] Log out',
  LOG_IN_AS_ADMIN = '[Auth Page] Log in as admin'
}

export const logIn = createAction(AuthActionsTypes.LOG_IN, props<IUserModel>());
export const logOut = createAction(AuthActionsTypes.LOG_OUT);
export const logInAsAdmin = createAction(AuthActionsTypes.LOG_IN_AS_ADMIN);


