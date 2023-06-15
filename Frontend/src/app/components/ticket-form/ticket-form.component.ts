import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  ticket!: Ticket;
  accion: string = "new" // accion tendra los valores de new o update

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.ticket = new Ticket();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
      } else {
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });
  }
  cargarTicket(id: string) {
    
  }

  registrar() {

  }

  actualizarTicket() {

  }

  volverLista() {
    this.router.navigate(["ticket"]);
  }
}
