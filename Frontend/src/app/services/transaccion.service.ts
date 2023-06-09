import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase: string = 'http://localhost:3000/api/';

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

  getTransaccion(id: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._httpCliente.get(this.urlBase + "transaccion/" + id, httpOption);
  }

  getTransacciones(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._httpCliente.get(this.urlBase + "transaccion", httpOption);
  }

  getTransaccionesFiltroMonedas(monedaOrigen: string, monedaDestino: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()//.append("estado",true)
        .set('monedaOrigen', monedaOrigen)
        .set('monedaDestino', monedaDestino),
    }
    return this._httpCliente.get(this.urlBase + "transaccion/filtro/" + monedaOrigen + '/' + monedaDestino, httpOption);
  }

  conversionDivisa(monedaOrigen: string, monedaDestino: string, cantidad: number): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        //api https://rapidapi.com/neutrinoapi/api/convert-1
        'content-type': 'application/x-www-form-urlencoded',
        //'X-RapidAPI-Key': 'a8677b95eamshec9fdb7406c63e4p1a7fbdjsn84146c1c757b',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      }),
    }
    const body = new HttpParams()
      .set('from-value', cantidad)
      .set('from-type', monedaOrigen)
      .set('to-type', monedaDestino);

    return this._httpCliente.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", body, httpOption);
  }
}
