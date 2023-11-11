import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.scss'],
})
export class PaginaPerfilComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  perfilEjemplo = {
    fotoPerfil: "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/355269832_6061859987275836_3978109988933382981_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JLEPiew8O9MAX9RwLV1&_nc_ht=scontent.fntr8-1.fna&oh=00_AfDrSVrmSIizU45HzoU9PqZJzMBhDJr2DuUfet3eUcHHog&oe=654F767A",
    nombrePerfil: "Cesar",
    seguidoresPerfil: "12",
    publicacionesPerfil: "12",
    seguidosPerfil: "12",
    descripcionPerfil: "Hola",
    fotosDelPerfil:[]=[
                        "https://th.bing.com/th/id/OIP.PNLxg3EbdNVa-lUez5Sj3wHaLH?pid=ImgDet&rs=1",
                        "https://th.bing.com/th/id/OIP.PNLxg3EbdNVa-lUez5Sj3wHaLH?pid=ImgDet&rs=1",
                        "https://tritonvoice.co/wp-content/uploads/2019/03/asdddd.png"
                      ],
  };

}
