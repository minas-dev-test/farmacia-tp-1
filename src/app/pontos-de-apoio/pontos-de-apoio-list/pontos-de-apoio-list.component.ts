import { Pda } from './../../core/models/pda.model';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-pontos-de-apoio-list',
  templateUrl: './pontos-de-apoio-list.component.html',
  styleUrls: ['./pontos-de-apoio-list.component.css']
})
export class PontosDeApoioListComponent implements OnInit {

  showForm = false;
  settings = {
    columns: {
      nome: {
        title: 'Nome'
      },
      rua: {
        title: 'Rua'
      },
      bairro: {
        title: 'Bairro'
      },
      cidade: {
        title: 'Cidade'
      },
    },
    actions: {
      add: false,
      edit: true,
      delete: true,
    },
    edit: {
      confirmSave: true,
      editButtonContent: 'Editar',
      saveButtonContent: 'Salvar',
      cancelButtonContent:'Cancelar',
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: 'Deletar',
    },
    mode: 'inline',
  };

  data = [
    new Pda("pda 1", "rua a", "bairro b", "cidade c"),
    new Pda("pda 2", "rua a", "bairro d", "cidade f"),
    new Pda("pda 3", "rua c", "bairro a", "cidade c"),
  ];

  source: LocalDataSource;

  constructor() { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {
  }

  togglePDAForm() {
    this.showForm = !this.showForm;
  }

  onSaveConfirm(event) {
    if (window.confirm('Salvar?')) {
      event.confirm.resolve(event.newData);
      console.log("Dados editados: " + this.data);
    } else {
      event.confirm.reject();
    }
  }

}
