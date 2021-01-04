import { NgModule } from '@angular/core';
import { FriendsNamesPipe } from './friends-names.pipe';

@NgModule({
  declarations: [FriendsNamesPipe],
  exports: [FriendsNamesPipe]
})
export class FriendsNamesPipeModule {
}
