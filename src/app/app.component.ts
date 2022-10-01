import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //Importacion para animaciones
  constructor(private primeNGConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }

}
