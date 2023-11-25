import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'app/interfaces/usuario.interface';
import { AuthService } from 'app/services/auth.service';
import { FirestoreService } from 'app/services/firestore.service';
import { UtilsService } from 'app/services/utils.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  
  form: FormGroup;

  utilsService = inject(UtilsService)
  firestoreService = inject(FirestoreService)

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.fb.group({
      uid: [''],
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    
    });
  }
  ngOnInit() {}

  login(){
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }else{
      this.authService.loginWithEmailAndPassword(this.form.value as Usuario);
    }
  }

  get usuarioInvalido(){
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }
  get passInvalido(){
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }

}
