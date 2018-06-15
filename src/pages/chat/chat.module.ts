/**
 * Created by N56J on 29/11/2017.
 */
import { NgModule } from '@angular/core';
import {IonicPageModule, IonicModule} from 'ionic-angular';
import {ChatPage} from "./chat";
import { ChatModalPage } from './modalChat/modalChat';

@NgModule({
  declarations: [
    ChatModalPage,
    ChatPage,

  ],
  imports: [
    IonicPageModule.forChild(ChatPage)
  ],
  entryComponents:[
    ChatModalPage,
  ],
  exports: [
    IonicModule,
    ChatModalPage
  ],
  providers: [],
})

export class ChatPageModule {}
/**
 * Created by N56J on 29/12/2017.
 */
