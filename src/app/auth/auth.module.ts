import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as AuthFeature from 'src/app/auth/store/auth.reducer';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AuthFeature.authFeatureKey, AuthFeature.reducer)
  ]
})
export class AuthModule {}
