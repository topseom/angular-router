import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import AppRouter from './lazy.router.module';

@NgModule({
  imports: [
    CommonModule,
    AppRouter
  ],
  declarations: [HomeComponent]
})
export class LazyModule { }
