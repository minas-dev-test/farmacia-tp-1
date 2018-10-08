import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pontos-de-apoio-form',
  templateUrl: './pontos-de-apoio-form.component.html',
  styleUrls: ['./pontos-de-apoio-form.component.css']
})
export class PontosDeApoioFormComponent implements OnInit {

    PDAForm: FormGroup;

    constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<PontosDeApoioFormComponent>
      ) {

    }

    ngOnInit() {
        this.PDAForm = this.fb.group({
            nome: ['', []],
            rua: ['', []],
            numero: ['', []],
            complemento: ['', []],
            bairro: ['', []],
            cidade: ['', []],
            estado: ['', []],
            pnt_referencia: ['', []],
            cep: ['', []],
        });
    }

    save() {
        this.dialogRef.close(this.PDAForm.value);
    }

    close() {
        this.dialogRef.close();
    }
}

/*
openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(PontosDeApoioFormComponent, dialogConfig);
}
*/
