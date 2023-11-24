import { Injectable,NgZone } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(private firebaseAuthenticationService:AngularFireAuth, private router:Router, private ngZone: NgZone) {
    this.firebaseAuthenticationService.authState.subscribe((user)=>{
      if(user){
        this.userData=user;
        localStorage.setItem('user',JSON.stringify(this.userData));
      }else{
        localStorage.setItem('user','null');
      }
    })
   }
  
   loginWithEmailAndPassword(user:string,pass:string){
    return this.firebaseAuthenticationService.signInWithEmailAndPassword(user,pass)
    .then((userCredential)=>{
      this.userData=userCredential.user
      this.observeUserState()
    })
    .catch((error)=>{
      alert(error.message);
    })
   }

  
  signUpWithEmailAndPassword(user:string, pass:string){
   return this.firebaseAuthenticationService.createUserWithEmailAndPassword(user,pass)
   .then((userCredential)=>{
    this.userData=userCredential.user
    this.observeUserState()
   })
   .catch((error)=>{
    alert(error.message);
  })
  }
  
  observeUserState(){
    this.firebaseAuthenticationService.authState.subscribe((userState)=>{
      userState && this.ngZone.run(()=>this.router.navigate(['inicio']))
    })
   }
  
   get isLoggedIn():boolean{
    const user =JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

}


