import { NgModule } from '@angular/core';
import { UIModule } from './UIModule.module';


@NgModule({
  imports: [UIModule],
  exports: [UIModule],
})
export class SharedModule {}
