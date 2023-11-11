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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LoginComponent, PaginaInicioComponent, PaginaPerfilComponent]
})
export class HomePageModule {}
