import { Pda } from './../../core/models/pda.model';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pontos-de-apoio-list',
  templateUrl: './pontos-de-apoio-list.component.html',
  styleUrls: ['./pontos-de-apoio-list.component.css']
})



export class PontosDeApoioListComponent {

  showForm = false;


  constructor() { 
  }

  displayedColumns: string[] = ['nome', 'rua', 'bairro', 'cidade'];
  dataSource = new MatTableDataSource<Pda>(data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Itens por página: ";
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {return "pág. " +(page+1) + " de " + Math.ceil(length/pageSize)};  
    this.dataSource.paginator = this.paginator;
  }

  togglePDAForm() {
    this.showForm = !this.showForm;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

const data:  Pda[] = [
  new Pda("pda 1", "rua a", "bairro b", "cidade c"),
  new Pda("pda 2", "rua a", "bairro d", "cidade f"),
  new Pda("pda 3", "rua c", "bairro a", "cidade c"),
];
