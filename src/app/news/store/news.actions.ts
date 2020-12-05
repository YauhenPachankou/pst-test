import { createAction, props } from '@ngrx/store';

export const enum NewsActionsTypes {
  FETCH_NEWS = '[Home Page] Fetch news',
  ADD_NEWS_TO_STATE = '[Home Page] Add news to state',
  ADD_NEWS_TO_FAVORITES = '[Home Page] Add news to favorites',
  REMOVE_NEWS_FROM_FAVORITES = '[Favorites Page] Remove news from favorites',
}

export const fetchNews = createAction(NewsActionsTypes.FETCH_NEWS);

export const addNewsToState = createAction(
  NewsActionsTypes.ADD_NEWS_TO_STATE,
  props<{newsResponse}>()
);

export const addNewsToFavorites = createAction(
  NewsActionsTypes.ADD_NEWS_TO_FAVORITES,
  props<{newsItem}>()
);

export const removeNewsFromFavorites = createAction(
  NewsActionsTypes.REMOVE_NEWS_FROM_FAVORITES,
  props<{newsItem}>()
);

