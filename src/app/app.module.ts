import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

// Services
import { RouterModule, Routes } from '@angular/router';
import { RoutesApp } from './app.routes';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RoutesApp,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
