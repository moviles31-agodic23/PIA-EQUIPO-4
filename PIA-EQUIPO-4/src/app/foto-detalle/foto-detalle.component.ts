import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FotoService } from '../foto.service';
import { Foto } from '../interfaces/foto.interface';

@Component({
  selector: 'app-foto-detalle',
  templateUrl: './foto-detalle.component.html',
  styleUrls: ['./foto-detalle.component.scss'],
})
export class FotoDetalleComponent  implements OnInit {

  constructor(private router: Router, private foto:FotoService) { }

  ngOnInit() {}

  perfilEjemplo = {
    fotoPerfil: "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/cataluna/selfies-sagrada-familia-barcelona-portada-s2124850073-c-davide-angelini.png_1014274486.png",
    nombrePerfil: "Cesar",
    seguidoresPerfil: "12",
    publicacionesPerfil: "12",
    seguidosPerfil: "12",
    descripcionPerfil: "Hola",
    fotosDelPerfil: "https://th.bing.com/th/id/OIP.PNLxg3EbdNVa-lUez5Sj3wHaLH?pid=ImgDet&rs=1",
    descripcionFoto: "Hola esta es una descripcion",
    showFullText: false,
    like: false
  };

  irAInicio(){
    this.router.navigate(['/inicio'])
  }
  irAPerfil(){
    this.router.navigate(['/perfil']);
  }
  irACamara(){
    this.foto.addNewToGallery()
  }
  
  fotos: Foto[] = this.foto.fotos;
}
