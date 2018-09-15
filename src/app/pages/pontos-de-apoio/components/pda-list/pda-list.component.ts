import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pda-list',
  templateUrl: './pda-list.component.html',
  styleUrls: ['./pda-list.component.css']
})
export class PdaListComponent implements OnInit {

  lista: string[] = ['pda 1', 'pda 2'];

  constructor() { }

  ngOnInit() {
  }

}
