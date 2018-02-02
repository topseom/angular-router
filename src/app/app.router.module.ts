import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompoComponent } from './compo/compo.component';

@NgModule({
    imports:[ 
        CommonModule,
        RouterModule.forRoot([
            {
                path:"",component:HomeComponent,pathMatch:"full"
            },
            {
                path:"compo",component:CompoComponent
            },
            {
                path:"lazy",loadChildren:'./lazy/lazy.module#LazyModule'
            }
        ])
        ],
    exports: [ RouterModule ]
})
export default class AppRouter{}