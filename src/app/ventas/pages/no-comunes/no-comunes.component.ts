import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Luis';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['Luis', 'Juan', 'Fabiola', 'Annette'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  persona = {
    nombre: 'Luis',
    edad: 24,
    ciudad: 'Pucallpa'
  };

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Iroman',
      vuela: true
    },
    {
      nombre: 'Hulk',
      vuela: false
    }
  ];

  miObservable = interval(5000);
  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){
    this.nombre = 'Fabiola';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.shift();
  }



}
