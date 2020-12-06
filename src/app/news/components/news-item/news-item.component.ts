import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IArticle } from 'src/app/news/models/news-response.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent {

  @Input() article: IArticle;
  @Input() isAdmin: boolean;
  @Input() btnText: string;

  @Output() switchArticleStatus: EventEmitter<IArticle> = new EventEmitter<IArticle>();
  @Output() removeNews: EventEmitter<IArticle> = new EventEmitter<IArticle>();

  switchArticleFavoriteStatus(): void {
    this.switchArticleStatus.emit(this.article);
  }

  removeArticle(): void {
    this.removeNews.emit(this.article);
  }
}
