import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { gastosR } from '../gastosR';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GastosRService {
  constructor(private firestore: AngularFirestore) {}


  getDescripcion(): Observable<any[]> {
    return this.firestore.collection('gastos').valueChanges();
  }

  guardargastosR(gastos: gastosR) {
    const id = this.firestore.createId();
    return this.firestore.collection('gastos').doc(id).set({
      ...gastos,
      id: id
    });
  }
  getGastosR(): Observable<gastosR[]> {
    return this.firestore.collection<gastosR>('gastos').valueChanges();
  }

  eliminarGastosR(id: string) {
  return this.firestore.collection('gastos').doc(id).delete();
  }
  
}
