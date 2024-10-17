import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'editarmateria',
    loadChildren: () => import('./editarmateria/editarmateria.module').then( m => m.EditarmateriaPageModule)
  },
  {
    path: 'nuevamateria',
    loadChildren: () => import('./nuevamateria/nuevamateria.module').then( m => m.NuevamateriaPageModule)
  },
  {
    path: 'editarestudiante',
    loadChildren: () => import('./editarestudiante/editarestudiante.module').then( m => m.EditarestudiantePageModule)
  },
  {
    path: 'nuevoestudiante',
    loadChildren: () => import('./nuevoestudiante/nuevoestudiante.module').then( m => m.NuevoestudiantePageModule)
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
