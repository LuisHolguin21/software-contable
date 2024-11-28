import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Ingresos } from '../ingresos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener todas las variedades
  getVariedades(): Observable<any[]> {
    return this.firestore.collection('variedades').valueChanges();
  }

  // Guardar un nuevo ingreso
  guardarIngreso(ingreso: Ingresos) {
    const id = this.firestore.createId();
    return this.firestore.collection('ingresos').doc(id).set({
      ...ingreso,
      id: id
    });
  }

  // Obtener todos los ingresos
  getIngresos(): Observable<Ingresos[]> {
    return this.firestore.collection<Ingresos>('ingresos').valueChanges();
  }

  // Método para eliminar un ingreso
eliminarIngreso(id: string) {
  return this.firestore.collection('ingresos').doc(id).delete();
}
}