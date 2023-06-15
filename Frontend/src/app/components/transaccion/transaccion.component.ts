import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  transaccionss!: Array<Transaccion>;
  transaccion!: Transaccion;
  filtra!:string;

  constructor(private transaccionService: TransaccionService,
    private router: Router) {

    this.transaccionss = new Array<Transaccion>();
    this.transaccion = new Transaccion();
    this.obtenerTransacciones();
  }

  ngOnInit(): void {
  }

  agregarTransaccion() {
    this.router.navigate(["transaccion-form", 0]);
  }

  obtenerTransacciones() {
    this.transaccionService.getTransacciones().subscribe(
      result => {
        result.forEach((element: any) => {
          let unTransaccion: Transaccion = new Transaccion();
          Object.assign(unTransaccion, element)
          this.transaccionss.push(unTransaccion)
          unTransaccion = new Transaccion();
        });
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

//modificar no funciona bien 
  filtrarXmonedas() {
    this.transaccionService.getTransaccionesFiltroMonedas(this.transaccion.monedaOrigen,this.transaccion.monedaDestino).subscribe(
      result => {
        this.filtra=result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )

  }
}
