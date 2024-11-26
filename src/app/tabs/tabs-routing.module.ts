import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'empleados/:id',
        loadChildren: () => import('../empleados/empleados.module').then(m => m.EmpleadosPageModule)
      },
      {
        path: 'empleados/:id/nuevoempleado',
        loadChildren: () => import('../nuevoempleado/nuevoempleado.module').then(m => m.NuevoempleadoPageModule)
      },
      {
        path: 'balance',
        loadChildren: () => import('../balance/balance.module').then(m => m.BalancePageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('../configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
      },
      {
        path: 'trabajadores',
        loadChildren: () => import('../trabajadores/trabajadores.module').then(m => m.TrabajadoresPageModule)
      },
      {
        path: 'tipo-trabajos',
        loadChildren: () => import('../tipo-trabajos/tipo-trabajos.module').then(m => m.TipoTrabajosPageModule)
      },
      {
        path: 'variedad-coffe',
        loadChildren: () => import('../variedad-coffe/variedad-coffe.module').then(m => m.VariedadCoffePageModule)
      },
      {
        path: 'tipo-gasto',
        loadChildren: () => import('../tipo-gasto/tipo-gasto.module').then(m => m.TipoGastoPageModule)
      },
      {
        path: 'nuevo-tipo-gasto',
        loadChildren: () => import('../nuevo-tipo-gasto/nuevo-tipo-gasto.module').then(m => m.NuevoTipoGastoPageModule)
      },
      {
        path: 'editar-tipogasto/:id',
        loadChildren: () => import('../editar-tipogasto/editar-tipogasto.module').then(m => m.EditarTipogastoPageModule)
      },
      {
        path: 'nueva-variedad',
        loadChildren: () => import('../nueva-variedad/nueva-variedad.module').then(m => m.NuevaVariedadPageModule)
      },
      {
        path: 'editarvariedad-cafe/:id',
        loadChildren: () => import('../editarvariedad-cafe/editarvariedad-cafe.module').then(m => m.EditarvariedadCafePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
