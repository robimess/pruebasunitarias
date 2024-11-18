import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private readonly peliculasService:PeliculasService
  ) { }

  ngOnInit(): void {
    this.peliculasService.obtenerDramas().subscribe({
      next:()=>{
        console.log('Peliculas Obtenidas')
      }
    })
  }
  title = 'HomePage'
  
  sumar(a: number, b: number): number {
    if (a < 0 || b < 0) {
      throw new Error('Solo numeros positivos')
    }
    return a + b
  }
  restar(a: number, b: number): number {
    return a - b
  }
  multiplicar(a: number, b: number): number {
    return a * b
  }
  dividir(a: number, b: number): number {
    if (b == 0) {
      throw new Error('FATAL ERROR: division por cero')
    }
    return a / b
  }
}
