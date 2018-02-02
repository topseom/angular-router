import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompoComponent } from './compo/compo.component';
import { HomeComponent } from './home/home.component';
import AppRouter  from './app.router.module';

@NgModule({
  declarations: [
    AppComponent,
    CompoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
