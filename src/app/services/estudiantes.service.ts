import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { Estudiantes } from '../estudiantes';
import { ESTUDIANTES } from '../lista-estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {


  constructor() { }
  getEstudiantes(): Observable<Estudiantes[]>{
    return of(ESTUDIANTES);
  }

  borrar(estudiantes:Estudiantes|number):Observable<Estudiantes[]>{
    const id = ESTUDIANTES?.findIndex(h=> h==estudiantes);
    if (id>-1){
      ESTUDIANTES.splice(id,1);
    }
    return of(ESTUDIANTES);
  }
  
  getEstudiantesPorMateria(id_materia:number): Observable<Estudiantes[] | undefined>{
    id_materia = Number(id_materia);
    return of(ESTUDIANTES.filter(x => x.id_materia));
  }
  getUnEstudiante(id: number):Observable<Estudiantes | undefined>{
    id = Number(id);
    return of(ESTUDIANTES.find(x => x.id ===id));
  }

  editarEstudiante(estudiante:Estudiantes):Observable<Estudiantes | undefined>{
    let id = Number(estudiante.id);
    let indice: number = ESTUDIANTES.findIndex(x => x.id ===id)
    ESTUDIANTES[indice] = estudiante;
    return of(ESTUDIANTES[indice]);
  }
  crearNuevoE(estudiante:Estudiantes): Observable<Estudiantes>{
    ESTUDIANTES.push(estudiante);
    let indice:number=ESTUDIANTES.findIndex(x =>x.id === estudiante.id)
    return of(ESTUDIANTES[indice]);

  }
  

}
