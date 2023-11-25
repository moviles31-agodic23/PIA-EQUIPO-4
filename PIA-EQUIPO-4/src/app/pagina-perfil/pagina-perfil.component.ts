import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { FotoService } from '../foto.service';
import { FirestoreService } from 'app/services/firestore.service';
import { Usuario } from 'app/interfaces/usuario.interface';
import { Perfil } from 'app/interfaces/perfil.class';
import { UtilsService } from 'app/services/utils.service';
import { EditarPerfilModalComponent } from './components/editar-perfil-modal/editar-perfil-modal.component';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.scss'],
})
export class PaginaPerfilComponent  implements OnInit {

  firestoreService = inject(FirestoreService);
  utilsService = inject(UtilsService)
  infoUsuario: Perfil;

  constructor(private router: Router) { }

  ngOnInit() {
    this.obtenerInformacionUsuario();
  }

  user(): Usuario{
    return this.utilsService.getFromLocalStorage('user');
  }

  irAInicio(){
    this.router.navigate(['/inicio'])
  }
  irAPerfil(){
    this.router.navigate(['/perfil']);
  }
  irACamara(){
    this.router.navigate(['/post'])
  }

  obtenerInformacionUsuario(){
    let path = `users/${this.user().uid}/profile`
    let sub = this.firestoreService.getCollectionData(path).subscribe({
      next: (res: any) => {
        this.infoUsuario = res[0];
        this.obtenerFotosUsuario(this.infoUsuario.id)
        sub.unsubscribe();
      }
    })
  }

  obtenerFotosUsuario(perfilId: string){
    let path = `users/${this.user().uid}/profile/${perfilId}/pictures`
    let sub = this.firestoreService.getCollectionData(path).subscribe({
      next: (res: any) => {
        this.infoUsuario.fotos = res;
        sub.unsubscribe();
      }
    })
  }

  editarPerfil(){
    this.router.navigate(['/inicio']);
    this.utilsService.presentModal({
      component: EditarPerfilModalComponent,

    });
  }
}

