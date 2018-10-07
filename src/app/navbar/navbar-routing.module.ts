import { Authentication } from './../auth/auth.guard';
import { AuthService } from './../auth/auth.service';
import { HomepageModule } from './../homepage/homepage.module';
import { PontosDeApoioModule } from './../pontos-de-apoio/pontos-de-apoio.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {
    path:'callback',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => HomepageModule },
  { path: 'pontos-de-apoio', loadChildren: () => PontosDeApoioModule, canActivate: [Authentication] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService],
})

export class NavbarRoutingModule { }
