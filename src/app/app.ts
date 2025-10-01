import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasNuevas } from './tareas-nuevas/tareas-nuevas';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TareasNuevas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('God damn🗣️');
}
