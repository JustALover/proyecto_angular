import { Component } from '@angular/core';
import { Tarea } from '../models/tarea'; //Cada .. es ir hacia atrás en la carpeta actual 
import { Universidad } from '../models/universidad';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tareas-nuevas',
  imports: [FormsModule],
  templateUrl: './tareas-nuevas.html',
  styleUrl: './tareas-nuevas.css'
})
export class TareasNuevas {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  universidad: Universidad[] = [];
  contadorId: number = 1;
  //Tareas
 
  dibujar: Tarea = {
    id: 1,
    descripcion: "Dibujar",
    completada: false,
    fechaCreacion: new Date('2025-08-10'),
    nota: "10",
    fechaVencimiento: new Date('2025-12-31'),
  };

  agregarTarea(nombreTarea: string) {
    // crear una nueva tarea solo si el campo esta vacio
    if (nombreTarea !== '') {
      //  Imprimir verdadero
      console.log("Verdadero");
      const tarea: Tarea = {
        id: this.contadorId,
        // descripcion: "Mi parte favorita de la tarea es cuando dice es hora de tarearear y tarearea",
        descripcion: nombreTarea,
        completada: false,
        fechaCreacion: new Date('2025-05-06'),
        nota: "10",
        fechaVencimiento: new Date('2025-10-31'),
      };
      this.tareas.push(tarea) //Agregar la tarea usando this para acceder a tareas y pushear tarea
      //this.tareas.push(this.dibujar)
      this.nuevaTarea = '' //Limpiar la terminal al escribir
      this.contadorId = this.contadorId + 1;
    }
  }
}

