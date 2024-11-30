import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Trabajoganado } from '../trabajoganado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajoganadoService {

  constructor(private firestore: AngularFirestore) { }

    // Obtener todas las variedades
    getJornaleros(): Observable<any[]> {
      return this.firestore.collection('jornaleros').valueChanges();
    }
  
    // Guardar un nuevo ingreso
    guardarTrabajoganado(trabajoganado: Trabajoganado) {
      const id = this.firestore.createId();
      return this.firestore.collection('trabajoganado').doc(id).set({
        ...trabajoganado,
        id: id
      });
    }
  
    // Obtener todos los ingresos
    getTrabajoganado(): Observable<Trabajoganado[]> {
      return this.firestore.collection<Trabajoganado>('trabajoganado').valueChanges();
    }
  
    // Método para eliminar un ingreso
  eliminarTrabajoganado(id: string) {
    return this.firestore.collection('trabajoganado').doc(id).delete();
  }
}
