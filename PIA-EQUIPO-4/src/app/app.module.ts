import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'environments/environment';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app'
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideAuth, getAuth} from '@angular/fire/auth'
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
