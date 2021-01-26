import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { ConsultaReservaComponent } from './components/consulta-reserva/consulta-reserva.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { HomeComponent } from './components/home/home.component';
import { HospedajeComponent } from './components/hospedaje/hospedaje.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hospedajes', component: HospedajeComponent },
  { path: 'habitacion/:codigoTipoHabitacion', component: HabitacionComponent },
  { path:'reserva/:codigoHabitacion/:fechaIngreso/:fechaSalida', component: ReservaComponent },
  { path:'reservaHabitacion/:codigoHabitacion/:fechaIngreso/:fechaSalida/:cedula/:nombre/:apellido/:email', component: CrearReservaComponent },
  { path:'consulta', component: ConsultaComponent,
    children: [
      { path:'cliente', component:ConsultaClienteComponent },
      { path:'reserva', component: ConsultaReservaComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
