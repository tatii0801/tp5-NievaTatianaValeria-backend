import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { EspectadorService } from 'src/app/services/espectador.service';

@Component({
  selector: 'app-espectador-form',
  templateUrl: './espectador-form.component.html',
  styleUrls: ['./espectador-form.component.css']
})
export class EspectadorFormComponent implements OnInit {

  espectador!: Espectador;
  accion: string = "new" // accion tendra los valores de new o update


  constructor(private espectadorService: EspectadorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) {

    this.espectador = new Espectador()
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
      } else {
        this.accion = "update";
        this.cargarEspectador(params['id']);
      }
    });
  }

  cargarEspectador(id: string) {
    this.espectadorService.getEspectador(id).subscribe(
      result => {
        Object.assign(this.espectador, result);
        //añadir los valores en una lista despleglable
        //this.sector.responsable = this.agentes.find(item => (item._id == this.sector.responsable._id))!;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  guardarEspectador() {
    this.espectadorService.createEspectador(this.espectador).subscribe(
      (result: any) => {
        if (result.status == 1) {
          console.log(result.msg);
          this.router.navigate(["espectador"])
        }
      },
      error => {
        alert(error.msg);
      }
    )
  }

  registrar(){

  }

  volverLista(){
    this.router.navigate(['espectador']);
  }

}
