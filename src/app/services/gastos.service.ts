import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { gastos } from '../gastos';

@Injectable({
  providedIn: 'root'
})
export class gastosService {
  private gastos: Observable<gastos[]>;
  private gastosCollection: AngularFirestoreCollection<gastos>;
  constructor(private firestore: AngularFirestore) {
    this.gastosCollection = this.firestore.collection<gastos>('gastos');
    this.gastos = this.gastosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as gastos;
        const id = a.payload.doc.id;
        return { ...data, id };
      }))
    );
  }


  async crearNueva(gastos: gastos): Promise<DocumentReference> {
    return this.gastosCollection.add(gastos);
  }

  getTipogasto(): Observable<gastos[]> {
    return this.gastos;
  }


  borrarGastos(id:any){
    this.firestore.doc(`gastos/${id}`).delete().then(()=>{
      console.log("gasto Eliminado!");
    }).catch(err=>{
      console.log(err);
    });


  }
  getGastosById(id: string): Observable<gastos | undefined> {
    return this.gastosCollection.doc<gastos>(id).valueChanges().pipe(

    );
  }

  async editarGasto(gasto:gastos,id:any):Promise<void>{
    return this.gastosCollection.doc<gastos>(id).update({
      descripcion: gasto.descripcion,
      valor: gasto.valor
    });
  }


  }