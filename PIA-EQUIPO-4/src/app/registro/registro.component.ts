import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nombreUsuario: ['', Validators.required],
      pass: ['', [Validators.required, Validators.nullValidator]],
      confirmacionpass: ['', Validators.required],
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
    return this.form.get('correo')?.invalid && this.form.get('correo')?.touched;
  }
  get usuarioInvalido(){
    return this.form.get('nombreUsuario')?.invalid && this.form.get('nombreUsuario')?.touched;
  }
  get passInvalido(){
    return this.form.get('pass')?.invalid && this.form.get('pass')?.touched;
  }
  get confirmacionpassInvalido(){
    return this.form.get('confirmacionpass')?.invalid && this.form.get('confirmacionpass')?.touched;
  }

  ngOnInit() {}

  registro() {
   console.log(this.form);
  
   this.passNoValido();
  

  if(this.form.invalid){
    return Object.values(this.form.controls).forEach(control=>{
      control.markAllAsTouched();
    })
  }

  }
  
  passNoValido(){
    const pass = this.form.get('pass')?.value;
    const confirmacionpass = this.form.get('confirmacionpass')?.value;
   
    if(pass !== confirmacionpass){
      return true;
    }else{
      return false; 
    }
  }


  passIguales(pass:string, confirmacionpass:string){
   
  return (formGroup: FormGroup) => {

  const passControl = formGroup.get(pass);
  const confirmacionpassControl = formGroup.get(confirmacionpass);
    
  if(passControl?.value == confirmacionpassControl?.value){
    confirmacionpassControl?.setErrors(null);
  }else{
    confirmacionpassControl?.setErrors({invalido: true})
  }

  }  
  }
}
