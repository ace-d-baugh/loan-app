/*
============================================
; Title:  app-routing.module.ts
; Author: Ace Baugh
; Date: February 23, 2023
; Description: This is the app routing module file
============================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'about',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: ContactComponent,
      },
    ],
  },
  {
    path: '**',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
