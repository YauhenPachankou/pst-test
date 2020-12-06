import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as NewsActions from 'src/app/news/store/news.actions';
import * as NewsSelectors  from 'src/app/news/store/news.selectors';
import { FetchNewsService } from 'src/app/news/services/fetch-news.service';
import { INewsResponseModel } from 'src/app/news/models/news-response.model';

@Injectable()
export class NewsEffects {

  constructor(
    private actions$: Actions,
    private store: Store<NewsSelectors.INewsAppState>,
    private fetchNewsService: FetchNewsService
  ) {}

  public fetchNews$ = createEffect(() => this.actions$.pipe(
    ofType(NewsActions.NewsActionsTypes.FETCH_NEWS),
    mergeMap(() => this.fetchNewsService.fetchNews()
      .pipe(
        map(((newsResponse: INewsResponseModel) => (NewsActions.addNewsToState(newsResponse))),
        catchError(() => EMPTY))
      )
    )
  ))

}
