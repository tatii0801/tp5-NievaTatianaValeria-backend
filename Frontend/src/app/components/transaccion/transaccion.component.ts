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
  monedaOrigenFiltrar!: string;
  monedaDestinoFiltrar!: string;

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
  filtrarPorMoneda() {
    this.transaccionService.getTransaccionesFiltroMonedas(this.monedaOrigenFiltrar, this.monedaDestinoFiltrar).subscribe(
      (result: Array<Transaccion>) => {
        this.transaccionss = [];
        Object.assign(this.transaccionss, result);
        //console.log(result.msg);
      });
  }

  limpiar() {
    this.monedaOrigenFiltrar = '';
    this.monedaDestinoFiltrar = '';
    //recarga la pagina asi se actualiza el table
    this.router.navigate(['transaccion']);
    //this.cargarTickets();
    window.location.reload();
  }
}
