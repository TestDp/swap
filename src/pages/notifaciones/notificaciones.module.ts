/**
 * Created by N56J on 29/11/2017.
 */
import { NgModule } from '@angular/core';
import {IonicPageModule, IonicModule} from 'ionic-angular';
import {NotificacionesPage} from "./notificaciones";
import {modalNotificacionesPage} from "./modal/modalNotificaciones";

@NgModule({
  declarations: [
    modalNotificacionesPage,
    NotificacionesPage

  ],
  imports: [
     IonicPageModule.forChild(NotificacionesPage)
  ],
  entryComponents:[
    modalNotificacionesPage,
  ],
  exports: [
    IonicModule,
    modalNotificacionesPage
  ],
  providers: [],
})
export class NotificacionesPageModule {}
