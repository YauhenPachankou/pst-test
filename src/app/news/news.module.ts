import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NewsRoutingModule } from './news-routing.module';

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
    // StoreModule.forFeature(),
    // EffectsModule.forFeature([VideosEffects])
  ]
})
export class NewsModule { }
