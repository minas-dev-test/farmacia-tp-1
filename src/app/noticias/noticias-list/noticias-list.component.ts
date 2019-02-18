import { NoticiaDialogComponent } from './noticia-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';




@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent {

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
  
  constructor(public dialog: MatDialog) { }


  viewNoticia(noticia) {
    //console.log(noticia);
    this.dialog.open(NoticiaDialogComponent, {
      data: {
        noticia: noticia
      }
    });
  }

}
