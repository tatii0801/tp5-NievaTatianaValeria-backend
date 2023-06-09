import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { EspectadorFormComponent } from './components/espectador-form/espectador-form.component';
import { EspectadorComponent } from './components/espectador/espectador.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

const routes: Routes = [
  { path: 'producto-form/:id', component: ProductoFormComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'transaccion', component: TransaccionComponent },
  { path: 'transaccion-form/:id', component: TransaccionFormComponent },
  { path: 'espectador-form/:id', component: EspectadorFormComponent },
  { path: 'espectador', component: EspectadorComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'ticket-form/:id', component: TicketFormComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
 
  { path: '**', pathMatch:'full',redirectTo:'producto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
