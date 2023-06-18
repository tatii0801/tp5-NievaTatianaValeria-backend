import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  ticket!: Ticket;
  accion: string = "new" // accion tendra los valores de new o update
  espectadoress!: Array<Espectador>;
  precioCobrado!: number;
  opcionSeleccionada!: string;

  constructor(private ticketService: TicketService,
    private espectadorService: EspectadorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.ticket = new Ticket();
    this.espectadoress = new Array<Espectador>();
    const fecha = new Date();
    this.ticket.fechaCompra = fecha.toLocaleDateString();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.cargarEspectadoress();
      } else {
        this.accion = "update";
        this.cargarEspectadoress();
        this.cargarTicket(params['id']);
      }
    });
  }
  cargarTicket(id: string) {
    this.ticketService.getTicket(id).subscribe(
      result => {
        Object.assign(this.ticket, result);
        //añadir los valores en una lista despleglable
        this.ticket.espectador = this.espectadoress.find(item => (item._id == this.ticket.espectador._id))!;
        console.log(result);
      },
      error => {

      }
    )
  }

  cargarEspectadoress() {
    this.espectadorService.getEspectadores().subscribe(
      result => {
        let unEspectador = new Espectador();
        result.forEach((element: any) => {
          Object.assign(unEspectador, element)
          this.espectadoress.push(unEspectador)
          unEspectador = new Espectador();
        });
        console.log(result);
      },
      error => {

      }
    )
  }

  registrar() {
    this.ticketService.createTicket(this.ticket).subscribe(
      (result: any) => {
        if (result.status == 1) {
          console.log(result.msg);
          this.router.navigate(["ticket"]);
        }
      },
      error => {
        alert(error.msg);
      }
    )
  }

  actualizarTicket() {
    this.ticketService.editTicket(this.ticket).subscribe(
      (result: any) => {
        if (result.status == 1) {
          console.log(result.msg);
          this.router.navigate(["ticket"]);
        }
      },
      error => {
        alert(error.msg);
      }
    )
  }

  volverLista() {
    this.router.navigate(["ticket"]);
  }

  calcularDescuanto() {
    this.precioCobrado = this.ticket.precioTicket
    if (this.ticket.categoriaEspectador == 'l')
      this.precioCobrado = this.ticket.precioTicket - (this.ticket.precioTicket * 0.20);
    return true;

  }
}
