import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./empleados/empleados.module').then( m => m.EmpleadosPageModule)
  },
  {
    path: 'nuevoempleado',
    loadChildren: () => import('./nuevoempleado/nuevoempleado.module').then( m => m.NuevoempleadoPageModule)
  },
  {
    path: 'balance',
    loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'trabajadores',
    loadChildren: () => import('./trabajadores/trabajadores.module').then( m => m.TrabajadoresPageModule)
  },
  {

    path: 'variedad-coffe',
    loadChildren: () => import('./variedad-coffe/variedad-coffe.module').then( m => m.VariedadCoffePageModule)
  },
  {
    path: 'tipo-trabajos',
    loadChildren: () => import('./tipo-trabajos/tipo-trabajos.module').then( m => m.TipoTrabajosPageModule)
  },
  {
    path: 'tipo-gasto',
    loadChildren: () => import('./tipo-gasto/tipo-gasto.module').then( m => m.TipoGastoPageModule)
  },
  {
    path: 'nuevo-tipo-gasto',
    loadChildren: () => import('./nuevo-tipo-gasto/nuevo-tipo-gasto.module').then( m => m.NuevoTipoGastoPageModule)
  },
  {
    path: 'editar-tipogasto',
    loadChildren: () => import('./editar-tipogasto/editar-tipogasto.module').then( m => m.EditarTipogastoPageModule)
  },
  {
    path: 'nueva-variedad',
    loadChildren: () => import('./nueva-variedad/nueva-variedad.module').then( m => m.NuevaVariedadPageModule)
  },
  {
    path: 'editarvariedad-cafe',
    loadChildren: () => import('./editarvariedad-cafe/editarvariedad-cafe.module').then( m => m.EditarvariedadCafePageModule)

  },
  {
    path: 'nuevo-tipo-trabajo',
    loadChildren: () => import('./nuevo-tipo-trabajo/nuevo-tipo-trabajo.module').then( m => m.NuevoTipoTrabajoPageModule)
  },
  {
    path: 'editar-tipo-trabajo',
    loadChildren: () => import('./editar-tipo-trabajo/editar-tipo-trabajo.module').then( m => m.EditarTipoTrabajoPageModule)

  },
  {
    path: 'ingresos',
    loadChildren: () => import('./ingresos/ingresos.module').then( m => m.IngresosPageModule)
  },
  {

    path: 'gastos',
    loadChildren: () => import('./gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'jornaleros',
    loadChildren: () => import('./jornaleros/jornaleros.module').then( m => m.JornalerosPageModule)
  },
  {
    path: 'editarjornalero',
    loadChildren: () => import('./editarjornalero/editarjornalero.module').then( m => m.EditarjornaleroPageModule)
  },
  {
    path: 'nuevojornalero',
    loadChildren: () => import('./nuevojornalero/nuevojornalero.module').then( m => m.NuevojornaleroPageModule)
  },
  {
    path: 'trabajoganado',
    loadChildren: () => import('./trabajoganado/trabajoganado.module').then( m => m.TrabajoganadoPageModule)

  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

