import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicStateExampleComponent } from './atomic-state-example.component';

@NgModule({
  declarations: [AtomicStateExampleComponent],
  imports: [CommonModule],
  exports: [AtomicStateExampleComponent]
})
export class AtomicStateExampleModule {}
