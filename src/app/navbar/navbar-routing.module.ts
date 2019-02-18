import { MedicamentosModule } from './../medicamentos/medicamentos.module';
import { NoticiasModule } from './../noticias/noticias.module';
import { Authentication } from './../auth/auth.guard';
import { AuthService } from './../auth/auth.service';
import { HomepageModule } from './../homepage/homepage.module';
import { PontosDeApoioModule } from './../pontos-de-apoio/pontos-de-apoio.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SacComponent } from '../sac/sac.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {
    path:'callback',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => HomepageModule },
  { path: 'pontos-de-apoio', loadChildren: () => PontosDeApoioModule, canActivate: [Authentication] },
  { path: 'sac', component: SacComponent},
  { path: 'medicamentos', loadChildren: () => MedicamentosModule, canActivate:[Authentication] },
  { path: 'noticias', loadChildren: () => NoticiasModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService],
})

export class NavbarRoutingModule { }
