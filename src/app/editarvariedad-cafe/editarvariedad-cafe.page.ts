import { Component, OnInit } from '@angular/core';
import { VariedadCafeService } from '../services/variedad-cafe.service';
import { ToastController,NavController,LoadingController } from '@ionic/angular';
import { ActivatedRoute,Router,ParamMap,Params } from '@angular/router';
import { VariedadesCafe } from '../variedades-cafe';

@Component({
  selector: 'app-editarvariedad-cafe',
  templateUrl: './editarvariedad-cafe.page.html',
  styleUrls: ['./editarvariedad-cafe.page.scss'],
})
export class EditarvariedadCafePage implements OnInit {

  id: any;
  public seleccionado! : VariedadesCafe;

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private variedadescafeservice: VariedadCafeService,
    private router: Router,
    private toastCrl: ToastController,

  ) { }
  ngOnInit() {
    this.route.params.forEach(async(params: Params)=>{
      (await this.variedadescafeservice.getVariedadtoById(params['id'])).subscribe((seleccionado)=>{
        this.id = params['id'];
        this.seleccionado = seleccionado!;
      });
    });
  }

  regresar(): void{
    this.router.navigate(['tabs/variedad-coffe']);
  }

  editar():void{
    this.variedadescafeservice.editarVariedad(this.seleccionado,this.id).then(()=>{
      this.mostrarMensaje("Variedad Actualizada Correctamente");
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
