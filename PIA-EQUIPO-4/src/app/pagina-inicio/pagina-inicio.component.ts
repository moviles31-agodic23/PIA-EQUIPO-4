import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss'],
})
export class PaginaInicioComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    this.perfilesEjemplo.push(this.perfilEjemplo)
    this.perfilesEjemplo.push(this.perfilEjemplo2);
  }

  perfilesEjemplo: any[] = [];


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

  perfilEjemplo2 = {
    fotoPerfil: "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/cataluna/selfies-sagrada-familia-barcelona-portada-s2124850073-c-davide-angelini.png_1014274486.png",
    nombrePerfil: "Alexander",
    numeroSeguidoresPerfil: "12",
    numeroPublicacionesPerfil: "12",
    numeroSeguidosPerfil: "12",
    descripcionPerfil: "Hola",
    fotosDelPerfil: "https://th.bing.com/th/id/OIP.7ysj6BCPhm7U7xE56etBHgHaHa?pid=ImgDet&rs=1",
    descripcionFoto: "Hola esta es una segunda descripcion",
    showFullText: false,
    like: false
  };

  irAPerfil(){
    this.router.navigate(['/perfil']);
  }
}
