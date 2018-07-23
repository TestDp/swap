import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase, } from 'angularfire2/database';
import { RequestOptions, Headers, Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { MyApp } from "../../app/app.component";
import { ChatModalPage } from './modalChat/modalChat';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  styles: ['chat.scss']
})

export class ChatPage {


  items: any = []; // FirebaseListObservable<any>;
  items2: FirebaseListObservable<any>;
  conversaciones: any = [];
  conversaciones2: any = [];
  conversacionesGeneral: any = [];
  name: any;
  msgVal: string = '';
  chatActual: any;
  chatActual1: any;
  mostrar: boolean;
  tipoChat: boolean;
  mostrarCerrar: boolean;
  usuarioLoggeado: any;
  tipoChatEnvio: any;
  payload: any;

  constructor(
    public database: AngularFireDatabase,
    private af: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public myapp: MyApp,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,

  ) {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.chatActual = this.navParams.get('datosChat');
    this.chatActual1 = this.navParams.get('datosChat1');
    if ((this.chatActual == null && this.chatActual1 == null) || (this.chatActual == undefined && this.chatActual1 == undefined)) {
      this.busquedaListaChat();
      this.tipoChat = true;
    }/* else if (this.chatActual1 != null || this.chatActual1 != undefined) {
      let profileModal = this.modalCtrl.create(ChatModalPage, { datosChat: this.chatActual1});
    }*/else {
      this.tipoChat = false;
    }

  }

  chatSend() {

    var formatDate = new Date(); //IMPORTANTE: POR EL MOMENTO ES PRUEBA
    var date = formatDate.toISOString();
    if (this.tipoChatEnvio == 2) {
      this.items = this.af.list('/chatContenido' + "/" + this.chatActual.idChat + "/", {
      });
    } else {
      this.items = this.af.list('/chatContenido' + "/" + this.chatActual.idRegUsuarioOfrece + this.chatActual.idRegUsuarioPertenece + "/", {
      });
    }

    this.items.push({ mensaje: this.msgVal, usuario: this.usuarioLoggeado.email, fecha: date });
    this.mostrar = true;

    this.enviarNotificacionPush();
    this.msgVal = '';
  }

  ngAfterViewInit() {

    this.myapp.submenu = true;
    //let currentPage = this.navCtrl.getActive().name;
    //localStorage.setItem("paginaActual", JSON.stringify((currentPage)));
  }

  ionViewDidLoad() {
    this.tipoChatEnvio = 1;
    this.chatActual = this.navParams.get('datosChat');
    this.chatActual1 = this.navParams.get('datosChat1');
    this.payload = this.navParams.get('payload');
    //let entraIf: any;
    if (this.payload != null) {
      this.busquedaListaChat();
    }
    if (this.chatActual != null || this.chatActual != undefined) {
      console.log("datos chat 2", this.chatActual);
      this.items2 = this.af.list('/chatPrincipal' + "/", {
        query: {
          limitToLast: 7
        }
      });
      this.items2.remove();
      this.items2.push({
        articulo: this.chatActual.articulo, usuarioOfrece: this.chatActual.usuarioOfrece, usuarioPertenece: this.chatActual.usuarioPertenece,
        idChat: this.chatActual.idRegUsuarioOfrece + this.chatActual.idRegUsuarioPertenece, uidUsuarioPertenece: this.chatActual.uidUsuarioPertenece,
        uidUsuarioOfrece: this.chatActual.uidUsuarioOfrece
      });

      const queryObservable = this.af.list('/chatContenido' + "/" + this.chatActual.idRegUsuarioOfrece + this.chatActual.idRegUsuarioPertenece + "/", {
        query: {
          limitToLast: 300
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          console.log(queriedItems);
          this.items = queriedItems;
          if (this.items != null) {
            this.mostrar = true;
          } else {
            this.mostrar = false;
          }
        });

    } else if (this.chatActual1 != null || this.chatActual1 != undefined) {
      let profileModal = this.modalCtrl.create(ChatModalPage, { datosChat: this.chatActual1 });
      profileModal.present();
    }

  }



  enviarNotificacionPush() {

    var uid;
    if (this.usuarioLoggeado.uid == this.chatActual.uidUsuarioPertenece) {
      uid = this.chatActual.uidUsuarioOfrece
    } else if (this.usuarioLoggeado.uid == this.chatActual.uidUsuarioOfrece) {
      uid = this.chatActual.uidUsuarioPertenece
    }
    const queryObservable = this.af.list('/usuarioInformacion/' + uid + '/', {
    });
    queryObservable
      .subscribe(queriedItems => {
        var usuarioPertenece = queriedItems;
        var idRegistro = usuarioPertenece[0].idRegistro;
        var json = {

          "to": idRegistro,
          "priority": "high",
          "data": {
            "title": "mensaje Swap",
            "body": this.msgVal,
            "payload": {
              "message": this.msgVal,
              "tipo": "ChatPage",
              "image": "icon",
              "idChat": this.chatActual.idChat,
            }
          },
          "notification": {
            "sound": "default",
            "title": "Chat Swap",
            "message": "pruebaMensaje",
            "body": this.msgVal,
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
            
            console.log(data);
          });
      });


  }

  busquedaListaChat() {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    const queryObservable = this.af.list('/chatPrincipal/', {
      query: {
        orderByChild: 'usuarioOfrece',
        equalTo: this.usuarioLoggeado.email,
      }
    });
    queryObservable
      .subscribe(queriedItems => {
        this.conversaciones = queriedItems;
      });

    const queryObservable2 = this.af.list('/chatPrincipal/', {
      query: {
        orderByChild: 'usuarioPertenece',
        equalTo: this.usuarioLoggeado.email,
      }
    });
    queryObservable2
      .subscribe(queriedItems2 => {
        this.conversaciones2 = queriedItems2;
      });

  }

  cargarChat(conversacion) {
    console.log("mensaje de chat nuevo ", conversacion);
    this.tipoChatEnvio = 2;
    this.chatActual = conversacion;
    const queryObservable = this.af.list('/chatContenido' + "/" + conversacion.idChat + "/", {
      query: {
        limitToLast: 300
      }
    });
    queryObservable
      .subscribe(queriedItems => {
        console.log(queriedItems);
        this.items = queriedItems;
        if (this.items != null) {
          this.myapp.submenu = true;
          this.mostrar = true;
          // this.tipoChat = false;
          //this.mostrarCerrar = true;
          let paginaActual = JSON.parse(localStorage.getItem("paginaActual"));
          if (paginaActual != "ModalCmp") {
            let profileModal = this.modalCtrl.create(ChatModalPage, { conversacion: this.items, chatActual: this.chatActual, tipoChatEnvio: this.tipoChatEnvio, mostrar: this.mostrar });
            profileModal.present();
          }

        } else {
          this.mostrar = false;
        }
      });

  }

}
/**
 * Created by N56J on 29/11/2017.
 */

/**
 * Created by N56J on 29/12/2017.
 */
