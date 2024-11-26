import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Trabajos } from '../../app/trabajos'; 

@Injectable({
  providedIn: 'root'
})
export class TipoTrabajoService {
  private trabajos: Observable<Trabajos[]>;
  private trabajosCollection: AngularFirestoreCollection<Trabajos>;
  constructor(private firestore: AngularFirestore) {

    this.trabajosCollection = this.firestore.collection<Trabajos>('Tipos de trabajos');

    this.trabajos = this.trabajosCollection.snapshotChanges().pipe(
      map(actions => 
        actions.map(a => {
        const data = a.payload.doc.data() as Trabajos;
        const id = a.payload.doc.id;
        return { ...data, id };
      }))
    );
  }

  async crearNuevo(trabajo: Trabajos): Promise<DocumentReference> {
    return this.trabajosCollection.add(trabajo);
  }

  getTipotrabajos(): Observable<Trabajos[]> {
    return this.trabajos;
  }

  borrarTipotrabajos(id:any){
    this.firestore.doc(`Tipos de trabajos/${id}`).delete().then(()=>{
      console.log("Tipo de trabajo eliminado!");
    }).catch(err=>{
      console.log(err);
    });
  }

  getTipotrabajoById(id: string): Observable<Trabajos | undefined> {
    return this.trabajosCollection.doc<Trabajos>(id).valueChanges().pipe(
    );
  }

  async editarTipotrabajo(trabajo:Trabajos,id:any):Promise<void>{
    return this.trabajosCollection.doc<Trabajos>(id).update({
      nombre: trabajo.nombre,
    });
  }
  
}