import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from "ionic-angular";



@Component({
  selector: 'page-publitacionsmodal',
  templateUrl: 'publications.modal.html',
  styles: ['publications.modal.scss'],
})

export class PublitacionsModalPage {
  slides:any = [];
  publicacion: any = [];
  constructor(public navCtrl: NavController, private navParams: NavParams,
    private view: ViewController) {

  }

  ionViewWillEnter() {
      this.publicacion = this.navParams.data.publicacion;

  }

  closeModal(){
    this.view.dismiss();
  }


}
/**
 * Created by N56J on 29/11/2017.
 */
/**
 * Created by N56J on 01/12/2017.
 */
