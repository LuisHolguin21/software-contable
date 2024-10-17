import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Materias } from '../materias';
import { MateriasService } from '../services/materias.service';
import { Estudiantes } from '../estudiantes';
import { EstudiantesService } from '../services/estudiantes.service';
import { ESTUDIANTES } from '../lista-estudiantes';

import { NavController, AlertController} from '@ionic/angular';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],

  styles: [`
    .fixed-size-item {
      width: 300px; /* Ancho fijo */
      padding: 10px; /* Espaciado interno */
    }
  `]
})
export class EstudiantesPage implements OnInit {
  id: any;
  seleccionado?: Materias;

  public estudiantes?: Estudiantes[] = [];

  idMateria: number = 0;
  // public misestudiantes? : Estudiantes[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private materiasService: MateriasService,
    private estudiantesService: EstudiantesService,

    public alertController:AlertController
  ) {}

  getEstudiantes():void{
    // this.estudiantesService.getEstudiantes().subscribe(estudiantes =>this.misestudiantes=estudiantes)
    this.estudiantesService.getEstudiantes().subscribe(estudiantes =>this.estudiantes=estudiantes)
  }

  ngOnInit() {
    this.getEstudiantes();
    // // Recibe el id de la materia desde la ruta
    this.idMateria = +(this.route.snapshot.paramMap.get('id') ?? 0);  // Si es null, asigna 0

    // Filtra los estudiantes asociados a esta materia
    this.estudiantes = ESTUDIANTES.filter(estudiante => estudiante.id_materia === this.idMateria);

    // Recuperamos el dato id pasado por el parámetro de entrada del componente
    this.route.params.forEach((params: Params) => {
      this.materiasService.getUnaMateria(params['id'])
        .subscribe(seleccionado => {
          this.seleccionado = seleccionado;
        });

      this.estudiantesService.getEstudiantesPorMateria(params['id'])
      .subscribe(estudiantes => {
        this.estudiantes = (estudiantes ?? []).filter(estudiante => estudiante.id_materia === this.idMateria);
      });

    });
  }
  async borrarEstudiantes(estudiantes: Estudiantes) {
    const alert = await this.alertController.create({
      header: "Borrar",
      message: "¿Está seguro de eliminar el estudiante?",
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
            // this.misestudiantes = this.misestudiantes?.filter(h => h !== estudiantes);
            this.estudiantes = this.estudiantes?.filter(h => h !== estudiantes);
            this.estudiantesService.borrar(estudiantes).subscribe();
          }
        }
      ]
    });
  
    await alert.present();
  } 

  regresar(): void {
    // Método para regresar a la lista de películas
    this.router.navigate(['tabs/materias']);
  }
}