import { NgModule } from '@angular/core';
import {IonicPageModule, IonicModule} from 'ionic-angular';
import { HomePage } from './home';
import {modalHomePage} from "./modal/modalHome";
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    modalHomePage,
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicImageLoader
  ],
  entryComponents:[
    modalHomePage,
  ],
  exports: [
    IonicModule,
    modalHomePage
  ]
})



export class homeModule {}
