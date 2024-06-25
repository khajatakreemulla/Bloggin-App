import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports : [
    SigninComponent,
    SignupComponent
  ]
})
export class AuthenticationModule { }
