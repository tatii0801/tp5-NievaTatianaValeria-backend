import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductoFormComponent,
    ProductoComponent,
    TransaccionComponent,
    TransaccionFormComponent,
    EspectadorFormComponent,
    EspectadorComponent,
    TicketComponent,
    TicketFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
