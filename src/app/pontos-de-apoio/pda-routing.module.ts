import { Authentication } from './../auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PontosDeApoioListComponent } from './pontos-de-apoio-list/pontos-de-apoio-list.component';
import { PontosDeApoioComponent } from './pontos-de-apoio.component';


const routes: Routes = [
  { 
    //path relativo, o real seria /pda
    path: '',
    children: [
      { path: '', component: PontosDeApoioComponent, canActivate: [Authentication] },
      { path: 'listar', component: PontosDeApoioListComponent, canActivate: [Authentication] },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PdaRoutingModule { }
