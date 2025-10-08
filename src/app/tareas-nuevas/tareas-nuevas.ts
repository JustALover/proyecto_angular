import { Component } from '@angular/core';
import { Tarea } from '../models/tarea'; //Cada .. es ir hacia atrás en la carpeta actual 
import { Universidad } from '../models/universidad';
@Component({
  selector: 'app-tareas-nuevas',
  imports: [],
  templateUrl: './tareas-nuevas.html',
  styleUrl: './tareas-nuevas.css'
})
export class TareasNuevas {

}

export class Tareas {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  universidad: Universidad[] = [];
  //Tareas
  tarea: Tarea = {
    id: 1,
    descripcion: "Mi parte favorita de la tarea es cuando dice tarea y tarearea",
    completada: false,
    fechaCreacion: new Date('2025-05-06'),
    nota: "10",
    fechaVencimiento: new Date('2025-10-31'),
  };

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
      this.tareas.push(this.tarea) //Agregar la tarea usando this para acceder a tareas y pushear tarea
      this.tareas.push(this.dibujar)

    }
  }
}
//Revisar :D

