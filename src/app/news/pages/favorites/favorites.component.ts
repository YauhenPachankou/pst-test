import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as NewsActions from 'src/app/news/store/news.actions';
import * as NewsSelectors from 'src/app/news/store/news.selectors';
import { IArticle } from 'src/app/news/models/news-response.model';
import { trackBy } from 'src/app/core/utils/trackBy';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  trackBy = trackBy;
  favoriteNews$: Observable<IArticle[]>;
  btnText = 'Убрать из избранного';

  constructor(private store: Store<NewsSelectors.INewsAppState>) {}

  ngOnInit(): void {
    this.favoriteNews$ = this.store.select(NewsSelectors.selectFavoritesNews);
  }

  onRemoveArticleFromFavorite(article: IArticle): void {
    this.store.dispatch(NewsActions.removeNewsFromFavorites(article));
  }

}
