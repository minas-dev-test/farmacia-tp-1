import { Authentication } from './../auth/auth.guard';
import { MedicamentosListComponent } from './medicamentos-list/medicamentos-list.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { //path relativo, o real seria /pda
    path: '',
    children: [
      { path: '', component: MedicamentosListComponent, canActivate: [Authentication] },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
