import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthActions from 'src/app/auth/store/auth.actions';
import * as AuthSelectors from 'src/app/auth/store/auth.selectors';
import * as NewsActions from 'src/app/news/store/news.actions';
import * as NewsSelectors from 'src/app/news/store/news.selectors';
import { IUserModel } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  user$: Observable<IUserModel>;

  constructor(
    private storeAuth: Store<AuthSelectors.IAuthAppState>,
    private storeNews: Store<NewsSelectors.INewsAppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.storeAuth.select(AuthSelectors.selectIsLoggedIn);
    this.isAdmin$ = this.storeAuth.select(AuthSelectors.selectIsAdmin);
    this.user$ = this.storeAuth.select(AuthSelectors.selectUser);
  }

  logout(): void {
    this.storeAuth.dispatch(AuthActions.logOut());
    this.storeNews.dispatch(NewsActions.resetNewsState());
    this.router.navigate(['/']);
  }
}
