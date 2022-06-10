import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInPageComponent,
    UserProfilePageComponent,
    SignOutPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
