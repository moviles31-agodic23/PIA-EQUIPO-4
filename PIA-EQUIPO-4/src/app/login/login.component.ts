import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  
  Usuario: Usuario = { usuario: '', password: ''};

  constructor(private router: Router) {}
  
  ngOnInit() {}
   
  Ingresar(){
    this.Usuario = { usuario: '', password: '' };
  }


}
