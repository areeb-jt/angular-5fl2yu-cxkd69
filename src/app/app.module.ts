import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { UserAuthModule } from './user-auth/user-auth.module';
import { UserListsComponent } from './user-lists/user-lists.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListsComponent,
    AboutusComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, UserAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
