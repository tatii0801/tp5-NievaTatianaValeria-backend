export class Transaccion {
    _id!: string;
    monedaOrigen!: string;
    cantidadOrigen!: Number;
    monedaDestino!: string;
    cantidadDestino!:Number;
    emailCliente!: string;
    tasaConversion!: Number;    // Dato que ingresa el cliente, y se ha utilizado para calcular cantidadDestino
}
