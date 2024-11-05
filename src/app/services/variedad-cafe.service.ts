import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VariedadesCafe } from '../../app/variedades-cafe';

@Injectable({
  providedIn: 'root'
})
export class VariedadCafeService {
  private variedades: Observable<VariedadesCafe[]>;
  private variedadesCollection: AngularFirestoreCollection<VariedadesCafe>;
  constructor(private firestore: AngularFirestore) {

    this.variedadesCollection = this.firestore.collection<VariedadesCafe>('variedades');

    this.variedades = this.variedadesCollection.snapshotChanges().pipe(
      map(actions => 
        actions.map(a => {
        const data = a.payload.doc.data() as VariedadesCafe;
        const id = a.payload.doc.id;
        return { ...data, id };
      }))
    );
  }

  async crearNueva(variedad: VariedadesCafe): Promise<DocumentReference> {
    return this.variedadesCollection.add(variedad);
  }

  getVariedades(): Observable<VariedadesCafe[]> {
    return this.variedades;
  }

  borrarVariedad(id:any){
    this.firestore.doc(`variedades/${id}`).delete().then(()=>{
      console.log("Variedad Eliminada!");
    }).catch(err=>{
      console.log(err);
    });
  }

  getVariedadtoById(id: string): Observable<VariedadesCafe | undefined> {
    return this.variedadesCollection.doc<VariedadesCafe>(id).valueChanges().pipe(
    );
  }

  async editarVariedad(variedad:VariedadesCafe,id:any):Promise<void>{
    return this.variedadesCollection.doc<VariedadesCafe>(id).update({
      nombre: variedad.nombre,
      descripcion: variedad.descripcion
    });
  }
}
