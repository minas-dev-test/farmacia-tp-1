import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pdas',
  templateUrl: './list-pdas.component.html',
  styleUrls: ['./list-pdas.component.css']
})
export class ListPdasComponent implements OnInit {

  lista: string[] = ['pda 1', 'pda 2'];

  constructor() { }

  ngOnInit() {
  }

}
