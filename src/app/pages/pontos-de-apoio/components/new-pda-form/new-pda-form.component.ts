import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-new-pda-form',
  templateUrl: './new-pda-form.component.html',
  styleUrls: ['./new-pda-form.component.css']
})
export class NewPdaFormComponent implements OnInit {

  pdaForm: FormGroup;

  formFields: Array<String>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formFields = [
      "Nome",
      "CEP",
      "Rua",
      "Numero",
      "Complemento",
      "Bairro",
      "Cidade",
      "Estado",
      "Referencia",
      "Latitude",
      "Longitude"
    ];
    this.pdaForm = this.fb.group({
      nome: ['',[Validators.required,Validators.minLength(4)]],
      cep: ['',[Validators.required,Validators.minLength(4)]],
      rua: ['',[Validators.required,Validators.minLength(4)]],
      numero: ['',[Validators.required,Validators.minLength(4)]],
      complemento: ['',[]],
      bairro: ['',[Validators.required,Validators.minLength(4)]],
      cidade: ['',[Validators.required,Validators.minLength(4)]],
      estado: ['',[Validators.required,Validators.minLength(4)]],
      referencia: ['',[]],
      latitude: ['',[Validators.required,Validators.minLength(4)]],
      longitude: ['',[Validators.required,Validators.minLength(4)]],

    });

  }

  get nome() {
    return this.pdaForm.get("nome");
  }

  get cep() {
    return this.pdaForm.get("cep");
  }

  get rua() {
    return this.pdaForm.get("rua");
  }

  get numero() {
    return this.pdaForm.get("numero");
  }
  get complemento() {
    return this.pdaForm.get("complemento");
  }
  get bairro() {
    return this.pdaForm.get("bairro");
  }
  get cidade() {
    return this.pdaForm.get("cidade");
  }

  get estado() {
    return this.pdaForm.get("estado");
  }
  get referencia() {
    return this.pdaForm.get("referencia");
  }
  get latitude() {
    return this.pdaForm.get("latitude");
  }
  get longitude() {
    return this.pdaForm.get("longitude");
  }

  submitPDA() {
    console.log(this.nome.value, this.cep.value);
  }

}
