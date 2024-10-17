import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Route, ParamMap,Params, Router } from '@angular/router';
import { Materias } from '../materias';
import { MateriasService } from '../services/materias.service';


@Component({
  selector: 'app-editarmateria',
  templateUrl: './editarmateria.page.html',
  styleUrls: ['./editarmateria.page.scss'],
})

export class EditarmateriaPage implements OnInit {

  id:any;
  materia?: Materias;
  seleccionado?:Materias;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private toastController: ToastController,
    private navCtrl:NavController,
    private loadCtrl: LoadingController,
    private materiaService:MateriasService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params:Params)=>{
      this.materiaService.getUnaMateria(params['id'])
        .subscribe(seleccionado => {
          this.seleccionado = seleccionado;
        });
    });
  }
//  array para los semestres
  semestres = Array.from({ length: 10 }, (_, i) => i + 1);

  regresar(): void{
    this.router.navigate(["tabs/Materias"]);
  }

  editar(materia:Materias):void{
    //Funcion de guardar los cambios
    this.materiaService.editarMateria(materia).subscribe(()=>{
      this.mostrarMensaje("Registro exitoso!");
      this.regresar();
    });
  }

  mostrarMensaje(mensaje:string){
    this.toastController.create({
      message:mensaje,
      duration:2000
    }).then(toast => toast.present());  
  }

}
