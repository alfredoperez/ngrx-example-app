import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'friends-tracker',
    loadChildren: () =>
      import('./friend-tracker/friend-tracker.module').then(
        (m) => m.FriendTrackerModule
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
    redirectTo: 'friends-tracker',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
