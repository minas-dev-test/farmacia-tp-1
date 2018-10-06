import { HomepageModule } from './../homepage/homepage.module';
import { PontosDeApoioModule } from './../pontos-de-apoio/pontos-de-apoio.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => HomepageModule },
  { path: 'pda', loadChildren: () => PontosDeApoioModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NavbarRoutingModule { }
