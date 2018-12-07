import { Component } from '@angular/core';
import { NavParams, ViewController, Events, NavController, ModalController, AlertController } from "ionic-angular";
import { RequestOptions, Headers, Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from "angularfire2/database/database";
import { FirebaseListObservable } from "angularfire2/database/firebase_list_observable";
import { MyApp } from "../../../app/app.component";



@Component({
  selector: 'page-modalNotificaciones',
  templateUrl: 'modalNotificaciones.html',
})
export class modalNotificacionesPage {
  data: any = {};
  publicacion: any = {};
  articulo: any = {};
  articulosBorrar: any = {};
  historialArticulo: FirebaseListObservable<any[]>;
  articuloEstado: any;
  constructor(private params: NavParams, private view: ViewController, private events: Events, public navCtrl: NavController,
    public http: Http, private af: AngularFireDatabase, public myapp: MyApp, public modalCtrl: ModalController,
    public alertCtrl: AlertController, ) {
  }

  ionViewDidLoad() {
    this.data = this.params.data.articulo;
    this.publicacion = this.params.data.publicacion;
    console.log("publicacion cambio", this.publicacion);

  }

  confirmarCambio() {
    this.validarDisponibilidadArticulos().then(Response => {
      if (Response === "D") {

        this.modificarArticuloCambio();
        this.modificarArticuloSwap();

        const queryObservable = this.af.list('/usuarioInformacion/' + this.publicacion.uidUsuarioOfrece + '/', {
        });
        queryObservable

          .subscribe(queriedItems => {

            var usuarioOfrece = queriedItems;
            var idRegistro = usuarioOfrece[0].idRegistro;
            var json = {

              "to": idRegistro,
              "priority": "high",
              "data": {
                "title": "Confirmación cambio Swap",
                "body": "se confirma cambio de articulo Swap",
                "payload": {
                  "message": "se confirma cambio de articulo Swap",
                  "tipo": "CambiosPage",
                  "idArticuloCambio": this.data.id,
                  "idArticuloSwap": this.publicacion.idArticulo,
                  "image": "icon"
                }
              },
              "notification": {
                "sound": "default",
                "title": "Confirmación cambio Swap",
                "message": "pruebaMensaje",
                "body": "se confirma cambio de articulo Swap",
                "click_action": "FCM_PLUGIN_ACTIVITY",
              },
            };
            let apikey = "AAAAd2_6fnY:APA91bFdS2qkdHpev2U758YzNzRXUEkdYfepIq4HYjH5bkdJkhBzt8KVh-PdCNbeUybLSWGJ_teAsbAj7xqrKViBPeFH3gWZsubnOFbDqBJCypoggY_09ytvxibJ5_pab_lakOzkaljq";
            let url = 'https://fcm.googleapis.com/fcm/send';
            let headers: Headers = new Headers({
              'Content-Type': 'application/json',
              'Authorization': 'key=' + apikey
            });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(url, json, options)
              .map(response => {
                return response;
              }).subscribe(data => {
                //post doesn't fire if it doesn't get subscribed to
                console.log(data);
              });
          });
        alert("Cambio exitoso");
        this.navCtrl.pop();
        this.events.publish("cambioExitoso");

      } else if (Response === "C") {
        this.alertCtrl.create({
          title: 'Información',
          subTitle: 'Este artículo ya fue intercambiado. ',
          buttons: ['Aceptar']
        }).present();

      }
    })


  }

  modificarArticuloCambio() {
    let int = 1;
    const queryObservable = this.af.list('/article/', {
      query: {
        orderByChild: 'id',
        equalTo: this.data.id,
      }
    });
    queryObservable
      .subscribe(queriedItems => {
        if (int == 1) {
          this.articulo = queriedItems;
          this.historialArticulo = this.af.list('/articulosCambiados/');
          this.historialArticulo.push({
            titulo: this.articulo[0].titulo,
            descripcion: this.articulo[0].descripcion,
            usuario: this.articulo[0].usuario,
            categoria: this.articulo[0].categoria,
            categoriasCambio: this.articulo[0].categoriasCambio,
            imageUrl: this.articulo[0].imageUrl,
            estado: "C",
            imageThumb: this.articulo[0].imageThumb,
            ciudad: this.articulo[0].ciudad,
            uid: this.articulo[0].uid,
            id: this.articulo[0].id,
            idArticuloCambio: this.publicacion.idArticulo,
          }).then((snap) => {
            this.eliminarArticuloIntercambiado1();

          })

        }
        int = int + 1;
      });

  }
  modificarArticuloSwap() {
    let int = 1;
    const queryObservable = this.af.list('/article/', {
      query: {
        orderByChild: 'id',
        equalTo: this.publicacion.idArticulo,
      }
    });
    queryObservable
      .subscribe(queriedItems => {

        if (int == 1) {
          this.articulo = queriedItems;
          this.historialArticulo = this.af.list('/articulosCambiados/');
          this.historialArticulo.push({
            titulo: this.articulo[0].titulo,
            descripcion: this.articulo[0].descripcion,
            usuario: this.articulo[0].usuario,
            categoria: this.articulo[0].categoria,
            categoriasCambio: this.articulo[0].categoriasCambio,
            imageUrl: this.articulo[0].imageUrl,
            estado: "C",
            //pais: this.articulo[0].pais,
            imageThumb: this.articulo[0].imageThumb,
            ciudad: this.articulo[0].ciudad,
            uid: this.articulo[0].uid,
            id: this.articulo[0].id,
            idArticuloCambio: this.data.id,
          }).then((snap) => {
            this.eliminarArticuloIntercambiado2();

          })

        }
        int = int + 1;
      });


  }
  eliminarArticuloIntercambiado1() {
    const queryObservable = this.af.list('/article/', {
      query: {
        orderByChild: 'id',
        equalTo: this.data.id,
      }
    })
    queryObservable.subscribe(queriedItems => {
      let updateArticulo = this.af.database.ref('/article/' + queriedItems[0].$key + '/');
      updateArticulo.update({
        estado: "C"
      });
    })

    const queryObservable1 = this.af.list('/articuloSwap/', {
      query: {
        orderByChild: 'idArticulo',
        equalTo: this.publicacion.idArticulo,
      }
    })
    queryObservable1.subscribe(queriedItems => {
      this.articulosBorrar = queriedItems;
      this.articulosBorrar.forEach(element => {
        const queryObservable2 = this.af.list('/articuloSwap/' + element.$key + '/');
        queryObservable2.remove();
      });

    })

  }

  eliminarArticuloIntercambiado2() {
    const queryObservable = this.af.list('/article/', {
      query: {
        orderByChild: 'id',
        equalTo: this.publicacion.idArticulo,
      }
    });
    queryObservable.subscribe(queriedItems => {
      let updateArticulo = this.af.database.ref('/article/' + queriedItems[0].$key + '/');
      updateArticulo.update({
        estado: "C"
      });

    })

  }

  swapiar(swapArticle) {
    // localStorage.setItem("chatActual", JSON.stringify((this.publicacion)));
    //console.log("prueba borrar", swapArticle)
    this.navCtrl.push('ChatPage', { datosChat1: this.publicacion });


  }

  validarDisponibilidadArticulos() {
    return new Promise((resolve, reject) => {
      const queryObservable = this.af.list('/article/', {
        query: {
          orderByChild: 'id',
          equalTo: this.publicacion.idArticulo
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          this.articuloEstado = queriedItems;

          if (this.articuloEstado[0].estado === "C") {
            resolve("C");
          } else {
            resolve("D");
          }

        });
    });
  }

  closeModal() {
    this.view.dismiss();
  }

}/**
 * Created by N56J on 27/12/2017.
 */
