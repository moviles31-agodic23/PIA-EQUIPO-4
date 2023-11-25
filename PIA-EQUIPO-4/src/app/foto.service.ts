import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from './interfaces/foto.interface';
@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }

  public fotos:Foto[]=[];
  

  public async addNewToGallery() {    
    // Toma Foto    
    const fotoCamara = await Camera.getPhoto({      
    resultType: CameraResultType.Uri,      
    source: CameraSource.Camera,      
    quality: 100    
    });

    this.fotos.unshift({
      filepath: '',
      webViewPath: fotoCamara.webPath
    });

  }

  

}
