import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayuscula: boolean = false;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {nombre: 'Superman', vuela: true, color: Color.azul},
    {nombre: 'Batman', vuela: false, color: Color.negro},
    {nombre: 'Robin', vuela: false, color: Color.verde},
    {nombre: 'Iroman', vuela: true, color: Color.rojo},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado() {
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
