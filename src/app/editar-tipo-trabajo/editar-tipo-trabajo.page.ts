import { Component, OnInit } from '@angular/core';

import { TipoTrabajoService } from '../services/tipotrabajos.service';
import { ToastController,NavController,LoadingController } from '@ionic/angular';
import { ActivatedRoute,Router,ParamMap,Params } from '@angular/router';
import { Trabajos } from '../trabajos';

@Component({
  selector: 'app-editar-tipo-trabajo',
  templateUrl: './editar-tipo-trabajo.page.html',
  styleUrls: ['./editar-tipo-trabajo.page.scss'],
})
export class EditarTipoTrabajoPage implements OnInit {

  id: any;
  public seleccionado! : Trabajos;

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private tipoTrabajoService: TipoTrabajoService,
    private router: Router,
    private toastCrl: ToastController,

  ) { }
  ngOnInit() {
    this.route.params.forEach(async(params: Params)=>{
      (await this.tipoTrabajoService.getTipotrabajoById(params['id'])).subscribe((seleccionado)=>{
        this.id = params['id'];
        this.seleccionado = seleccionado!;
      });
    });
  }

  regresar(): void{
    this.router.navigate(['tabs/tipo-trabajos']);
  }

  editar():void{
    this.tipoTrabajoService.editarTipotrabajo(this.seleccionado,this.id).then(()=>{
      this.mostrarMensaje("Tipo de trabajo actualizado correctamente");
      this.regresar();
    }, err =>{
      this.mostrarMensaje('Hubo un error');
    });
  }

  mostrarMensaje(mensaje:string){
    this.toastCrl.create({
      message: mensaje,
      duration:2000
    }).then(toast =>toast.present());
  }

}
