export class Transaccion {
    _id!: string;
    monedaOrigen!: string;
    cantidadOrigen!: number;
    monedaDestino!: string;
    cantidadDestino!:number;
    emailCliente!: string;
    tasaConversion!: number;    // Dato que ingresa el cliente, y se ha utilizado para calcular cantidadDestino
}
