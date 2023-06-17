import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  //ticket!: Ticket;
  ticketss!: Array<Ticket>;
  filtrarCategoria!: string;

  constructor(private ticketService: TicketService,
    private router: Router) {
   // this.ticket = new Ticket();
    this.ticketss = new Array<Ticket>();
    this.cargarTickets();
  }

  ngOnInit(): void {
  }

  cargarTickets() {
    this.ticketService.getTickets().subscribe(
      result => {
        result.forEach((element: any) => {
          let unTicket: Ticket = new Ticket();
          Object.assign(unTicket, element)
          this.ticketss.push(unTicket)
          unTicket = new Ticket();
        });
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  modificarTicket(ticket: Ticket) {
    this.router.navigate(["ticket-form", ticket._id]);
  }

  eliminarTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket._id).subscribe(
      result => {
        if (result.status == "1") {
          //pasar a toast
          console.log(result.msg);
          this.router.navigate(['ticket']);
          this.cargarTickets();
        }
      },
      error => {
        if (error.status == "0") {
          alert(error.msg);
        }
      }

    )
  }

  agregarTicket() {
    this.router.navigate(['ticket-form', 0])
  }

  filtrarPorCategoria() {
    this.ticketService.getEspectadorXcategoria(this.filtrarCategoria).subscribe(
      (res: Array<Ticket>) => {
        this.ticketss = [];
        Object.assign(this.ticketss, res);
      });
  }

  limpiar() {
    this.filtrarCategoria = '';
    //recarga la pagina asi se actualiza el table
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['ticket']);
  }
}
