import {IonicPage, ModalController} from "ionic-angular";
import {Component} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import firebase from 'firebase';
import {modalCambioPage} from "./modalCambio/modalCambio";
/**
 * Created by N56J on 17/01/2018.
 */
@IonicPage()
@Component({
  selector: 'page-cambios',
  templateUrl: 'cambios.html',
})

export class CambiosPage {


  cambios: any = [];
  rutaImagenes: any = [];
  rutaUrl: any;
  usuarioLoggeado:any;
  articuloCambios: any = [];

  constructor(
    public database: AngularFireDatabase,
    private af: AngularFireDatabase,
    public modalCtrl: ModalController

  ) {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.cargarCambios();

  }

  ionViewDidLoad() {


  }

  cargarCambios(){
    const queryObservable = this.af.list('/articulosCambiados/', {
      query: {
        orderByChild: 'uid',
        equalTo: this.usuarioLoggeado.uid,
      }
    });
    queryObservable
      .subscribe(queriedItems1 => {
        this.cambios = queriedItems1;
        for (var i = 0; i < this.cambios.length; i++){
          this.rutaImagenes = this.cambios[i].imageUrl;
          let rutaPublicacion:any = [];
          for (var j = 0; j < this.rutaImagenes.length; j++){
            firebase.storage().ref().child('ImagenesArticulos/'+ this.cambios[i].usuario + "/" + this.rutaImagenes[j]).getDownloadURL()
              .then(response => {
                this.rutaUrl = response;
                console.log("ruta", this.rutaUrl);
                rutaPublicacion.push(this.rutaUrl);
              })
              .catch(error => console.log('error', error))
          }
          this.cambios[i].imageUrl = rutaPublicacion;
        }


      });

  }

  abrirModal(publicacion){
    console.log("articulo cambiado", publicacion);
    const queryObservable = this.af.list('/articulosCambiados/', {
      query: {
        orderByChild: 'id',
        equalTo: publicacion.idArticuloCambio,
      }
    });
    queryObservable
      .subscribe(queriedItems1 => {
        this.articuloCambios = queriedItems1;
        for (var i = 0; i < this.articuloCambios.length; i++){
          this.rutaImagenes = this.articuloCambios[i].imageUrl;
          let rutaPublicacion:any = [];
          for (var j = 0; j < this.rutaImagenes.length; j++){
            firebase.storage().ref().child('ImagenesArticulos/'+ this.articuloCambios[i].usuario + "/" + this.rutaImagenes[j]).getDownloadURL()
              .then(response => {
                this.rutaUrl = response;
                console.log("ruta", this.rutaUrl);
                rutaPublicacion.push(this.rutaUrl);
              })
              .catch(error => console.log('error', error))
          }
          this.articuloCambios[i].imageUrl = rutaPublicacion;
        }
        let profileModal = this.modalCtrl.create(modalCambioPage, {publicacion: publicacion, articuloCambio: this.articuloCambios[0]});
        profileModal.present();
        console.log("articulos cambios" ,this.articuloCambios, this.cambios  );

      });

  }

}
/**
 * Created by N56J on 17/01/2018.
 */
