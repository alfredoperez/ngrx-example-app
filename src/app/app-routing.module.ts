import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'entity-state',
    loadChildren: () =>
      import('./entity-state-example/entity-state.module').then(
        (m) => m.EntityStateModule
      )
  },
  {
    path: 'atomic-state',
    loadChildren: () =>
      import('./atomic-state-example/atomic-state-example.module').then(
        (m) => m.AtomicStateExampleModule
      )
  },
  {
    path: '**',
    redirectTo: 'entity-state',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
