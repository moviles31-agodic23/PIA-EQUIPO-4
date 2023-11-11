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
    fotoPerfil: "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/355269832_6061859987275836_3978109988933382981_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JLEPiew8O9MAX9RwLV1&_nc_ht=scontent.fntr8-1.fna&oh=00_AfDrSVrmSIizU45HzoU9PqZJzMBhDJr2DuUfet3eUcHHog&oe=654F767A",
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
    fotoPerfil: "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/355269832_6061859987275836_3978109988933382981_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JLEPiew8O9MAX9RwLV1&_nc_ht=scontent.fntr8-1.fna&oh=00_AfDrSVrmSIizU45HzoU9PqZJzMBhDJr2DuUfet3eUcHHog&oe=654F767A",
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
