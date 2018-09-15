import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PontosDeApoioComponent } from './pages/pontos-de-apoio/pontos-de-apoio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pontos-de-apoio', component: PontosDeApoioComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
