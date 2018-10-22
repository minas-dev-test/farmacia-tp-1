import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {

  noticias = [
    {
      id: '1',
      titulo: 'Titulo da noticia 1',
      resumo: 'resumo...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
      corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
    },
    {
      id: '2',
      titulo: 'Titulo da noticia 2',
      resumo: 'resumo...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
      corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
    },
    {
      id: '3',
      titulo: 'Titulo da noticia 3',
      resumo: 'resumo...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
      corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
    },
    {
      id: '4',
      titulo: 'Titulo da noticia 4',
      resumo: 'resumo...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
      corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin at risus vitae hendrerit. Praesent pharetra accumsan lectus. Pellentesque venenatis eget magna id mattis. In hac habitasse platea dictumst. Quisque et purus erat. Ut bibendum turpis id semper auctor. Morbi vestibulum magna non tincidunt malesuada. Vivamus et enim eget nunc sagittis vehicula a ut metus.',
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }

  viewNoticia(data) {
    console.log(data);
  }

}
