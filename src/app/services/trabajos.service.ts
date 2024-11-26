import { Injectable } from '@angular/core';
import { Trabajos } from '../trabajos';
import { TRABAJOS } from '../lista-trabajos';
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  constructor() { }

  getTrabajos(): Observable<Trabajos[]>{
    return of(TRABAJOS);
  }
  borrar(trabajos:Trabajos|number):Observable<Trabajos[]>{
    const id = TRABAJOS?.findIndex(h=> h==trabajos);
    if (id>-1){
      TRABAJOS.splice(id,1);
    }
    return of(TRABAJOS);
  }
  getUnTrabajo(id: number):Observable<Trabajos | undefined>{
    id = Number(id);
    return of(TRABAJOS.find(x => x.id ===id));
  }
  editarTrabajo(trabajos:Trabajos):Observable<Trabajos | undefined>{
    let id = Number(trabajos.id);
    let indice: number = TRABAJOS.findIndex(x => x.id ===id)
    TRABAJOS[indice] = trabajos;
    return of(TRABAJOS[indice]);
  }
  crearNuevo(trabajos:Trabajos): Observable<Trabajos>{
    TRABAJOS.push(trabajos);
    let indice:number=TRABAJOS.findIndex(x =>x.id === trabajos.id)
    return of(TRABAJOS[indice]);
  }
}
