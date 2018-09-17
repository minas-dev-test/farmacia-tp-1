import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PontosDeApoioComponent } from './pages/pontos-de-apoio/pontos-de-apoio.component';
import { Authentication } from './app.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'pontos-de-apoio',
    component: PontosDeApoioComponent,
    canActivate: [Authentication]
  },
  {
    path:'callback',
    redirectTo:'/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
