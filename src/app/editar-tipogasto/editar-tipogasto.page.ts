import { Component, OnInit } from '@angular/core';
import { gastosService } from '../services/gastos.service';
import { ToastController,NavController,LoadingController } from '@ionic/angular';
import { ActivatedRoute,Router,ParamMap,Params } from '@angular/router';
import { gastos } from '../gastos';


@Component({
  selector: 'app-editar-tipogasto',
  templateUrl: './editar-tipogasto.page.html',
  styleUrls: ['./editar-tipogasto.page.scss'],
})
export class EditarTipogastoPage implements OnInit {

  id: any;
  public seleccionado! : gastos;

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private gastosService: gastosService,
    private router: Router,
    private toastCrl: ToastController,

  ) { }
  ngOnInit() {
    this.route.params.forEach(async(params: Params)=>{
      (await this.gastosService.getGastosById(params['id'])).subscribe((seleccionado)=>{
        this.id = params['id'];
        this.seleccionado = seleccionado!;
      });
    });
  }

  regresar(): void{
    this.router.navigate(['tabs/tipo-gasto']);
  }

  editar():void{
    this.gastosService.editarGasto(this.seleccionado,this.id).then(()=>{
      this.mostrarMensaje("Gasto Actualizada Correctamente");
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
