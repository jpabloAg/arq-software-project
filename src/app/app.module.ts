import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { HospedajeComponent } from './components/hospedaje/hospedaje.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { ConsultaReservaComponent } from './components/consulta-reserva/consulta-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { PasarelaComponent } from './components/pasarela/pasarela.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarjetaComponent,
    HospedajeComponent,
    HabitacionComponent,
    ReservaComponent,
    ConsultaComponent,
    ConsultaClienteComponent,
    ConsultaReservaComponent,
    CrearReservaComponent,
    PasarelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
