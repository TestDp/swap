/**
 * Created by N56J on 29/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PublitacionsPage} from "./publications";
import {PublitacionsModalPage} from "./modal/publications.modal";

@NgModule({
  declarations: [
    PublitacionsPage,PublitacionsModalPage
  ],
  imports: [
    IonicPageModule.forChild(PublitacionsPage),
  ],
  entryComponents:[
    PublitacionsModalPage
  ],
  exports: [
    PublitacionsPage
  ],
  providers: [],
})
export class PublicationPageModule {}
