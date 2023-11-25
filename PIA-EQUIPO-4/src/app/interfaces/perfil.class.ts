import Post from "./post.interface";

export class Perfil{
    id: string;
    usuarioId: string;
    fotoPerfil: string;
    nombreUsuario: string;
    descripcion: string;
    seguidores: number;
    seguidos: number;
    publicaciones: number;
    
    fotos: Post[];

}