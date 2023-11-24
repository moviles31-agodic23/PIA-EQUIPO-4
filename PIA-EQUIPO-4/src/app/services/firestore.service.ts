import { Injectable, inject  } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Posts from 'app/interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }



  agregarPost(post : Posts){
    const publicacion = collection(this.firestore, 'posts')
    return addDoc(publicacion, post)
  }
}
