import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlBase: string = 'http://localhost:3000/api/';

  constructor(private _httpCliente: HttpClient) { }

  getTickets(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()//.append("estado",true)
    }
    return this._httpCliente.get(this.urlBase + "ticket", httpOption);
  }

  deleteTicket(id: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()//.append("estado",true)
    }
    return this._httpCliente.delete(this.urlBase + "ticket/" + id, httpOption);
  }

  getEspectadorXcategoria(categoria: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()//.append("estado",true)
    }
    return this._httpCliente.delete(this.urlBase + "ticket/filtro/" + categoria, httpOption);
  }

  createTicket(ticket: Ticket): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      //params: new HttpParams()
    }
    //inicializamos el body tipo JSON
    let body = JSON.stringify(ticket)
    return this._httpCliente.post(this.urlBase + "ticket", body, httpOption);
  }

  editTicket(ticket: Ticket): Observable<any> {
    const httpOptions = {

      headers: new HttpHeaders({

      }),
      params: new HttpParams(),
    };
    const body = {
      _id: ticket._id,
      precioTicket: ticket.precioTicket,
      categoriaEspectador: ticket.categoriaEspectador,
      fechaCompra: ticket.fechaCompra,
      email: ticket.email,
      espectador: ticket.espectador
    };
    return this._httpCliente.put(this.urlBase + "ticket" + ticket._id, body, httpOptions);
  }
}
