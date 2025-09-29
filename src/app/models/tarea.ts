export type Tarea = {
    id: number;
    descripcion: string;
    completada: boolean;
    fechaCreacion?: Date;
    nota?: string;
    fechaVencimiento?: Date;
}

const tarea: Tarea = {
    id: 1,
    descripcion: "Jugar Fornais",
    completada: false,
    fechaCreacion: new Date('2025-05-06'),
    nota: "10",
    fechaVencimiento: new Date('2025-10-31'),
}
