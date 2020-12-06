import { createAction, props } from '@ngrx/store';

import { IArticle, INewsResponseModel } from 'src/app/news/models/news-response.model';

export const enum NewsActionsTypes {
  FETCH_NEWS = '[Home Page] Fetch news',
  ADD_NEWS_TO_STATE = '[Home Page] Add news to state',
  ADD_NEWS_TO_FAVORITES = '[Home Page] Add news to favorites',
  REMOVE_NEWS = '[Home Page] Remove news',
  REMOVE_NEWS_FROM_FAVORITES = '[Favorites Page] Remove news from favorites',
  RESET_NEWS_STATE = '[Header Component] Reset State',
}

export const fetchNews = createAction(NewsActionsTypes.FETCH_NEWS);
export const resetNewsState = createAction(NewsActionsTypes.RESET_NEWS_STATE);

export const addNewsToState = createAction(
  NewsActionsTypes.ADD_NEWS_TO_STATE,
  props<INewsResponseModel>()
);

export const addNewsToFavorites = createAction(
  NewsActionsTypes.ADD_NEWS_TO_FAVORITES,
  props<IArticle>()
);

export const removeNews = createAction(
  NewsActionsTypes.REMOVE_NEWS,
  props<IArticle>()
);

export const removeNewsFromFavorites = createAction(
  NewsActionsTypes.REMOVE_NEWS_FROM_FAVORITES,
  props<IArticle>()
);

