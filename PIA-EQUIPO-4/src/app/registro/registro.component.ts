import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'app/interfaces/usuario.interface';
import { AuthService } from 'app/services/auth.service';
import { FirestoreService } from 'app/services/firestore.service';
import { UtilsService } from 'app/services/utils.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  utilsService = inject(UtilsService)
  firestoreService = inject(FirestoreService)
  authService = inject(AuthService)

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      uid: [''],
      nombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nombreUsuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.nullValidator]],
      confirmacionpassword: ['', Validators.required],
    },{
      Validators:this.passIguales('pass','confirmacionpass')
    });  
  }

  get nombreInvalido(){
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
  }

  get primerApellidoInvalido(){
    return this.form.get('primerApellido')?.invalid && this.form.get('primerApellido')?.touched;
  }
  get segundoApellidoInvalido(){
    return this.form.get('segundoApellido')?.invalid && this.form.get('segundoApellido')?.touched;
  }
  get correoInvalido(){
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }
  get usuarioInvalido(){
    return this.form.get('nombreUsuario')?.invalid && this.form.get('nombreUsuario')?.touched;
  }
  get passInvalido(){
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }
  get confirmacionpassInvalido(){
    return this.form.get('confirmacionpassword')?.invalid && this.form.get('confirmacionpassword')?.touched;
  }

  ngOnInit() {}

  registro() {

    console.log(this.form);

    if(this.form.invalid || this.passNoValido()){
      return Object.values(this.form.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }
    else{
      delete this.form.value.confirmacionpassword;

      this.authService.signUpWithEmailAndPassword(this.form.value as Usuario);
    }

  }
  
  passNoValido(){
    const pass = this.form.get('password')?.value;
    const confirmacionpass = this.form.get('confirmacionpassword')?.value;
   
    if(pass !== confirmacionpass){
      return true;
    }else{
      return false; 
    }
  }


  passIguales(password:string, confirmacionpassword:string){
   
    return (formGroup: FormGroup) => {

      const passControl = formGroup.get(password);
      const confirmacionpassControl = formGroup.get(confirmacionpassword);
        
      if(passControl?.value === confirmacionpassControl?.value){
        confirmacionpassControl?.setErrors(null);
      }else{
        confirmacionpassControl?.setErrors({invalido: true})
      }

    }  
  }


  

}
