import { Component, OnInit } from '@angular/core';
import { Trabajos } from '../trabajos';
import { AlertController } from '@ionic/angular';
import { TrabajosService } from "../services/trabajos.service";

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.page.html',
  styleUrls: ['./trabajos.page.scss'],
})
export class TrabajosPage implements OnInit {
  public mistrabajos?: Trabajos[];

  constructor(
    private trabajosService: TrabajosService,
    public alertController: AlertController
  ) { }

  getTrabajos(): void {
    this.trabajosService.getTrabajos().subscribe(trabajos => this.mistrabajos = trabajos);
  }

  ngOnInit() {
    this.getTrabajos();
  }

  async borrarTrabajos(trabajos: Trabajos) {
    const alert = await this.alertController.create({
      header: "Borrar",
      message: "¿Está seguro de eliminar la materia?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Cancela borrado");
          }
        },
        {
          text: "Sí",
          handler: () => {
            this.mistrabajos = this.mistrabajos?.filter(h => h !== trabajos);
            this.trabajosService.borrar(trabajos).subscribe();
          }
        }
      ]
    });
    await alert.present();
  }
}
