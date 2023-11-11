import { Component, OnInit } from '@angular/core';
import { nuevoUsuario } from '../usuario.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: nuevoUsuario = { usuario: '', password: '',confirmacionpassword:''};
  usuarios:any =[]; 

  constructor(private router: Router) {}

  ngOnInit() {}

  agregarUsuario() {
    this.usuarios.push(this.nuevoUsuario);
    this.nuevoUsuario = { usuario: '', password: '', confirmacionpassword: '' };
  }

}

