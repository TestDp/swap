import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagoPage } from './pago';

@NgModule({
  declarations: [
    PagoPage,
  ],
  imports: [
    IonicPageModule.forChild(PagoPage),
  ],
  exports: [
    PagoPage
  ],
  providers: [],
})
export class PagoPageModule {}
