import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos!: Array<Producto>;

  constructor(private productoService: ProductoService,
            private router: Router) {
              this.productos = new Array<Producto>();
              this.cargarProductos();
  }

  ngOnInit(): void {
  }

  agregarProducto() {
    this.router.navigate(["producto-form", 0]);
  }

  cargarProductos() {
    this.productoService.getProductoDestacados().subscribe(
      result => {
        result.forEach((element: any) => {
          let unProducto: Producto = new Producto();
          Object.assign(unProducto, element)
          this.productos.push(unProducto)
          unProducto = new Producto();
        });
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }
}
