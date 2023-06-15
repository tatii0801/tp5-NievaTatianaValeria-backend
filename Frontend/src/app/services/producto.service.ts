import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase: string = 'http://localhost:3000/api/';

  constructor(private _httpCliente: HttpClient) { }

  createProducto(producto: Producto): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      //params: new HttpParams()
    }
    //inicializamos el body tipo JSON
    let body = JSON.stringify(producto)
    return this._httpCliente.post(this.urlBase + "producto", body, httpOption);
  }

  getProducto(id: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._httpCliente.get(this.urlBase + "producto/" + id, httpOption);
  }

  getProductos(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._httpCliente.get(this.urlBase + "producto", httpOption);
  }

  getProductoDestacados(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    };
    return this._httpCliente.get(this.urlBase + "producto/destacado", httpOptions);
  }
}
