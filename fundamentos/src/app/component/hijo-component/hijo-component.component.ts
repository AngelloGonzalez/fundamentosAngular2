// Importar las directivas que controlan la entrada y salida de información
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hijo-component.component.html',
  styleUrl: './hijo-component.component.css'
})
export class ComponenteHijoComponent {

  // Con @Input en el hijo, indicamos que esta variable va a estar recibiendo información de parte de su papá
 @Input() textoRecibir : string = '';

//  Emitiremos información
// 1. Es crear nuestro emisor de eventos
@Output() eventoEnviarNombre : EventEmitter<string> = new EventEmitter<string>();

// 2. Es crearnos una función que use eventoEnviarNombre para emitir lo que le mnadaremos al padre

enviarNombre(){
  this.eventoEnviarNombre.emit('luisa');
}
 
}


// EJERCICIO DE PRÁCTICA

/*
    Desde el componente hijo, mándele al padre un objeto de datos.

    El objeto debe tener, nombre, categoría e imagen

    Y en el componente padre, debe escuchar el objeto que se manda desde el hijo, y mostrarlo como una tarjetica

*/