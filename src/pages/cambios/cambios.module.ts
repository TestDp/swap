/**
 * Created by N56J on 29/11/2017.
 */
import { NgModule } from '@angular/core';
import {IonicPageModule, IonicModule} from 'ionic-angular';
import {CambiosPage} from "./cambios";
import {modalCambioPage} from "./modalCambio/modalCambio";

@NgModule({
  declarations: [
    modalCambioPage,
    CambiosPage

  ],
  imports: [
    IonicPageModule.forChild(CambiosPage)
  ],
  entryComponents:[
    modalCambioPage,
  ],
  exports: [
    IonicModule,
    modalCambioPage
  ],
  providers: [],
})


export class CambiosPageModule {}
