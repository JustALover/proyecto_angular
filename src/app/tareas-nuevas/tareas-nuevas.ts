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
  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
    //  this.tareas.push(this)
    }
  }
}
