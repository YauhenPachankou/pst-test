import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as NewsActions from 'src/app/news/store/news.actions';
import * as NewsSelectors from 'src/app/news/store/news.selectors';
import * as AuthSelectors from 'src/app/auth/store/auth.selectors';
import { IArticle } from 'src/app/news/models/news-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news$: Observable<IArticle[]>
  isAdmin$: Observable<boolean>;
  btnText = 'Добавить в избранное';

  constructor(
    private storeNews: Store<NewsSelectors.INewsAppState>,
    private storeAuth: Store<AuthSelectors.IAuthAppState>
  ) {}

  ngOnInit(): void {
    this.news$ = this.storeNews.select(NewsSelectors.selectNews);
    this.isAdmin$ = this.storeAuth.select(AuthSelectors.selectIsAdmin);
  }

  onAddArticleToFavorites(article: IArticle): void {
    this.storeNews.dispatch(NewsActions.addNewsToFavorites(article));
  }

  onRemoveArticle(article: IArticle): void {
    this.storeNews.dispatch(NewsActions.removeNews(article));
  }

}
