import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as NewsFeature from 'src/app/news/store/news.reducer';

export interface INewsAppState {
  [NewsFeature.newsFeatureKey]: NewsFeature.INewsState;
}

export const selectNewsFeature = createFeatureSelector<INewsAppState, NewsFeature.INewsState>(NewsFeature.newsFeatureKey);

export const selectNews = createSelector(
  selectNewsFeature,
  (state: NewsFeature.INewsState) => state.news
);

export const selectFavoritesNews = createSelector(
  selectNewsFeature,
  (state: NewsFeature.INewsState) => state.favoritesNews
);

