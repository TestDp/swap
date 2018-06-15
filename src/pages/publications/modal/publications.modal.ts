import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";



@Component({
  selector: 'page-publitacionsmodal',
  templateUrl: 'publications.modal.html',
  styles: ['publications.modal.scss'],
})

export class PublitacionsModalPage {
  slides:any = [];
  publicaciones: any = [];
  constructor(public navCtrl: NavController, private navParams: NavParams) {

  }

  ionViewWillEnter() {
      this.slides = this.navParams.data

  }





}
/**
 * Created by N56J on 29/11/2017.
 */
/**
 * Created by N56J on 01/12/2017.
 */
