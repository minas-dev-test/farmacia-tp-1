import { Authentication } from './../auth/auth.guard';
import { AuthService } from './../auth/auth.service';
import { HomepageModule } from './../homepage/homepage.module';
import { PontosDeApoioModule } from './../pontos-de-apoio/pontos-de-apoio.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SobreOProjetoComponent } from '../sobre-o-projeto/sobre-o-projeto.component';
import { SacComponent } from '../sac/sac.component';
import { MedicamentosComponent } from '../medicamentos/medicamentos.component';
import { NoticiasComponent } from '../noticias/noticias.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {
    path:'callback',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => HomepageModule },
  { path: 'pontos-de-apoio', loadChildren: () => PontosDeApoioModule, canActivate: [Authentication] },
  { path: 'sobre-o-projeto', component: SobreOProjetoComponent },
  { path: 'sac', component: SacComponent},
  { path: 'medicamentos', component: MedicamentosComponent, canActivate:[Authentication] },
  { path: 'noticias', component: NoticiasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService],
})

export class NavbarRoutingModule { }
