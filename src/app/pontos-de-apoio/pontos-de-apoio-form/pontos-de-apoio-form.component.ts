import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pontos-de-apoio-form',
  templateUrl: './pontos-de-apoio-form.component.html',
  styleUrls: ['./pontos-de-apoio-form.component.css']
})
export class PontosDeApoioFormComponent implements OnInit {

    PDAForm: FormGroup;

    constructor(
      private fb: FormBuilder
      ) {

    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
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
            horaAbertura: ['', []],
            horaFechamento: ['',[]],
        });
    }

    onSubmit() {
        console.log(this.PDAForm.value);
    }
}


