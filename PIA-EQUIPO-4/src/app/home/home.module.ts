import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from '../login/login.component';
import { PaginaInicioComponent } from '../pagina-inicio/pagina-inicio.component';
import { PaginaPerfilComponent } from '../pagina-perfil/pagina-perfil.component';
import { RegistroComponent } from '../registro/registro.component';
import { Firestore } from '@angular/fire/firestore';
import { FotoDetalleComponent } from 'app/foto-detalle/foto-detalle.component';
import { PostComponent } from 'app/post/post.component';
import { EditarPerfilModalComponent } from 'app/pagina-perfil/components/editar-perfil-modal/editar-perfil-modal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LoginComponent, PaginaInicioComponent, PaginaPerfilComponent,RegistroComponent,FotoDetalleComponent,PostComponent, EditarPerfilModalComponent]  
})
export class HomePageModule {}
