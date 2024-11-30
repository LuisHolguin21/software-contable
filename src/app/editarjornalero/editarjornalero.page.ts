import { Component, OnInit } from '@angular/core';
import { JornaleroService } from '../services/jornalero.service';
import { ToastController,NavController,LoadingController } from '@ionic/angular';
import { ActivatedRoute,Router,ParamMap,Params } from '@angular/router';
import { JornaleroData } from '../jornalerodata';

@Component({
  selector: 'app-editarjornalero',
  templateUrl: './editarjornalero.page.html',
  styleUrls: ['./editarjornalero.page.scss'],
})
export class EditarjornaleroPage implements OnInit {

  id: any;
  public seleccionado! : JornaleroData;

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private jornaleroservice: JornaleroService,
    private router: Router,
    private toastCrl: ToastController,
  ) { }

  ngOnInit() {
    this.route.params.forEach(async(params: Params)=>{
      (await this.jornaleroservice.getJornalerotoById(params['id'])).subscribe((seleccionado)=>{
        this.id = params['id'];
        this.seleccionado = seleccionado!;
      });
    });

  }

  regresar(): void{
    this.router.navigate(['tabs/jornaleros']);
  }

  editar():void{
    this.jornaleroservice.editarJornalero(this.seleccionado,this.id).then(()=>{
      this.mostrarMensaje("trabajador Actualizado Correctamente");
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
