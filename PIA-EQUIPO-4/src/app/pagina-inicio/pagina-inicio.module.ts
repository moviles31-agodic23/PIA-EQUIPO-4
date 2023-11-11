import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PaginaInicioComponent } from './pagina-inicio.component';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: PaginaInicioComponent }])],
  declarations: [PaginaInicioComponent],
  exports: [PaginaInicioComponent],
})
export class PaginaInicioModule {}