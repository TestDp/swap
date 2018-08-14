import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, Content, Platform, Events } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase, } from 'angularfire2/database';
import { RequestOptions, Headers, Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { MyApp } from '../../../app/app.component';

@Component({
  selector: 'page-chatModal',
  templateUrl: 'modalChat.html',
  styles: ['modalChat.scss']
})

export class ChatModalPage {


  @ViewChild(Content) content: Content;
  @ViewChild('scroll') scroll: any;
  @ViewChild('input') myInput;
  conversaciones: any = [];
  conversaciones2: any = [];
  usuarioLoggeado: any;
  usuario: any;
  msgVal: string = '';
  chatActual: any;
  tipoChatEnvio: any;
  mostrar: boolean;
  chatActual1: any;
  items2: FirebaseListObservable<any>;
  contador: any;
  constructor(
    public database: AngularFireDatabase,
    private af: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    private params: NavParams,
    public myapp: MyApp,
    private view: ViewController,
    public platform: Platform,
    private events: Events

  ) {

    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.contador = 0;
    platform.registerBackButtonAction(() => {
      localStorage.setItem("paginaActual", JSON.stringify(("ChatPage")));
      this.events.publish("contador");
      this.view.dismiss();

    }, 1);

  }

  ionViewDidLoad() {
    this.cargarInformacionUsuario();
    this.tipoChatEnvio = this.params.data.tipoChatEnvio;
    if (this.tipoChatEnvio == 1) {
      this.chatActual1 = this.params.data.datosChat;
      this.mostrar = false;
      this.crearChat();
    } else if (this.tipoChatEnvio == 2) {
      this.conversaciones = this.params.data.conversacion;
      this.mostrar = this.params.data.mostrar;
      this.chatActual = this.params.data.chatActual;
      setTimeout(() => {
        this.content.scrollToBottom(0);
      }, 50);

      this.myInput.setFocus();
    }
  }




  crearChat() {
    this.validarChat().then(respuesta => {
      let ida = this.chatActual1.idArticulo.replace('.','');
      if (respuesta === "P") {
        const queryObservable = this.af.list('/chatContenido' + "/" + this.chatActual1.uidUsuarioOfrece + this.chatActual1.uidUsuarioPertenece + ida + "/", {
          query: {
            limitToLast: 300
          }
        });
        queryObservable
          .subscribe(queriedItems => {
            this.conversaciones = [];
            this.conversaciones = queriedItems;
            if (this.conversaciones != null) {
              this.mostrar = true;
            } else {
              this.mostrar = false;
            }
          });
      } else if (respuesta === "F") {
        this.items2 = this.af.list('/chatPrincipal' + "/", {
          query: {
            limitToLast: 1
          }
        });
        this.items2.push({
          articulo: this.chatActual1.articulo,
          usuarioOfrece: this.chatActual1.usuarioOfrece,
          usuarioPertenece: this.chatActual1.usuarioPertenece,
          idChat: this.chatActual1.uidUsuarioOfrece + this.chatActual1.uidUsuarioPertenece + ida,
          uidUsuarioPertenece: this.chatActual1.uidUsuarioPertenece,
          uidUsuarioOfrece: this.chatActual1.uidUsuarioOfrece
        });

        const queryObservable = this.af.list('/chatContenido' + "/" + this.chatActual1.uidUsuarioOfrece + this.chatActual1.uidUsuarioPertenece + ida + "/", {
          query: {
            limitToLast: 300
          }
        });
        queryObservable
          .subscribe(queriedItems => {
            this.conversaciones = [];
            this.conversaciones = queriedItems;
            if (this.conversaciones != null) {
              this.mostrar = true;
            } else {
              this.mostrar = false;
            }
          });

      }
    })


  }

  validarChat() {
    return new Promise((resolve, reject) => {
      let ida = this.chatActual1.idArticulo.replace('.','');
      const queryObservable = this.af.list('/chatPrincipal/', {
        query: {
          orderByChild: 'idChat',
          equalTo: this.chatActual1.uidUsuarioOfrece + this.chatActual1.uidUsuarioPertenece + ida,
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          let respuestaF = queriedItems;
          if (respuestaF.length > 0) {
            resolve("P");
          } else {
            resolve("F");
          }

        });
    });
  }

  chatSend() {

    let id;
    var formatDate = new Date(); //IMPORTANTE: POR EL MOMENTO ES PRUEBA
    var date = formatDate.toISOString();
    if (this.tipoChatEnvio == 2) {
      this.conversaciones2 = this.af.list('/chatContenido' + "/" + this.chatActual.idChat + "/", {
      });
      id = this.chatActual.idChat;
    } else if (this.tipoChatEnvio == 1) {
      let ida = this.chatActual1.idArticulo.replace('.','');
      id = this.chatActual1.uidUsuarioOfrece + this.chatActual1.uidUsuarioPertenece + ida;
      this.conversaciones2 = this.af.list('/chatContenido' + "/" + this.chatActual1.uidUsuarioOfrece + this.chatActual1.uidUsuarioPertenece + ida + "/", {
      });
     
    }

    this.conversaciones2.push({ mensaje: this.msgVal, usuario: this.usuarioLoggeado.email, fecha: date, nombre: this.usuario[0].nombre });
    this.mostrar = true;
    this.msgVal = '';
    this.actualizarConversacion(id);
    this.enviarNotificacionPush();

  }

  actualizarConversacion(id) {
    const queryObservable = this.af.list('/chatContenido' + "/" + id + "/", {
      query: {
        limitToLast: 300
      }
    });
    queryObservable
      .subscribe(queriedItems => {
        this.conversaciones = [];
        this.conversaciones = queriedItems;

      });

  }

  cerrarChat() {
    this.myapp.submenu = true;
    localStorage.setItem("paginaActual", JSON.stringify(("ChatPage")));
    this.view.dismiss();
    this.events.publish("contador");
  }

  onFocusList() {
    if (this.contador == 0) {
      var element = document.getElementById('idLista');
      element.setAttribute('class', 'listScroll');
      this.contador = 1;
    } else if (this.contador == 1) {
      var element = document.getElementById('idLista');
      element.setAttribute('class', 'listScroll2');
      setTimeout(() => {
        this.content.scrollToBottom(0);
      }, 1);
      this.contador = 0;
    }

  }
  onFocusList2(input) {
    input.setFocus();
  }

  ngAfterViewInit() {
    let currentPage = this.navCtrl.getActive().name;
    localStorage.setItem("paginaActual", JSON.stringify((currentPage)));
  }

  enviarNotificacionPush() {

    var uid;
    if (this.usuarioLoggeado.uid == this.chatActual.uidUsuarioPertenece) {
      uid = this.chatActual.uidUsuarioOfrece;
    } else if (this.usuarioLoggeado.uid == this.chatActual.uidUsuarioOfrece) {
      uid = this.chatActual.uidUsuarioPertenece;
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
            //post doesn't fire if it doesn't get subscribed to

          });
      });


  }

  cargarInformacionUsuario() {
    const queryObservable = this.af.list('/usuario/', {
      query: {
        orderByChild: 'email',
        equalTo: this.usuarioLoggeado.email,
      }
    });
    queryObservable.subscribe(queriedItems => {
      this.usuario = queriedItems;
    })

  }



}
/**
 * Created by N56J on 29/11/2017..
 */

/**
 * Created by N56J on 29/12/2017.
 */
