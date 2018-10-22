import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-medicamentos-form',
  templateUrl: './medicamentos-form.component.html',
  styleUrls: ['./medicamentos-form.component.css']
})
export class MedicamentosFormComponent implements OnInit {

  MedicamentosForm: FormGroup;

    constructor(
      private fb: FormBuilder
      ) {

    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.MedicamentosForm = this.fb.group({
          nomeComercial: ['', []],
          laboratorio: ['', []],
          principioAtivo: ['', []],
          lote: ['', []],
          dosagem: ['', []],
          id: ['', []],
          dataVencimento: ['', []],
          outrasEspecificacoes: ['',[]],
        });
    }

    onSubmit() {
        console.log(this.MedicamentosForm.value);
    }

}
