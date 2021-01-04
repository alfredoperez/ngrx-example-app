import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FriendsNamesPipeModule } from '../../../shared/pipes/friends-names/friends-names-pipe.module';
import { FriendsTableComponent } from './friends-table.component';

@NgModule({
  declarations: [FriendsTableComponent],
  exports: [
    FriendsTableComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FriendsNamesPipeModule
  ]
})
export class FriendsTableModule {
}
