import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    Ng2SmartTableModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule, 
    MatNativeDateModule
  ],
  declarations: []
})
export class SharedModule { }
