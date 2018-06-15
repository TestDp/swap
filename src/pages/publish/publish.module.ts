import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishPage } from './publish';
import { MediaCapture} from '@ionic-native/media-capture';

@NgModule({
  declarations: [
    PublishPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishPage),
  ],
  exports: [
    PublishPage
  ],
  providers: [MediaCapture],
})
export class PublishPageModule {}
