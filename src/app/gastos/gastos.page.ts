import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GastosRService } from '../services/gastos-r.service';
import { gastosR } from '../gastosR';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {
  gastosForm: FormGroup;
  gastosL: any[] = []; 
  Gastos: gastosR[] = [];

  constructor(
    private fb: FormBuilder,
    private gastosService: GastosRService,
    private alertController: AlertController
  ) {
    this.gastosForm = this.fb.group({
      descripcion: ['', Validators.required],
      valor: ['', Validators.required],
      fecha: ['',Validators.required]
      //gasto: ['',Validators.required]
    });
   }

   ngOnInit() {
    this.cargarDescripcion();
    this.cargarGastos();
  }
  cargarDescripcion() {
    this.gastosService.getDescripcion().subscribe(
      gastosL => {
        this.gastosL = gastosL;
        console.log('Descripción cargada:', this.gastosL);
      },
      error => {
        console.error('Error al cargar descripción:', error);
      }
    );
  }
  cargarGastos() {
    this.gastosService.getGastosR().subscribe(
      gastosR => {
        this.Gastos = gastosR;
      },
      error => {
        console.error('Error al cargar gastos', error);
      }
    );
  }

  guardarGastoR() {
    console.log('Formulario enviado:', this.gastosForm.value);
    if (this.gastosForm.valid) {
      const nuevoIngreso: gastosR = {
        id: '', // Se generará en el servicio
        ...this.gastosForm.value
      };

      this.gastosService.guardargastosR(nuevoIngreso)
        .then(() => {
          this.gastosForm.reset();
        })
        .catch(error => {
          this.mostrarAlerta('Error', 'No se pudo guardar el ingreso');
        });

    }
  }
  async eliminarGastosR(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de eliminar este gasto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.gastosService.eliminarGastosR(id)
              .then(() => {
                console.log('Gasto eliminado');
                this.cargarGastos(); // Recargar la lista
              })
              .catch(error => {
                this.mostrarAlerta('Error', 'No se pudo eliminar el ingreso');
              });
          }
        }
      ]
    });
  
    await alert.present();
  
    // Enfoca un elemento visible para evitar conflictos
    setTimeout(() => document.body.focus(), 100);
  }

  validarFormulario() {
    console.log('Formulario válido:', this.gastosForm.valid);
    console.log('Valores del formulario:', this.gastosForm.value);
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
