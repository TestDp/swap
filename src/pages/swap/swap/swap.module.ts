import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SwapPage} from "./swap";

@NgModule({
  declarations: [
    SwapPage,
  ],
  imports: [
    IonicPageModule.forChild(SwapPage),
  ],
  exports: [
    SwapPage
  ]
})
export class MyFormModule {}/**
 * Created by N56J on 18/12/2017.
 */
