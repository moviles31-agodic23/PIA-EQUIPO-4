import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FotoService } from '../foto.service';
import { FirestoreService } from 'app/services/firestore.service';
import { map } from 'rxjs';
import { Perfil } from 'app/interfaces/perfil.class';
import Post from 'app/interfaces/post.interface';

interface postCompleto extends Post {
  like: boolean;
  showFullText: boolean;
}

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss'],
})
export class PaginaInicioComponent  implements OnInit {

  firestoreService = inject(FirestoreService);
  
  constructor(private router: Router) { }

  ngOnInit() {

    this.perfilesEjemplo.push(this.perfilEjemplo)
    this.perfilesEjemplo.push(this.perfilEjemplo2);
    this.obtenerFotosTodosUsuarios();
  }

  usuarios: string[] = [];
  perfilesUsuarios: any[] =[];
  fotosUsuarios2: any[] =[];
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

  irAInicio(){
    this.router.navigate(['/inicio'])
  }
  irAPerfil(){
    this.router.navigate(['/perfil']);
  }
  irACamara(){
    this.router.navigate(['/post'])
  }
  
  obtenerFotos(){
    let path = ''
  }

  obtenerFotosTodosUsuarios(){
    let path = `users`
    let sub = this.firestoreService.getCollectionData(path).pipe(map(actions => actions.map(a => a.id))).subscribe({
      next: (res) => {
        this.usuarios = res;
        let i = 0;
        this.usuarios.forEach(usuario => {

          this.obtenerInformacionUsuario(usuario, i);
          i++
        })

        sub.unsubscribe();
      }

      
    })
  }

  obtenerInformacionUsuario(userId: string, index: number){
    let path = `users/${userId}/profile`
    let sub = this.firestoreService.getCollectionData(path).subscribe({
      next: (res: any) => {
        this.perfilesUsuarios[index] = res[0];
        this.obtenerFotosUsuario(userId, res[0].id, index);
        sub.unsubscribe();
      }
    })
  }

  obtenerFotosUsuario(userId: string, perfilId: string, index: number){
    let path = `users/${userId}/profile/${perfilId}/pictures`
    let sub = this.firestoreService.getCollectionData(path).subscribe({
      next: (res: any) => {
        let fotos: any[] = [];
        res.forEach(post => {
          let foto: postCompleto = {
            id: post.id,
            source: post.source,
            date: post.date,
            descripcion: post.descripcion,
            showFullText: false,
            like: false
          }

          fotos.push(foto);
        })
        this.perfilesUsuarios[index].fotos = fotos;
        sub.unsubscribe();
      }
    })
  }

}
  

