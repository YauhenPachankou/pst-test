import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as AuthFeature from 'src/app/auth/store/auth.reducer';

export interface IAuthAppState {
  [AuthFeature.authFeatureKey]: AuthFeature.IAuthState;
}

export const selectAuthFeature = createFeatureSelector<IAuthAppState, AuthFeature.IAuthState>(AuthFeature.authFeatureKey);

export const selectUser = createSelector(
  selectAuthFeature,
  (state: AuthFeature.IAuthState) => state.user
);

export const selectIsLoggedIn = createSelector(
  selectAuthFeature,
  (state: AuthFeature.IAuthState) => state.isLoggedIn
);

export const selectIsAdmin = createSelector(
  selectAuthFeature,
  (state: AuthFeature.IAuthState) => state.isAdmin
);
