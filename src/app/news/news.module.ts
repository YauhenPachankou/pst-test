import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as NewsFeature from 'src/app/news/store/news.reducer'
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsItemComponent } from 'src/app/news/components/news-item/news-item.component';
import { HomeComponent } from 'src/app/news/pages/home/home.component';
import { FavoritesComponent } from 'src/app/news/pages/favorites/favorites.component';
import { NewsRoutingModule } from 'src/app/news/news-routing.module';
import { NewsEffects } from 'src/app/news/store/news.effects';

@NgModule({
  declarations: [
    HomeComponent,
    FavoritesComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    StoreModule.forFeature(NewsFeature.newsFeatureKey, NewsFeature.reducer),
    EffectsModule.forFeature([NewsEffects])
  ]
})
export class NewsModule { }
