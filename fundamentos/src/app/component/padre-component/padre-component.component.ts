import { Component } from '@angular/core';
import { ComponenteHijoComponent } from '../hijo-component/hijo-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-padre',
  standalone: true,
  imports: [ComponenteHijoComponent, CommonModule],
  templateUrl: './padre-component.component.html',
  styleUrl: './padre-component.component.css'
})
export class ComponentePadreComponent {
  textoEnviar: string = 'Hola soy tu padre';

  // 1. crearme la variable donde vamos a recibir la información
  nombreRecibido : string = '';
  arregloNombresRecibidos: string[] = [];

  // 2. Crearse un método para guardar los datos recibidos
// Esta función me recibe el parámetro enviado por el hijo
  recibirNombre(nombre : string){
    this.nombreRecibido = nombre;
    this.arregloNombresRecibidos.push(nombre);
  }
  
}