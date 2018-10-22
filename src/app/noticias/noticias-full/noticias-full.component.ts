import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-full',
  templateUrl: './noticias-full.component.html',
  styleUrls: ['./noticias-full.component.css']
})
export class NoticiasFullComponent implements OnInit {

  noticia: {
    titulo: 'Titulo da noticia 1',
    resumo: 'resumo noticia 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
    corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
  }

  constructor() { }

  ngOnInit() {
  }

}
