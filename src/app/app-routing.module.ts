import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  {
    path: 'trabajos',
    loadChildren: () => import('./trabajos/trabajos.module').then( m => m.TrabajosPageModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./empleados/empleados.module').then( m => m.EmpleadosPageModule)
  },
  {
    path: 'nuevoempleado',
    loadChildren: () => import('./nuevoempleado/nuevoempleado.module').then( m => m.NuevoempleadoPageModule)
  },  {
    path: 'balance',
    loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
