import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database/database";
import { swapArticulo } from "../../../models/swapArticulo";
import { RequestOptions, Headers, Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { MyApp } from "../../../app/app.component";



@IonicPage()
@Component({
  selector: 'page-swap',
  templateUrl: 'swap.html'
})

export class SwapPage {

  swapArticle = {} as swapArticulo;
  usuarioLoggeado: any;
  publicaciones: any = [];
  articuloSeleccionado: any;
  usuarioPertenece: any;
  loading: any = [];
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private af: AngularFireDatabase,
    private navParams: NavParams,
    public http: Http,
    public myapp: MyApp,
    public loadingCtrl: LoadingController,

  ) {

    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.articuloSeleccionado = navParams.get('swap');
    this.cargarDatosUsuarioPertenece(1);
    this.cargarPublicacion();

  }


  ionViewDidLoad() {

  }

  ngAfterViewInit() {
    this.myapp.submenu = false;
  }

  ionViewWillLeave(){
    this.myapp.submenu = true;
  }


  cargarPublicacion() {
    if (this.usuarioPertenece == undefined) {
       this.cargarDatosUsuarioPertenece(2);
    } else {
      const queryObservable = this.af.list('/article/', {
        query: {
          orderByChild: 'usuario',
          equalTo: this.usuarioLoggeado.email,
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          let idRegistro = JSON.parse(localStorage.getItem("idRegistro"));
          this.publicaciones = queriedItems;
          this.swapArticle.articulo = this.articuloSeleccionado.titulo;
          this.swapArticle.usuarioPertenece = this.articuloSeleccionado.usuario;
          this.swapArticle.usuarioOfrece = this.usuarioLoggeado.email;
          this.swapArticle.idRegUsuarioOfrece = idRegistro;
          this.swapArticle.idRegUsuarioPertenece = this.usuarioPertenece[0].idRegistro;

        });
    }


  };

  cargarDatosUsuarioPertenece(int) {
    const queryObservable = this.af.list('/usuarioInformacion/' + this.articuloSeleccionado.uid + '/', {
    });
    queryObservable
      .subscribe(queriedItems => {
        this.usuarioPertenece = queriedItems
        if(int == 2){
          this.cargarPublicacion();
        }
      });
      
  }

  enviar() {

    if (this.swapArticle.articulosOfrece != undefined) {
      this.loading = this.loadingCtrl.create({
        content: 'Enviando solicitud...'
      });

      this.loading.present();
      var date = new Date();
      let articuloSwap = this.af.list('/articuloSwap/');
      articuloSwap.push({
        articulo: this.swapArticle.articulo,
        usuarioPertenece: this.swapArticle.usuarioPertenece,
        usuarioOfrece: this.swapArticle.usuarioOfrece,
        articulosOfrece: this.swapArticle.articulosOfrece,
        comentario: this.swapArticle.comentario,
        idRegUsuarioPertenece: this.swapArticle.idRegUsuarioPertenece,
        idRegUsuarioOfrece: this.swapArticle.idRegUsuarioOfrece,
        uidUsuarioPertenece: this.articuloSeleccionado.uid,
        uidUsuarioOfrece: this.usuarioLoggeado.uid,
        idArticulo: this.articuloSeleccionado.id,
        fecha: date,
      }).then((snap) => {
        this.enviarNotificacionPush(this.swapArticle);
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Envio solicitud Swap',
          subTitle: 'Se ha enviado correctamente la solicitud de cambio',
          cssClass: 'alert-danger',
          buttons: [
            {
              text: 'Aceptar',
              role: 'Aceptar',
              handler: () => {
                this.navCtrl.setRoot('HomePage')
               // this.myapp.rootPage = 'HomePage';;
              }
            }
          ]
        });
        alert.present();

      })
    } else {
      this.alertCambio();
    }
  }

  alertCambio() {
    let alert = this.alertCtrl.create({
      title: 'Información importante',
      subTitle: 'Debe seleccionar un o varios artículos de cambio.',
      cssClass: 'alert-danger',
      buttons: [
        {
          text: 'Aceptar',
          role: 'Aceptar',
          handler: () => {

          }
        }
      ]
    });
    alert.present();

  }


  enviarNotificacionPush(swapArticle) {
    var json = {

      "to": swapArticle.idRegUsuarioPertenece,
      "priority": "high",
      "data": {
        "title": "Solicitud Swap",
        "body": swapArticle.comentario,
        "payload": {
          "message": swapArticle.comentario,
          "tipo": "NotificacionesPage",
          "image": "icon"
        }
      },
      "notification": {
        "sound": "default",
        "title": "Solicitud Swap",
        "message": "pruebaMensaje",
        "body": swapArticle.comentario,
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


  }



  async publish() {
    this.navCtrl.push('PublishPage')
  }
  // IMPORTANTE: EN EL MOMENTO SOLO PARA PRUEBAS ESTE METODO
  enviarNotificacionPushSwap() {
    var json = {

      "to": "c2p3gHwiduE:APA91bG_rdv7Z69ehkCh_28OqmRfwhF9Il7CyDw7lMTmIQZLiXYQq70UoYFqZ1Y_CEABv1oUdBR0vw7yjI_0Idl0z8mrwLOzQ_cSBtQIgsOksRF0UGhdMiPtaEBkHUwuvkdTLBluG-jK",
      "data": {
        "title": "Solicitud Swap",
        "body": "Solicitud Swap",
        "payload": {
          "message": "Solicitud Swap",
          "tipo": "ChatPage",
          "image": "icon"
        }
      },
      "notification": {
        "sound": "default",
        "title": "Solicitud Swap",
        "message": "pruebaMensaje",
        "body": "Solicitud Swap",
        "click_action": "FCM_PLUGIN_ACTIVITY",
      },

    };
    /*
      var json = {
  
        "to":"f48XUA5lbw0:APA91bFv6-JKzkod8OisbWbS2r8n6M09PMxpZqgrCsM-qnoEIhFZNxttxLuvig0-MI84V-oE6wKMlAd1gqqrcSgpoTnmirKoZNFOvkRaN4ru3M79MemF3hCyldJwqX5se8nv5xci58Mx",
        "priority": "high",
        "show_in_foreground": true,
        "badge":"true",
        "sound":"true",
        "alert":"true",
        "content_available": true,
        "click_action":"ChatPage",
        "vibrate":"true",
         "notification": {
          "message": "test message",
          "sound":"default",
          "title": "Solicitud Swap",
          "body": "prueba notificacion 3",
          "icon": "fcm_push_icon",
          "tipo": "swapSolicitud",
  
        },
        "data": {
          "title": "mensaje Swap",
          "body": "prueba notificacion 1",
          "message": "prueba notificacion 5",
          "payload": {
            "message": "ChatPage",
            "tipo": "swapSolicitud",
            "image": "icon"
          }
        },
      };*/
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


  }


}
/**
 * Created by N56J on 18/12/2017.
 */



