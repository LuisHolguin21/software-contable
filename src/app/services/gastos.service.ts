import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { gastos } from '../gastos';

@Injectable({
  providedIn: 'root'
})
export class gastosService {
  private contactos: Observable<gastos[]>;
  private gastosCollection: AngularFirestoreCollection<gastos>;

  constructor(private firestore: AngularFirestore) {

    this.gastosCollection = this.firestore.collection<gastos>('gastos');


    this.contactos = this.gastosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as gastos;
        const id = a.payload.doc.id;
        return { ...data, id };
      }))
    );
  }


  async crearNuevo(gastos: gastos): Promise<DocumentReference> {
    return this.gastosCollection.add(gastos);
  }


  getGatso(): Observable<gastos[]> {
    return this.contactos;
  }

  borrarGastos(id:any){
    this.firestore.doc(`gasto/${id}`).delete().then(()=>{
      console.log("gasto Eliminado!");
    }).catch(err=>{
      console.log(err);
    });

  }
  getGastosById(id: string): Observable<gastos | undefined> {
    return this.gastosCollection.doc<gastos>(id).valueChanges().pipe(

    );
  }

  async editarContacto(gasto:gastos,id:any):Promise<void>{
    return this.gastosCollection.doc<gastos>(id).update({
      fertilizantes: gasto.fertilizantes,
      GastoAdministrativo: gasto.GastoAdministrativo,
      transporte: gasto.transporte,
      maquinariayequipo: gasto.maquinariayequipo,
      marquetinyventas: gasto.marquetinyventas
    });
  }
}
