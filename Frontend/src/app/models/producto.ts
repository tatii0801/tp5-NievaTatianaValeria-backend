export class Producto {
    _id!: string;
    nombre!: string;
    descripcion!: string;
    imagen!: String; //url de una imagen para mostrar
    precio!: number;
    stock!: number;
    destacado!: Boolean; // solo algunos productos son destacadosF
}
