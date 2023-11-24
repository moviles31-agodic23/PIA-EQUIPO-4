import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foto } from '../foto.model';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.scss'],
})
export class PaginaPerfilComponent  implements OnInit {

  constructor(private router: Router, private foto:FotoService) { }

  ngOnInit() {}

  perfilEjemplo = {
    fotoPerfil: "https://media.gq.com.mx/photos/5be9d9f488903bbeb43378ef/master/w_1600%2Cc_limit/selfies_6072.jpg",
    nombrePerfil: "Cesar",
    seguidoresPerfil: "12",
    publicacionesPerfil: "12",
    seguidosPerfil: "12",
    descripcionPerfil: "Hola",
    fotosDelPerfil:[]=[
      "https://scontent.fntr11-1.fna.fbcdn.net/v/t39.30808-6/405518633_7039185716162202_155166070555931209_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5SJOeMvRh24AX9iUU_c&_nc_ht=scontent.fntr11-1.fna&oh=00_AfDmzhbY2pM_GCC-PjO68gP39VIzmzXFFIp12mf6tKUY2w&oe=656500C6",
                        "https://th.bing.com/th/id/OIP.PNLxg3EbdNVa-lUez5Sj3wHaLH?pid=ImgDet&rs=1",
                        "https://th.bing.com/th/id/OIP.PNLxg3EbdNVa-lUez5Sj3wHaLH?pid=ImgDet&rs=1",
                        "https://tritonvoice.co/wp-content/uploads/2019/03/asdddd.png",
                        "https://i.ytimg.com/vi/vjef9yDg5KQ/maxresdefault.jpg"
                        
                      ],
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

