import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
   
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombreUsuario: ['', Validators.required],
      pass: ['', [Validators.required]],
    
    });
  }

  get usuarioInvalido(){
    return this.form.get('nombreUsuario')?.invalid && this.form.get('nombreUsuario')?.touched;
  }
  get passInvalido(){
    return this.form.get('pass')?.invalid && this.form.get('pass')?.touched;
  }

  ngOnInit() {}

  login(){
   
    console.log(this.form);
    
  if(this.form.invalid){
    return Object.values(this.form.controls).forEach(control=>{
      control.markAllAsTouched();
    })
  }
  }


}
