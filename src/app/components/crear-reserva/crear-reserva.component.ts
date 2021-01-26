import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { Reserva } from 'src/app/modelos/reserva';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  bandera:boolean;

  public codigoHabitacion:string;
  public fechaIngreso:string;
  public fechaSalida:string;
  public nombre:string;
  public apellido:String;
  public cedula:string;
  public email:String;
  public reserva:Reserva;
  public codigoReserva:string;
  constructor(private _router:Router, private _route:ActivatedRoute, private _reservaService:ReservaService) {
    this.reserva = {
      codigoReserva:'',
      numeroHabitacion:0,
      fechaIngreso:'',
      fechaSalida:'',
      cedulaCliente:''
    };
    this.bandera=false;
    this.codigoReserva = '';
  }

  ngOnInit(): void {
    this.codigoHabitacion = this._route.snapshot.paramMap.get('codigoHabitacion');
    this.fechaIngreso = this._route.snapshot.paramMap.get('fechaIngreso');
    this.fechaSalida = this._route.snapshot.paramMap.get('fechaSalida');
    this.nombre = this._route.snapshot.paramMap.get('nombre');
    this.apellido = this._route.snapshot.paramMap.get('apellido');
    this.cedula = this._route.snapshot.paramMap.get('cedula');
    this.email = this._route.snapshot.paramMap.get('email');
    console.log(this.codigoHabitacion, this.fechaIngreso, this.fechaIngreso, this.nombre, this.apellido, this.cedula, this.email)
  }

  public reservar(){
    this.reserva.numeroHabitacion = +this.codigoHabitacion;
    this.reserva.fechaIngreso = new Date(this.fechaIngreso);
    this.reserva.fechaSalida = new Date(this.fechaSalida);
    this.reserva.cedulaCliente = this.cedula;
    this.bandera = true;
    this.codigoReserva = '12345679';
    /*
    this._reservaService.registrarReservar(this.reserva).subscribe(
      response => {
        this.codigoReserva = response.codigoReserva;
        this.bandera = true;
      }
    );
    */
  }
}
