import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PontosDeApoioListComponent } from './pontos-de-apoio-list/pontos-de-apoio-list.component';
import { PontosDeApoioComponent } from './pontos-de-apoio.component';


const routes: Routes = [
  { 
    //path relativo, o real seria /pda
    path: '',
    children: [
      { path: '', component: PontosDeApoioComponent },
      { path: 'listar', component: PontosDeApoioListComponent }
    ]
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdaRoutingModule { }
