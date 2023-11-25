import { Injectable,NgZone, inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import { UserCredential, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirestoreService } from './firestore.service';
import { Usuario } from 'app/interfaces/usuario.interface';
import { UtilsService } from './utils.service';




@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any;

  firestoreService = inject(FirestoreService);
  utilsService = inject(UtilsService)

  constructor(
    private firebaseAuthenticationService:AngularFireAuth, 
    private router:Router, 
    private ngZone: NgZone,

  ) {
    this.firebaseAuthenticationService.authState.subscribe((user)=>{
      if(user){
        this.userData=user;
        localStorage.setItem('user',JSON.stringify(this.userData));
      }else{
        localStorage.setItem('user','null');
      }
    })
   }
  
   loginWithEmailAndPassword(user: Usuario){
    return this.firebaseAuthenticationService.signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential)=>{
        console.log(userCredential);
        this.userData=userCredential.user;
        this.getUserInfo(this.userData.uid);
        this.observeUserState()
     })
     .catch((error)=>{
       alert(error.message);
     });
   }

  
  signUpWithEmailAndPassword(user: Usuario){
   return this.firebaseAuthenticationService.createUserWithEmailAndPassword(user.email, user.password)
   .then((userCredential)=>{

    console.log(userCredential);

    this.userData=userCredential.user
    user.uid = userCredential.user.uid;
    this.observeUserState()
    this.setUserInfo(userCredential.user.uid, user)
   })
   .catch((error)=>{
    alert(error.message);
  })
  }

  logOut(){
    getAuth().signOut();
    this.utilsService.removeFromLocalStorage('user');
    this.router.navigate(['login']);
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

  async setUserInfo(uid: string, userData: Usuario){

    let path = `users/${uid}`;

    delete userData.password;
    this.firestoreService.setDocument(path, userData);
    this.utilsService.saveInLocalStorage('user', userData);

  }

  async getUserInfo(uid: string){

    let path = `users/${uid}`;
    this.firestoreService.getDocument(path).then((user: Usuario) => {
      this.utilsService.saveInLocalStorage('user', user);
      console.log(`Bienvenido ${user.nombre}`)
    })
    
  }

  

}


