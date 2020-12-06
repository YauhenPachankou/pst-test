import { createReducer, on, Action } from '@ngrx/store';

import * as NewsActions from 'src/app/news/store/news.actions';
import { IArticle, INewsResponseModel } from 'src/app/news/models/news-response.model';

export const newsFeatureKey = 'news';

export interface INewsState {
  news: IArticle[];
  favoritesNews: IArticle[];
}

const initialNewsState: INewsState = {
  news: [],
  favoritesNews: []
};

const newsReducer = createReducer(
  initialNewsState,
  on(NewsActions.addNewsToState, (state: INewsState, news: INewsResponseModel) => ({
    ...state,
    news: [...news.articles]
  })),
  on(NewsActions.resetNewsState, (state: INewsState) => ({
    ...state,
    news: [],
    favoritesNews: []
  })),
  on(NewsActions.addNewsToFavorites, (state: INewsState, news: IArticle) => {
    let favoritesNews = [...state.favoritesNews];

    if (!state.favoritesNews.find((item: IArticle) => item.title === news.title)) {
      favoritesNews = [...state.favoritesNews, news];
    }

    return {
      ...state,
      favoritesNews
    };
  }),
  on(NewsActions.removeNewsFromFavorites, (state: INewsState, news: IArticle) => ({
    ...state,
    favoritesNews: state.favoritesNews.filter((newsItem: IArticle) => newsItem.title !== news.title)
  })),
  on(NewsActions.removeNews, (state: INewsState, news: IArticle) => ({
    ...state,
    news: state.news.filter((newsItem: IArticle) => newsItem.title !== news.title),
    favoritesNews: state.favoritesNews.filter((newsItem: IArticle) => newsItem.title !== news.title),
  }))
);

export function reducer(state: INewsState, action: Action) {
  return newsReducer(state, action);
}

