import { Espectador } from "./espectador";

export class Ticket {
    precioTicket!: Number;
    categoriaEspectador!: string;
    fechaCompra!: string; // gestinar fecha como string
    email!: string;
    espectador!: Espectador;
    //categoría del espectador puede ser: e = Extranjero, l = local.
}
