import { Tarea } from '../../tareas/shared/tarea.model';
import { Incidencia } from '../../incidencias/shared/incidencia.model';

export class Empleado {
    id : number;
    nombre : string;
    apellidos : string;
    puesto : string;
    oficina : string;
    sueldo : number;
    fechaContratacion:number
    nombreProyecto:string;
    proyectoId : number;
    tareas : Tarea[];
    incidencias : Incidencia[];
}
