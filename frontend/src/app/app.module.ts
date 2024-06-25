import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ArticlesModule } from './articles/articles.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { EditorialTeamComponent } from './editorial-team/editorial-team.component';
import { FooterComponent } from './footer/footer.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    NavbarComponent,
    EditorialTeamComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticlesModule,
    AuthenticationModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
