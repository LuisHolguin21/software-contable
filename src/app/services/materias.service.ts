import { Injectable } from '@angular/core';
import {Materias} from'../materias';
import {MATERIAS} from '../lista-materias';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor() { }

  getMaterias(): Observable<Materias[]>{
    return of(MATERIAS);
  }
  borrar(materias:Materias|number):Observable<Materias[]>{
    const id = MATERIAS?.findIndex(h=> h==materias);
    if (id>-1){
      MATERIAS.splice(id,1);
    }
    return of(MATERIAS);
  }
  getUnaMateria(id: number):Observable<Materias | undefined>{
    id = Number(id);
    return of(MATERIAS.find(x => x.id ===id));
  }
  editarMateria(materia:Materias):Observable<Materias | undefined>{
    let id = Number(materia.id);
    let indice: number = MATERIAS.findIndex(x => x.id ===id)
    MATERIAS[indice] = materia;
    return of(MATERIAS[indice]);
  }
  crearNuevo(materia:Materias): Observable<Materias>{
    MATERIAS.push(materia);
    let indice:number=MATERIAS.findIndex(x =>x.id === materia.id)
    return of(MATERIAS[indice]);
  }
}
