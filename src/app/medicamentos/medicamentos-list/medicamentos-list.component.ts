import { Medicamento } from './../../core/models/medicamento.model';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-medicamentos-list',
  templateUrl: './medicamentos-list.component.html',
  styleUrls: ['./medicamentos-list.component.css']
})


export class MedicamentosListComponent {


  
  displayedColumns: string[] = ['nomeComercial', 'laboratorio', 'tipo.codigo', 'tipo.descricao'];
  dataSource = new MatTableDataSource<Medicamento>(data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Itens por página: ";
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {return "pág. " +(page+1) + " de " + Math.ceil(length/pageSize)}; 
    this.dataSource.paginator = this.paginator;
  }

  showForm = false;


  constructor() {
   }


  toggleMedicamentoForm() {
    this.showForm = !this.showForm;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

const data: Medicamento[] = [
  {nomeComercial:"Dipirona", laboratorio: "Lab 1", tipo: {codigo: 10, descricao: "comprimidos"}, lote: "01", principioAtivo: "p1", dosagem: "01/dia", dataVencimento: new Date(), outrasEspecificacoes: "n/a", status: {codigo: 10, descricao: "comprimidos"}, obsExclusao: "231", usoVeterinario: 'false'},
  {nomeComercial:"Aspirina", laboratorio: "Lab 2", tipo: {codigo: 11, descricao: "efervescente"}, lote: "01", principioAtivo: "p2", dosagem: "01/dia", dataVencimento: new Date(), outrasEspecificacoes: "n/a", status: {codigo: 10, descricao: "comprimidos"}, obsExclusao: "231", usoVeterinario: 'false'},
  {nomeComercial:"Medicamento 3", laboratorio: "Lab 3", tipo: {codigo: 10, descricao: "comprimidos"}, lote: "01", principioAtivo: "p3", dosagem: "02/dia", dataVencimento: new Date(), outrasEspecificacoes: "n/a", status: {codigo: 10, descricao: "comprimidos"}, obsExclusao: "231", usoVeterinario: 'false'},
  {nomeComercial:"Medicamento 4", laboratorio: "Lab 4", tipo: {codigo: 10, descricao: "comprimidos"}, lote: "01", principioAtivo: "p4", dosagem: "01/dia", dataVencimento: new Date(), outrasEspecificacoes: "n/a", status: {codigo: 10, descricao: "comprimidos"}, obsExclusao: "231", usoVeterinario: 'false'},
  {nomeComercial:"Dipirona", laboratorio: "Lab 5", tipo: {codigo: 10, descricao: "comprimidos"}, lote: "01", principioAtivo: "p1", dosagem: "01/dia", dataVencimento: new Date(), outrasEspecificacoes: "n/a", status: {codigo: 10, descricao: "comprimidos"}, obsExclusao: "231", usoVeterinario: 'false'},
  {nomeComercial:"Aspirina", laboratorio: "Lab 4", tipo: {codigo: 11, descricao: "efervescente"}, lote: "01", principioAtivo: "p2", dosagem: "01/dia", dataVencimento: new Date(), outrasEspecificacoes: "n/a", status: {codigo: 10, descricao: "comprimidos"}, obsExclusao: "231", usoVeterinario: 'false'},
  {nomeComercial:"Medicamento 3", laboratorio: "Lab 7", tipo: {codigo: 10, descricao: "comprimidos"}, lote: "01", principioAtivo: "p3", dosagem: "02/dia", dataVencimento: new Date(), outrasEspecificacoes: "n/a", status: {codigo: 10, descricao: "comprimidos"}, obsExclusao: "231", usoVeterinario: 'false'},
  {nomeComercial:"Medicamento 4", laboratorio: "Lab 4", tipo: {codigo: 10, descricao: "comprimidos"}, lote: "01", principioAtivo: "p4", dosagem: "01/dia", dataVencimento: new Date(), outrasEspecificacoes: "n/a", status: {codigo: 10, descricao: "comprimidos"}, obsExclusao: "231", usoVeterinario: 'false'},
];
