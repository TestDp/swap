import { Component } from '@angular/core';
import {IonicPage, ModalController,NavController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { PublitacionsModalPage } from './modal/publications.modal';

//import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-publitacions',
  templateUrl: 'publications.html',
  styles: ['publications.scss'],
})

export class PublitacionsPage {
  publicaciones: any = [];
  rutaImagenes: any = [];
  rutaUrl: any;
  menuImagen: boolean;
  slides:any = [];
  publicacion:any;
  usuarioLoggeado:any;
  constructor(
    public database: AngularFireDatabase,
    private af: AngularFireDatabase,
    private modalCtrl:ModalController,
    public navCtrl: NavController,
  ) {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.cargarPublicacion();
    this.menuImagen = false;

  }

  ionViewDidLoad() {


  }

  cargarPublicacion(){
    const queryObservable = this.af.list('/article/', {
      query: {
        orderByChild: 'usuario',
        equalTo: this.usuarioLoggeado.email,
      }
    });
    queryObservable
      .subscribe(queriedItems => {
        console.log(queriedItems);
        this.publicaciones = queriedItems;
        let publicacionesCompuesta: any = [];
        this.publicaciones.forEach(element => {
          if (element.estado === 'A') {
            publicacionesCompuesta.push(element);
          }
        })

        if (publicacionesCompuesta.length > 0) {
          this.publicaciones = publicacionesCompuesta;
          publicacionesCompuesta = [];
        }else if (publicacionesCompuesta.length == 0){
          this.publicaciones = [];
        }
        /*for (var i = 0; i < this.publicaciones.length; i++){
         this.rutaImagenes = this.publicaciones[i].imageUrl;
          console.log("ruta imagenes",this.rutaImagenes );
          let rutaPublicacion:any = [];
         for (var j = 0; j < this.rutaImagenes.length; j++){
           firebase.storage().ref().child('ImagenesArticulos/'+ this.publicaciones[i].usuario + "/" + this.rutaImagenes[j]).getDownloadURL()
             .then(response => {
               this.rutaUrl = response;
               console.log("ruta", this.rutaUrl);
               rutaPublicacion.push(this.rutaUrl);
             })
             .catch(error => console.log('error', error))
          }
          this.publicaciones[i].imageUrl = rutaPublicacion;
        }*/

      });

  }

  abrirModal(publicacion){
    //this.menuImagen = true;
    //this.slides = publicacion.imageThumb;
    //this.publicacion = publicacion;

    const modal = this.modalCtrl.create(PublitacionsModalPage, {publicacion:publicacion});
    modal.present();
  }

  cerrarModal(){
    this.menuImagen = false;
  }

  cerrarModal1(){
    this.navCtrl.push('HomePage')
  }

}
/**
 * Created by N56J on 29/11/2017.
 */
