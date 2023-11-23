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
    fotoPerfil: "https://media.gq.com.mx/photos/5be9d9f488903bbeb43378ef/master/w_1600%2Cc_limit/selfies_6072.jpg",
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
