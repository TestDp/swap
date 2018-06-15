import {Component} from '@angular/core';
import {NavParams, ViewController, NavController} from "ionic-angular";
import 'rxjs/add/operator/map';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';



@Component({
  selector: 'page-modalHome',
  templateUrl: 'modalHome.html',
})
export class modalHomePage {
  data: any = {};
  constructor(private params: NavParams, private view: ViewController,private nativePageTransitions: NativePageTransitions,
              public navCtrl: NavController,) {
  }

  ionViewDidLoad() {
    this.data = this.params.data.swap;
  }


  closeModal(){
    this.view.dismiss();
  }

  swap() {

    this.navCtrl.push('SwapPage',{swap: this.data});
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 500,
        slowdownfactor: -1,
        slidePixels: 20,
      };

      this.nativePageTransitions.slide(options);
      this.navCtrl.pop();
    } else {
      let options: NativeTransitionOptions = {
        duration: 700
      };
      this.nativePageTransitions.fade(options);
      this.navCtrl.setRoot('HomePage');
    }
  }

}/**
 * Created by N56J on 27/12/2017.
 */
/**
 * Created by N56J on 23/01/2018.
 */
