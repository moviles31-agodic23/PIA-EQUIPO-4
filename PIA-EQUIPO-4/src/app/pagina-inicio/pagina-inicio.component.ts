import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss'],
})
export class PaginaInicioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  perfilEjemplo = {
    fotoPerfil: "",
    nombrePerfil: "Cesar",
    seguidoresPerfil: "12",
    publicacionesPerfil: "12",
    seguidosPerfil: "12",
    descripcionPerfil: "Hola",
    fotosDelPerfil: "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/355269832_6061859987275836_3978109988933382981_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JLEPiew8O9MAX9RwLV1&_nc_ht=scontent.fntr8-1.fna&oh=00_AfDrSVrmSIizU45HzoU9PqZJzMBhDJr2DuUfet3eUcHHog&oe=654F767A"
  }

}
