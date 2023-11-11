import { Component, OnInit } from '@angular/core';
import { nuevoUsuario,Usuarios } from '../usuario.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: nuevoUsuario = { usuario: '', password: '',confirmacionpassword:''};
  usuarios: Usuarios = { usuarios: [] }; // Inicializa usuarios como un objeto con una propiedad usuarios que es un array


  constructor(private router: Router) {}

  ngOnInit() {}

  agregarUsuario() {
    this.usuarios.usuarios.push(this.nuevoUsuario);
    this.nuevoUsuario = { usuario: '', password: '', confirmacionpassword: '' };
  }

}

