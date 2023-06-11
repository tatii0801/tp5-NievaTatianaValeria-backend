export class Producto {
    _id!: string;
    nombre!: string;
    descripcion!: string;
    imagen!: String; //url de una imagen para mostrar
    precio!: Number;
    stock!: Number;
    destacado!: Boolean; // solo algunos productos son destacadosF
}
