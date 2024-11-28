import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IngresosService } from '../services/ingresos.service';
import { Ingresos } from '../ingresos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {
  ingresoForm: FormGroup;
  variedades: any[] = [];
  ingresos: Ingresos[] = [];

  constructor(
    private fb: FormBuilder,
    private ingresosService: IngresosService,
    private alertController: AlertController
  ) {
    this.ingresoForm = this.fb.group({
      fecha: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      variedad: ['', Validators.required],
      cliente: ['', Validators.required],
      finca: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cargarVariedades();
    this.cargarIngresos();
  }

  cargarVariedades() {
    this.ingresosService.getVariedades().subscribe(
      variedades => {
        this.variedades = variedades;
      },
      error => {
        console.error('Error al cargar variedades', error);
      }
    );
  }

  cargarIngresos() {
    this.ingresosService.getIngresos().subscribe(
      ingresos => {
        this.ingresos = ingresos;
      },
      error => {
        console.error('Error al cargar ingresos', error);
      }
    );
  }

  guardarIngreso() {
    if (this.ingresoForm.valid) {
      const nuevoIngreso: Ingresos = {
        id: '', // Se generará en el servicio
        ...this.ingresoForm.value
      };

      this.ingresosService.guardarIngreso(nuevoIngreso)
        .then(() => {
          this.ingresoForm.reset();
        })
        .catch(error => {
          this.mostrarAlerta('Error', 'No se pudo guardar el ingreso');
        });
    }
  }

  async eliminarIngreso(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de eliminar este ingreso?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.ingresosService.eliminarIngreso(id)
              .catch(error => {
                this.mostrarAlerta('Error', 'No se pudo eliminar el ingreso');
              });
          }
        }
      ]
    });

    await alert.present();
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