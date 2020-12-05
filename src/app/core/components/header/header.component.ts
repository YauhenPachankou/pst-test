import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthSelector from 'src/app/auth/store/auth.selectors';
import * as AuthActions from 'src/app/auth/store/auth.actions';
import { AppState } from 'src/app/auth/store/auth.selectors';
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
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(AuthSelector.selectIsLoggedIn)
    this.isAdmin$ = this.store.select(AuthSelector.selectIsAdmin);
    this.user$ = this.store.select(AuthSelector.selectUser);
  }

  logout(): void {
    this.store.dispatch(AuthActions.logOut());
    this.router.navigate(['/']);
  }
}
