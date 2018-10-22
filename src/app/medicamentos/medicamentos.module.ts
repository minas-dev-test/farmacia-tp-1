import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MedicamentosListComponent } from './medicamentos-list/medicamentos-list.component';
import { MedicamentosFormComponent } from './medicamentos-form/medicamentos-form.component';



@NgModule({
  imports: [
    SharedModule,
    MedicamentosRoutingModule,
  ],
  declarations: [MedicamentosListComponent, MedicamentosFormComponent],
  entryComponents:[MedicamentosListComponent]
})
export class MedicamentosModule { }
