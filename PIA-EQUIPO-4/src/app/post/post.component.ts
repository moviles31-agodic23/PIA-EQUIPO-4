import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FotoService } from 'app/foto.service';
import { Foto } from 'app/foto.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  implements OnInit {

  constructor(private router: Router,private foto:FotoService) { }

  ngOnInit() {}

  fotos:Foto[]= this.foto.fotos;
  irAInicio(){
    this.router.navigate(['/inicio']);
    this.foto.fotos = [];    
  }
  
  irAPerfil(){
    this.router.navigate(['/perfil']);
    this.foto.fotos = [];
  }
  irACamara(){
    this.router.navigate(['/post'])
    this.foto.fotos = [];
  }




  tomarFoto(){
    this.foto.addNewToGallery()
  }
}
