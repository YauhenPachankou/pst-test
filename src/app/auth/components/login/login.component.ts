import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from 'src/app/auth/store/auth.actions';
import * as AuthSelectors from 'src/app/auth/store/auth.selectors';
import * as NewsActions from '../../../news/store/news.actions';
import * as NewsSelectors from '../../../news/store/news.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isAdmin: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storeAuth: Store<AuthSelectors.IAuthAppState>,
    private storeNews: Store<NewsSelectors.INewsAppState>,
  ) {}

  ngOnInit(): void {
     this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isAdminCheck(checked: boolean): void {
    this.isAdmin = checked;
  }

  login(form: FormGroup): void {
    if (this.isAdmin) {
      this.storeAuth.dispatch(AuthActions.logInAsAdmin());
    }
    this.storeAuth.dispatch(AuthActions.logIn(form.value));
    this.storeNews.dispatch(NewsActions.fetchNews());
    this.router.navigate(['/home']);
  }

}
