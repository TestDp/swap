import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import {SearchPage} from "./search";
import { modalSearchPage } from './modalSearch/modalSearch';

@NgModule({
  declarations: [
    modalSearchPage,
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
  
  entryComponents:[
    modalSearchPage,
  ],
  exports: [
    IonicModule,
    modalSearchPage
  ]
})
export class MysearchModule {}
