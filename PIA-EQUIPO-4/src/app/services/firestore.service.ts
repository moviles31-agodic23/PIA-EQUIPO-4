import { Injectable, inject  } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {getFirestore, setDoc, doc, getDoc, updateDoc, addDoc, collection, collectionData, query } from '@angular/fire/firestore'
import {AngularFireStorage} from '@angular/fire/compat/storage'
import {getStorage, uploadString, ref, getDownloadURL} from 'firebase/storage'


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  storage = inject(AngularFireStorage);
  //database = inject(AngularFirestore);

  constructor(private firestore: AngularFirestore) { }



  // agregarPost(post : Posts){
  //   const publicacion = collection(this.firestore, 'posts')
  //   return addDoc(publicacion, post)
  // }

  setDocument(path: string, data: any){
    const document = doc(getFirestore(), path);
    return setDoc(document, data);
  }

  addDocument(path: string, data: any){
    const ref = collection(getFirestore(), path);
    return addDoc(ref, data);
  }

  async getDocument(path: string){
    const document = doc(getFirestore(), path);
    return (await getDoc(document)).data();
  }

  updateDocument(path: string, data: any){
    const document = doc(getFirestore(), path);
    return updateDoc(document, data)
  }

  getCollectionData(path: string, collectionQuery?: any){
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, collectionQuery), {idField: 'id'});
  }

  uploadImage(){

  }

}
