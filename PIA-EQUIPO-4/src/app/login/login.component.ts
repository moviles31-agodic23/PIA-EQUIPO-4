import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
   
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.fb.group({
      correo: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass: ['', [Validators.required]],
    
    });
  }
  ngOnInit() {}

  login(){
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }else{
      const { correo, pass } = this.form.value;
      this.authService.loginWithEmailAndPassword(correo, pass);
    }
  }

  get usuarioInvalido(){
    return this.form.get('correo')?.invalid && this.form.get('correo')?.touched;
  }
  get passInvalido(){
    return this.form.get('pass')?.invalid && this.form.get('pass')?.touched;
  }


}
