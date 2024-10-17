import { Component, OnInit } from '@angular/core';
import { Empleados } from '../empleados';
import { AlertController } from '@ionic/angular';
import { EmpleadosService } from "../services/empleados.service";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {

  public misempleados?: Empleados[];

  constructor(
    private empleadosService: EmpleadosService,
    public alertController: AlertController
  ) { }

  getEmpleados(): void {
    this.empleadosService.getEmpleados().subscribe(empleados => this.misempleados = empleados);
  }

  ngOnInit() {
    this.getEmpleados();
  }

  async borrarEmpleados(empleados: Empleados) {
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
            this.misempleados = this.misempleados?.filter(h => h !== empleados);
            this.empleadosService.borrar(empleados).subscribe();
          }
        }
      ]
    });
    await alert.present();
  }
}
