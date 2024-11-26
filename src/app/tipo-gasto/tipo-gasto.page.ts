import { Component, OnInit } from '@angular/core';
import { gastos } from '../gastos'; // Asegúrate de que esto sea correcto
import { gastosService } from '../services/gastos.service'; // Asegúrate de usar 'GastosService'
import { ToastController, NavController, LoadingController,ActionSheetController, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './tipo-gasto.page.html',
  styleUrls: ['./tipo-gasto.page.scss'],
})
export class TipoGastoPage implements OnInit {

  gastos$!: gastos[];
  nuevogasto = {
    fertilizantes: null,
    GastoAdministrativo: null,
    transporte: null,
    maquinariayequipo: null,
    marquetinyventas: null
  };

  constructor(
    private gastosService: gastosService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private router: Router,
    private toastCtrl: ToastController,
  ) { }
   
  ngOnInit() {
    // Puedes llamar a getGastos aquí si deseas cargar los gastos al iniciar
    this.getGastos();
  }

  async getGastos(): Promise<void> {
    (await this.gastosService.getGatso()).subscribe((gastos) => {
      console.log(gastos); // Muestra los gastos obtenidos
      this.gastos$ = gastos; // Asigna los gastos obtenidos a this.gastos$
    });
  }

  ionViewDidEnter() {
    this.getGastos();
  }

  async selectGastos(gastos: any) {
    let actionSheet = await this.actionSheetCtrl.create({
      header: "¿Qué es lo que desea hacer?",
      buttons: [
        {
          text: "Borrar contacto",
          role: "destructive",
          handler: () => {
            this.borrar(gastos);
          }
        },
        {
          text: "Modificar contacto",
          handler: () => {
            this.editar(gastos);
          }
        },
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async borrar(gastos: any) {
    const alert = await this.alertCtrl.create({
      header: "Eliminar!",
      message: "¿Seguro desea eliminar el contacto?",
      buttons: [
        {
          text: "Sí",
          handler: async () => {
            await this.gastosService.borrarGastos(gastos); // Asegúrate de que esto sea asíncrono
            await this.getGastos(); // Espera a que se obtengan los gastos nuevamente
            this.mostrarMensaje("Contacto eliminado!");
          }
        },
        {
          text: "No",
          role: "cancel",
          cssClass: "secondary"
        }
      ]
    });
    await alert.present();
  }

  mostrarMensaje(mensaje: string) {
    this.toastCtrl.create({
      message: mensaje, // Incluye el mensaje aquí
      duration: 2000
    }).then(toast => toast.present());
  }

  async editar(contacto: any) {
    this.router.navigate(["tabs/editarcontacto", contacto]);
  }
  nuevo(gasto: any) {
    console.log('Nuevo gasto:', gasto);
    // Aquí puedes agregar la lógica para guardar el nuevo gasto
  }
}