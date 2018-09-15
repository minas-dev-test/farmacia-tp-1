import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdaListComponent } from './components/pda-list/pda-list.component';
import { NewPdaFormComponent } from './components/new-pda-form/new-pda-form.component';
import { MatCardModule, MatExpansionModule, MatFormFieldModule, MatListModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PontosDeApoioComponent } from './pontos-de-apoio.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
  ],
  declarations: [
    PontosDeApoioComponent,
    PdaListComponent,
    NewPdaFormComponent,

  ],
  exports: [

  ]
})
export class PontosDeApoioModule { }
