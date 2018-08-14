import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, AlertController, Events } from 'ionic-angular';
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
  conversaciones: any = [];
  conversaciones2: any = [];
  conversacionesGeneral: any = [];
  name: any;
  msgVal: string = '';
  chatActual1: any;
  mostrar: boolean;
  tipoChat: boolean;
  mostrarCerrar: boolean;
  usuarioLoggeado: any;
  tipoChatEnvio: any;
  payload: any;
  cont: any;

  constructor(
    public database: AngularFireDatabase,
    private af: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public myapp: MyApp,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private events: Events

  ) {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.cont = 1;
    this.events.subscribe('contador', (calificacion) => {
      console.log("se activo evento");
      this.cont = 1;
    });
    this.busquedaListaChat();

  }

 
  ionViewDidLoad() {
    this.tipoChatEnvio = 1;
    this.chatActual1 = this.navParams.get('datosChat1');
    this.payload = this.navParams.get('payload');
    //let entraIf: any;
    if (this.payload != null) {
      this.busquedaListaChat();
    }
    if (this.chatActual1 == null || this.chatActual1 == undefined) {
      this.busquedaListaChat();
   
    } else if (this.chatActual1 != null || this.chatActual1 != undefined) {
      let profileModal = this.modalCtrl.create(ChatModalPage, { datosChat: this.chatActual1,tipoChatEnvio: this.tipoChatEnvio });
      profileModal.present();
    }

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
        this.conversaciones = [];
        this.conversaciones = queriedItems;
        if(this.conversaciones.length > 0){
          this.tipoChat = true;
        }
      });

    const queryObservable2 = this.af.list('/chatPrincipal/', {
      query: {
        orderByChild: 'usuarioPertenece',
        equalTo: this.usuarioLoggeado.email,
      }
    });
    queryObservable2
      .subscribe(queriedItems2 => {
        this.conversaciones2 = [];
        this.conversaciones2 = queriedItems2;
        if(this.conversaciones2.length > 0){
          this.tipoChat = true;
        }
      });

  }

  cargarChat(conversacion) {
    if (this.cont == 1) {
      this.cont = this.cont + 1;
      this.tipoChatEnvio = 2;
      const queryObservable = this.af.list('/chatContenido' + "/" + conversacion.idChat + "/", {
        query: {
          limitToLast: 300
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          this.items = queriedItems;
          if (this.items != null) {
            this.myapp.submenu = true;
            this.mostrar = true;
            let paginaActual = JSON.parse(localStorage.getItem("paginaActual"));
            if (paginaActual != "ModalCmp") {
              let profileModal = this.modalCtrl.create(ChatModalPage, { conversacion: this.items, tipoChatEnvio: this.tipoChatEnvio, mostrar: this.mostrar, chatActual:conversacion });
              profileModal.present();
            }

          } else {
            this.mostrar = false;
          }
        });

    }
  }

}
