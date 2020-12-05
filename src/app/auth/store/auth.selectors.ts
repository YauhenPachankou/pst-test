import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as AuthFeature from 'src/app/auth/store/auth.reducer';

export interface AppState {
  [AuthFeature.authFeatureKey]: AuthFeature.AuthState;
}

export const selectAuthFeature = createFeatureSelector<AppState, AuthFeature.AuthState>(AuthFeature.authFeatureKey);

export const selectUser = createSelector(
  selectAuthFeature,
  (state: AuthFeature.AuthState) => state.user
);

export const selectIsLoggedIn = createSelector(
  selectAuthFeature,
  (state: AuthFeature.AuthState) => state.isLoggedIn
);

export const selectIsAdmin = createSelector(
  selectAuthFeature,
  (state: AuthFeature.AuthState) => state.isAdmin
);
