import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from "../../models/user";
//import firebase from 'firebase';
import { Article } from "../../models/article";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { modalSearchPage } from './modalSearch/modalSearch';

declare var querybase;
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  user = {} as User;
  usuarioLoggeado: any;
  ubicacion: any;
  publicaciones: any = [];
  publicacionesCompuesta: any = [];
  rutaImagenes: any = [];
  rutaUrl: any;
  article = {} as Article;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public af: AngularFireDatabase,
    private nativePageTransitions: NativePageTransitions,
    public modalCtrl: ModalController,
  ) {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.ubicacion = JSON.parse(localStorage.getItem("ubicacion"));
  }
  /* ionViewDidLoad() {
     this.article = {} as Article;
   }*/
  buscar(vbusquedad) {
    let validador = 0;
    this.publicaciones = [];
    this.publicacionesCompuesta = [];
    if ((vbusquedad.ciudad != null && vbusquedad.ciudad != "") && vbusquedad != "") {
      const queryObservable = this.af.list('/article/', {
        query: {
          orderByChild: 'ciudad',
          equalTo: vbusquedad.ciudad,
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          console.log(queriedItems);
          this.publicaciones = queriedItems;
          /* for (var i = 0; i < this.publicaciones.length; i++){
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
           } */

          console.log("ruta imagenes23", this.publicaciones);
          this.publicacionesCompuesta = [];
          if (vbusquedad.categoria != null) {
            this.publicaciones.forEach(element => {
              if (element.categoria == vbusquedad.categoria) {
                this.publicacionesCompuesta.push(element);
              }
            })

          } else if (vbusquedad.categoriaCambio != null) {
            validador = 1;
            this.publicaciones.forEach(element => {
              element.categoriasCambio.forEach(element2 => {
                if (element2 == vbusquedad.categoriaCambio) {
                  validador = 0;
                  this.publicacionesCompuesta.push(element);
                }
              })
            })

          }
          if (this.publicacionesCompuesta.length > 0) {
            this.publicaciones = this.publicacionesCompuesta;
          }
          if (validador == 1) {
            this.publicaciones = [];
          }
          //this.publicaciones
        });
    } else if (vbusquedad.categoria != null) {
      const queryObservable = this.af.list('/article/', {
        query: {
          orderByChild: 'categoria',
          equalTo: vbusquedad.categoria,
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          console.log(queriedItems);
          this.publicaciones = queriedItems;
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

          console.log("ruta imagenes23", this.publicaciones);

        });
    } else if (vbusquedad.categoriaCambio != null) {

      const queryObservable = this.af.list('/article/', {
        query: {
          orderByChild: 'ciudad',
          equalTo: this.ubicacion.locality,
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          console.log(queriedItems);
          this.publicaciones = queriedItems;
          this.publicaciones.forEach(element => {
            if (element.usuario != this.usuarioLoggeado.email) {
              this.publicacionesCompuesta.push(element);
            }
          })

          if (this.publicacionesCompuesta.length > 0) {
            this.publicaciones = this.publicacionesCompuesta;
            this.publicacionesCompuesta = [];
          }

          this.publicaciones.forEach(element => {
            element.categoriasCambio.forEach(element2 => {
              if (element2 == vbusquedad.categoriaCambio) {
                this.publicacionesCompuesta.push(element);
              }
            })
          })

          if (this.publicacionesCompuesta.length > 0) {
            this.publicaciones = this.publicacionesCompuesta;
          }

        });

    }
  }

  swapInfo(swap) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };

    this.nativePageTransitions.flip(options);
    let profileModal = this.modalCtrl.create(modalSearchPage, { swap: swap });
    profileModal.present();


  }





}
/**
 * Created by N56J on 13/12/2017.
 */
