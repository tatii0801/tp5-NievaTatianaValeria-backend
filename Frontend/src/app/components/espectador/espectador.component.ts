import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { EspectadorService } from 'src/app/services/espectador.service';

@Component({
  selector: 'app-espectador',
  templateUrl: './espectador.component.html',
  styleUrls: ['./espectador.component.css']
})
export class EspectadorComponent implements OnInit {

  espectador!: Espectador;
  espectadoress!: Array<Espectador>;

  constructor(private espectadorService: EspectadorService,
            private router: Router) {

              this.espectador = new Espectador();
              this.espectadoress = new Array<Espectador>();
              this.cargarrEspectadores();
  }

  ngOnInit(): void {
  }

  agregarEspectador() {
    this.router.navigate(["espectador-form", 0]);
  }

  cargarrEspectadores() {
    this.espectadorService.getEspectadores().subscribe(
      result => {
        result.forEach((element: any) => {
          let unEspectador: Espectador = new Espectador();
          Object.assign(unEspectador, element)
          this.espectadoress.push(unEspectador)
          unEspectador = new Espectador();
        });
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }
}
