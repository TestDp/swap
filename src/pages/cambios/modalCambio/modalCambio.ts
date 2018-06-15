import { Component } from '@angular/core';
import { NavParams, ViewController, NavController } from "ionic-angular";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-modalCambio',
  templateUrl: 'modalCambio.html',
  styles: ['modalCambio.scss'],
})
export class modalCambioPage {
  articulo: any = {};
  articuloCambio2: any = {};


  constructor(private params: NavParams, private view: ViewController, public navCtrl: NavController,
    public http: Http) {
    this.articulo = this.params.data.publicacion;
    this.articuloCambio2 = this.params.data.articuloCambio;
    console.log("cambio modal", this.articulo, this.articuloCambio2);
  }

  ionViewDidLoad() {
    this.articulo = this.params.data.publicacion;
    this.articuloCambio2 = this.params.data.articuloCambio;
    console.log("cambio modal", this.articulo, this.articuloCambio2);
  }


  closeModal() {
    this.view.dismiss();
  }

}/**
 * Created by N56J on 27/12/2017.
 */
/**
 * Created by N56J on 18/01/2018.
 */
