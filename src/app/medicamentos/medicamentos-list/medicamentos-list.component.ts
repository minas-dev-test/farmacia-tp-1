import { Medicamento, TipoMedicamento } from './../../core/models/medicamento.model';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-medicamentos-list',
  templateUrl: './medicamentos-list.component.html',
  styleUrls: ['./medicamentos-list.component.css']
})
export class MedicamentosListComponent implements OnInit {

  showForm = false;
  settings = {
    columns: {
      nomeComercial: {
        title: 'Nome comercial'
      },
      laboratorio: {
        title: 'Laboratório',
      },
      tipo: {
        title: 'Forma farmaceutica',
        valuePrepareFunction: (tipo) => {
          return tipo.descricao;
        }
      },
      dataVencimento: {
        title: 'Vencimento',
        valuePrepareFunction: (dataVencimento) => {
          return dataVencimento.toLocaleString().split(' ')[0];
        }
      },
      dosagem: {
        title: 'Dosagem',
      }
      
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

   ];

  source: LocalDataSource;

  constructor() {
    var med1 = new Medicamento("Dipirona", "Lab 1",  {codigo: 10, descricao: "comprimidos"});
    med1.dataVencimento = new Date(2020, 1, 1);
    med1.dosagem = '1comp/dia';
    this.data.push(med1);
    var med2 = new Medicamento("Aspirina", "Lab 2", {codigo: 13, descricao: "efervescente"});
    med2.dataVencimento = new Date(2020, 1, 1);
    med2.dosagem = '15ml/dia';
    this.data.push(med2);

    this.source = new LocalDataSource(this.data);
   }

  ngOnInit() {
  }

  toggleMedicamentoForm() {
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
