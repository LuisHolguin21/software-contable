import { Component, OnInit } from '@angular/core';
import {Materias} from'../materias';
// import {MATERIAS} from '../lista-materias';
import { MateriasService } from '../services/materias.service';
import { NavController, AlertController} from '@ionic/angular';


@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  // public mismaterias = MATERIAS;
  public mismaterias? : Materias[];

  constructor(private materiasServices:MateriasService,
    public alertController:AlertController
  ) { }
  
  getMaterias():void{
    // this.mismaterias= this.materiasServices.getMaterias();
    this.materiasServices.getMaterias().subscribe(materias =>this.mismaterias=materias)
  }

  ngOnInit() {
    this.getMaterias();
  }
  async borrarMaterias(materias: Materias) {
    const alert = await this.alertController.create({
      header: "Borrar",
      message: "¿Está seguro de eliminar la materia?",
      buttons: [
        {
          text: "No",
          role: "Cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Cancela borrado");
          }
        },
        {
          text: "Sí",
          handler: (blah) => {
            this.mismaterias = this.mismaterias?.filter(h => h !== materias);
            this.materiasServices.borrar(materias).subscribe();
          }
        }
      ]
    });
  
    await alert.present();
  } 

}
