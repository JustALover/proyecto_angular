import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

imports: [FormsModule]
export type Tarea = {
    id: number;
    descripcion: string;
    completada: boolean;
    fechaCreacion?: Date;
    nota?: string;
    fechaVencimiento?: Date;
}




