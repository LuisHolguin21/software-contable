import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JornaleroData } from '../../app/jornalerodata';

@Injectable({
  providedIn: 'root'
})
export class JornaleroService {

  private jornaleros: Observable<JornaleroData[]>;
  private jornalerosCollection: AngularFirestoreCollection<JornaleroData>;
  constructor(private firestore: AngularFirestore) {

    this.jornalerosCollection = this.firestore.collection<JornaleroData>('jornaleros');

    this.jornaleros = this.jornalerosCollection.snapshotChanges().pipe(
      map(actions => 
        actions.map(a => {
        const data = a.payload.doc.data() as JornaleroData;
        const id = a.payload.doc.id;
        return { ...data, id };
      }))
    );
  }

  async crearNueva(jornalero: JornaleroData): Promise<DocumentReference> {
    return this.jornalerosCollection.add(jornalero);
  }

  getJornaleros(): Observable<JornaleroData[]> {
    return this.jornaleros;
  }

  borrarJornalero(id:any){
    this.firestore.doc(`jornaleros/${id}`).delete().then(()=>{
      console.log("Trabajador Eliminada!");
    }).catch(err=>{
      console.log(err);
    });
  }

  getJornalerotoById(id: string): Observable<JornaleroData | undefined> {
    return this.jornalerosCollection.doc<JornaleroData>(id).valueChanges().pipe(
    );
  }

  async editarJornalero(jornalero:JornaleroData,id:any):Promise<void>{
    return this.jornalerosCollection.doc<JornaleroData>(id).update({
      nombre: jornalero.nombre,
      celular: jornalero.celular
    });
  }
}
