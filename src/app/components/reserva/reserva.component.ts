import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';

import { Reserva } from 'src/app/modelos/reserva';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { Cliente } from '../../modelos/cliente';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  public codigoHabitacion:number;
  public fechaIngreso:string;
  public fechaSalida:string;
  public cliente:Cliente;

  public codigoReserva:string = '123456'
  constructor(private _route:ActivatedRoute,
              private _clienteService:ClienteService,

              private _router:Router) {
    this.cliente = {
      nombre:'',
      apellido:'',
      email:'',
      celular:'',
      cedula:''
    };

  }

  ngOnInit(): void {
    this.codigoHabitacion = Number(this._route.snapshot.paramMap.get('codigoHabitacion'));
    this.fechaIngreso = this._route.snapshot.paramMap.get('fechaIngreso');
    this.fechaSalida = this._route.snapshot.paramMap.get('fechaSalida');
  }

  reservar(formReserva, reservaModal){
    //this._router.navigate(['reservaHabitacion',this.codigoHabitacion, this.fechaIngreso, this.fechaSalida, this.cliente.cedula, this.cliente.nombre, this.cliente.apellido, this.cliente.email]);
// **********************************************
  this._clienteService.registrarCliente(this.cliente).subscribe(
     response => {
       this._router.navigate(['reservaHabitacion',this.codigoHabitacion, this.fechaIngreso, this.fechaSalida, response.cedula, response.nombre, response.apellido, response.email]);
       this.fechaIngreso = '';
       this.fechaSalida = '';
       formReserva.reset();
     }
   );
//**********************************
  }
}
