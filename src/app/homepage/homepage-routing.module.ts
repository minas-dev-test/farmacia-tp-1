import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    //path relativo, o real seria /home
    path: '',
    children: [
      { path: '', component: HomepageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class HomepageRoutingModule { }
