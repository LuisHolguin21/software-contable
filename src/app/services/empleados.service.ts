import { Injectable } from '@angular/core';
import { Empleados } from '../empleados';
import { EMPLEADOS } from '../lista-empleados';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  getEmpleados(): Observable<Empleados[]>{
    return of(EMPLEADOS);
  }
  borrar(empleados:Empleados|number):Observable<Empleados[]>{
    const id = EMPLEADOS?.findIndex(h=> h==empleados);
    if (id>-1){
      EMPLEADOS.splice(id,1);
    }
    return of(EMPLEADOS);
  }
  getUnEmpledo(id: number):Observable<Empleados | undefined>{
    id = Number(id);
    return of(EMPLEADOS.find(x => x.id ===id));
  }
  editarEmpleado(empleados:Empleados):Observable<Empleados | undefined>{
    let id = Number(empleados.id);
    let indice: number = EMPLEADOS.findIndex(x => x.id ===id)
    EMPLEADOS[indice] = empleados;
    return of(EMPLEADOS[indice]);
  }
  crearNuevo(empleados:Empleados): Observable<Empleados>{
    EMPLEADOS.push(empleados);
    let indice:number=EMPLEADOS.findIndex(x =>x.id === empleados.id)
    return of(EMPLEADOS[indice]);
  }
}
