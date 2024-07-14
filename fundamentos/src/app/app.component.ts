import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// Formularios driven-Templates
import { FormsModule } from '@angular/forms';
// Grupos y controles para formularios reactivos
// Formularios reactivos
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
// importamos componente padre en APP para poder visualizarlo
import { ComponentePadreComponent } from './component/padre-component/padre-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, ComponentePadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // 1. declaración e inicialización de sus variables
  // = -> asignación
  // == o === -> comparación
  nombreFramework: string = 'Angular';
  horasBootcamp: number = 300;
  especialista: string = 'Luisa Castaño';
  contenidoBootcamp = {
    tecnologia1: 'HTML',
    tecnologia2: 'CSS',
    tecnologia3: 'JS',
    tecnologia4: 'ANGULAR',
    tecnologia5: 'NODE.JS',
  }

  objetoProducto = {
    nombre: 'galletas',
    cantidad: 30,
    vendido: true
  }

  colorFondo: string = 'colorPink';
  // Forma correcta de manejar las variable de tipo booleano
  isLogged : boolean = true;
  isDelete : boolean = true;
  isShowed : boolean = true;

  datosDB: string[] = ['se reciben todos los datos de la base de datos']
  productos : string[] = ['carros', 'bicicletas', 'avion']
  // ---------------------------------------------
  // FORMULARIOS ---------------------------------

  colorFavorito: string = '';
  nombre: string = '';

  
  // -------------------------------

  // 2. Funciones o métodos

  saludo(){
    console.log('Holaaaaaaaaa, soy un botón al que le diste click');
  }

  manejarMouseOver(){
    console.log('evento mouse encima de la cajita');
    this.colorFondo = 'colorRojo';
  }

  manejarMouseOut(){
    console.log('evento mouse fuera de la cajita');
    this.colorFondo = 'colorVerde'
  }

  manejarClick(){
    console.log('evento click');
    this.colorFondo = 'colorPink'
  }

  // ---------------------------------------------------
  // FORMULARIOS ---------------------------------------

  manejarEnvio(){
    alert('los datos del formulario son: ' + this.colorFavorito + '-' + this.nombre);
  }

  // formularios reactivos
  // 1. crear mi grupo -> depende de lo que haga el formulario
  // 2. crear los controles -> de los inputs que usted quiera almacenar

  login = new FormGroup({
    correo : new FormControl(''),
    contrasenia: new FormControl('')
  })

  manejarSubmit(){
    console.log('Estos son los datos de mi formulario: ', this.login.value);

    console.log('El correo electrónico es: ', this.login.get('correo')?.value)
  }

  //3. Exportaciones - ciclo de vida

}