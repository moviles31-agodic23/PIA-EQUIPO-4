import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule, provideFirebaseApp(() => initializeApp({"projectId":"pia-equipo4-instagram","appId":"1:139104442538:web:cadeb33755405456e298d3","storageBucket":"pia-equipo4-instagram.appspot.com","apiKey":"AIzaSyAY7sORDE2A57mWSjcortp1FqE9DknLNEE","authDomain":"pia-equipo4-instagram.firebaseapp.com","messagingSenderId":"139104442538"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"pia-equipo4-instagram","appId":"1:139104442538:web:cadeb33755405456e298d3","storageBucket":"pia-equipo4-instagram.appspot.com","locationId":"us-central","apiKey":"AIzaSyAY7sORDE2A57mWSjcortp1FqE9DknLNEE","authDomain":"pia-equipo4-instagram.firebaseapp.com","messagingSenderId":"139104442538"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
