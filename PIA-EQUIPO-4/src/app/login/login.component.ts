import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
   
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombreUsuario: ['', Validators.required],
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
        this.router.navigate(['inicio'])
    }
  }

  get usuarioInvalido(){
    return this.form.get('nombreUsuario')?.invalid && this.form.get('nombreUsuario')?.touched;
  }
  get passInvalido(){
    return this.form.get('pass')?.invalid && this.form.get('pass')?.touched;
  }


}
