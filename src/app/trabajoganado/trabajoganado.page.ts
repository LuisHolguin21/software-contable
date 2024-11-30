import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrabajoganadoService } from '../services/trabajoganado.service';
import { TipoTrabajoService } from '../services/tipotrabajos.service';
import { Trabajoganado } from '../trabajoganado';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trabajoganado',
  templateUrl: './trabajoganado.page.html',
  styleUrls: ['./trabajoganado.page.scss'],
})
export class TrabajoganadoPage implements OnInit {
  trabajoganadoForm: FormGroup;
  jornaleros: any[] = [];
  tipotrabajo: any[] = [];
  trabajoganado: Trabajoganado[] = [];
  filteredTrabajoganado: Trabajoganado[] = []; // Lista filtrada
  selectedJornalero: string = ''; // Jornalero seleccionado

  constructor(
    private fb: FormBuilder,
    private trabajoganadoService: TrabajoganadoService,
    private tipoTrabajoService: TipoTrabajoService,
    private alertController: AlertController
  ) {
    this.trabajoganadoForm = this.fb.group({
      jornalero: ['', Validators.required],
      tipotrabajo: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0)]],
      cantidad: [0, [Validators.required, Validators.min(1)]],
      total: [{ value: 0, disabled: true }],
    });

    this.trabajoganadoForm.valueChanges.subscribe((values) => {
      const total = values.valor * values.cantidad || 0;
      this.trabajoganadoForm.patchValue({ total }, { emitEvent: false });
    });
  }

  ngOnInit() {
    this.cargarJornaleros();
    this.cargarTrabajos();
    this.cargarTrabajoganado();
  }

  cargarJornaleros() {
    this.trabajoganadoService.getJornaleros().subscribe(
      (jornaleros) => {
        this.jornaleros = jornaleros;
      },
      (error) => {
        console.error('Error al cargar jornaleros', error);
      }
    );
  }

  cargarTrabajos() {
    this.tipoTrabajoService.getTipotrabajos().subscribe(
      (tipotrabajo) => {
        this.tipotrabajo = tipotrabajo;
      },
      (error) => {
        console.error('Error al cargar jornaleros', error);
      }
    );
  }

  cargarTrabajoganado() {
    this.trabajoganadoService.getTrabajoganado().subscribe(
      (trabajoganado) => {
        this.trabajoganado = trabajoganado;
        this.filtrarPorJornalero(); // Filtrar registros iniciales
      },
      (error) => {
        console.error('Error al cargar trabajo ganado', error);
      }
    );
  }

  filtrarPorJornalero() {
    if (this.selectedJornalero) {
      this.filteredTrabajoganado = this.trabajoganado.filter(
        (t) => t.jornalero === this.selectedJornalero
      );
    } else {
      this.filteredTrabajoganado = this.trabajoganado;
    }
  }

  onJornaleroChange() {
    this.selectedJornalero = this.trabajoganadoForm.get('jornalero')?.value;
    this.filtrarPorJornalero();
  }

  guardarTrabajoganado() {
    if (this.trabajoganadoForm.valid) {
      const valor = this.trabajoganadoForm.get('valor')?.value || 0;
      const cantidad = this.trabajoganadoForm.get('cantidad')?.value || 0;
      const total = valor * cantidad;

      const nuevoTrabajoganado: Trabajoganado = {
        id: '', // Se generará en el servicio
        ...this.trabajoganadoForm.value,
        total, // Agregar el total calculado
      };

      this.trabajoganadoService
        .guardarTrabajoganado(nuevoTrabajoganado)
        .then(() => {
          this.trabajoganadoForm.reset();
        })
        .catch((error) => {
          this.mostrarAlerta('Error', 'No se pudo guardar el trabajo ganado');
        });
    }
  }

  async eliminarTrabajoganado(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de eliminar estos datos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.trabajoganadoService
              .eliminarTrabajoganado(id)
              .catch((error) => {
                this.mostrarAlerta('Error', 'No se pudo eliminar el ingreso');
              });
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
