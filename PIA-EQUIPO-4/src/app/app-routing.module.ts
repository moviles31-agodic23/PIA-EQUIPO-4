import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaginaPerfilComponent } from './pagina-perfil/pagina-perfil.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { FotoDetalleComponent } from './foto-detalle/foto-detalle.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    component: PaginaPerfilComponent
  },
  {
    path: 'inicio',
    component: PaginaInicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'detalle',
    component: FotoDetalleComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
