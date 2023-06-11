import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase : string = 'http://localhost:3000/api/';
  
  constructor(private _httpCliente: HttpClient) { }

  createTransaccion(transaccion: Transaccion): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      //params: new HttpParams()
    }
    //inicializamos el body tipo JSON
    let body = JSON.stringify(transaccion)
    return this._httpCliente.post(this.urlBase + "transaccion", body, httpOption);
  }

  getTransacciones(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._httpCliente.get(this.urlBase + "transaccion", httpOption);
  }
}
