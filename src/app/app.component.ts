//import { User } from './../models/user';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, AlertController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { NativeGeocoder, NativeGeocoderReverseResult } from "@ionic-native/native-geocoder";
import { Geolocation } from '@ionic-native/geolocation';
import { FCM } from "@ionic-native/fcm";
import { AngularFireDatabase } from "angularfire2/database/database";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Badge } from '@ionic-native/badge';
//import firebase from 'firebase';
//import * as admin from "firebase-admin";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  platform: any;

  @ViewChild(Nav) nav: Nav;
  notificacion: any = [];
  payload: any = [];
  rootPage: any;
  submenu: boolean;
  reader: any;
  mensajeBienvenidad: boolean;
  mensajeBienvenidad2: boolean;
  mensajeBienvenidad3: boolean;
  publicacion: any = [];
  usuarioLoggeado: any;
  planUsuario: any = [];
  alert: any;

  constructor(platform: Platform,
    private afAuth: AngularFireAuth,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public alertCtrl: AlertController,
    public fcm: FCM,
    private af: AngularFireDatabase,
    private iab: InAppBrowser,
    private badge: Badge,
  ) {
    this.mensajeBienvenidad = true;
    this.mensajeBienvenidad2 = true;
    this.mensajeBienvenidad3 = true;
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    if (this.usuarioLoggeado != null && this.usuarioLoggeado != "") {
      this.validarPlanUsuario();
    }
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = 'HomePage';
        this.submenu = true;
      } else {
        this.rootPage = 'SignInPage';
        this.submenu = false;
      }
    });

    platform.ready().then(() => {
      this.reader = new FileReader();


      this.fcm.subscribeToTopic('all');

      this.fcm.getToken().then((token: string) => {
        localStorage.setItem("idRegistro", JSON.stringify((token)));

      })


      fcm.onNotification().subscribe(data => {
        localStorage.setItem("payload", JSON.stringify((data)));
        if (!data.wasTapped) {

          this.badge.clear();
          let paginaActual = JSON.parse(localStorage.getItem("paginaActual"));
          let prueba = JSON.parse(data.payload);
          console.log("alerta 1", JSON.stringify((data)));
          if (this.alert == undefined) {
            this.alert = this.alertCtrl.create({
              title: data.title,
              subTitle: data.title,
              cssClass: 'alert-danger',
              buttons: [
                {
                    text: 'Aceptar',
                    handler: () => {
                        this.cerrarAlert();
                    }
                },
                
            ]
            });
          }

         
          console.log("pagina actual", paginaActual);
          if (paginaActual != "ModalCmp") {
            if (this.alert != undefined) {
              this.alert.present();
            }
            if (prueba.tipo == "NotificacionesPage") {
              this.rootPage = 'NotificacionesPage';
            } else if (prueba.tipo == "ChatPage") {
              this.rootPage = 'ChatPage';
            } else if (prueba.tipo == "CambiosPage") {
              this.rootPage = 'CambiosPage';
            }
          }



        } else if (data.wasTapped) {
          let prueba = JSON.parse(data.payload);
          if (prueba.tipo == "NotificacionesPage") {
            this.rootPage = 'NotificacionesPage';
          } else if (prueba.tipo == "ChatPage") {
            this.rootPage = 'ChatPage';
          } else if (prueba.tipo == "CambiosPage") {
            this.rootPage = 'CambiosPage';
          }

        }





      })

      this.fcm.onTokenRefresh().subscribe(token => {
        localStorage.setItem("idRegistro", JSON.stringify((token)));
      })

      fcm.unsubscribeFromTopic('all');
      statusBar.styleDefault();
      splashScreen.hide();
      this.obtenerUbicacion();
    });


  }

  setRootPage(rootSet: string): void {
    this.rootPage = rootSet;
  }

  cerrarAlert(){
    this.alert.dismiss();
    this.alert = undefined;
  }

  async publicaciones() {
    this.submenu = true;
    //this.rootPage = 'PublitacionsPage';
    this.nav.push('PublitacionsPage');
  }

  async notificaciones() {
    this.submenu = true;
    //this.rootPage = 'NotificacionesPage';
    this.nav.push('NotificacionesPage');
  }

  async conversaciones() {
    this.submenu = true;
    //this.rootPage = 'ChatPage';
    this.nav.push('ChatPage');
  }
  async cambios() {
    //this.rootPage = 'CambiosPage';
    this.nav.push('CambiosPage');
  }
  async inicio() {
    this.submenu = true;
    this.nav.setRoot('HomePage');
  }
  async publicar() {
    this.submenu = true;
    this.validarPublicaciones();

  }

  async busqueda() {
    this.submenu = true;
    //this.rootPage = 'SearchPage';
    this.nav.push('SearchPage');
  }

  // Logout de usuario
  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.rootPage = 'SignInPage';
    })
  }

  async resetPassword() {


    try {
      let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
      this.afAuth.auth.sendPasswordResetEmail(usuarioLoggeado.email).then(userIn => {
        this.alertCtrl.create({
          title: 'Envio Exitoso',
          subTitle: 'Se envio mensaje para reestablecer la contraseña al correo :'.concat(usuarioLoggeado.email),
          buttons: ['Ir a Sing IN']
        }).present();
      }).catch(mensaje => {
        this.alertCtrl.create({
          title: 'Información',
          subTitle: 'No se pudo realizar el cambio de contraseña',
          buttons: ['Volver a intentar']
        }).present();
      })
    }
    catch (error) {
      this.alertCtrl.create({
        title: 'Información',
        subTitle: 'No se pudo realizar el cambio de contraseña',
        buttons: ['Volver a intentar']
      }).present();


    }
  }

  async disabledCount() {
    /* let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
     let disabled = admin.auth().updateUser(usuarioLoggeado.uid, { disabled: true }); 
     disabled.then(respuesta =>{
       console.log("respuesta disable",respuesta);
     }) */
  }

  obtenerUbicacion() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.obtenerCiudad(resp);
    }).catch((error) => {
      console.log('Error getting location', error);

    });

  }

  obtenerCiudad(resp) {

    this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
      .then((result: NativeGeocoderReverseResult) => {

        //alert("respuesta reverseGeocode" + result);
        localStorage.setItem("ubicacion", JSON.stringify((result)));
      }
      )
      .catch((error: any) => console.log(error));

  }

  validarPublicaciones() {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    if (this.planUsuario.length == 0) {
      const queryObservable = this.af.list('/article/', {
        query: {
          orderByChild: 'usuario',
          equalTo: this.usuarioLoggeado.email,
        }
      });

      queryObservable
        .subscribe(queriedItems => {
          this.publicacion = queriedItems;
          if (this.publicacion.length >= 5) {
            let alert = this.alertCtrl.create({
              title: 'Mensaje informativo ',
              subTitle: 'Has utilizado tus 5 publicaciones gratuitas, para seguir haciendolo ilimitadamente adquiere una membresia de 6 meses',
              cssClass: 'alert-danger2',
              buttons: [
                {
                  text: 'Cancelar',
                  role: 'cancel',
                  handler: () => {

                  }
                },
                {
                  text: 'Subcribirme',
                  handler: () => {
                    this.realizarPago();
                  }
                }
              ]
            });
            alert.present();
          } else {
            this.nav.push('PublishPage');
            //this.rootPage = 'PublishPage';
          }

        });

    } else {
      //this.rootPage = 'PublishPage';
      this.nav.push('PublishPage');
    }

  }

  validarPlanUsuario() {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    const queryObservable = this.af.list('/planesPago/', {
      query: {
        orderByChild: 'uid',
        equalTo: this.usuarioLoggeado.uid,
      }
    });

    queryObservable
      .subscribe(queriedItems => {
        this.planUsuario = queriedItems;

      });

  }


  realizarPago() {
    // this.rootPage = 'PagoPage';
    this.nav.push('PagoPage');

  }

  terminos() {
    const browser = this.iab.create("http://www.swaphappiness.com/politicas/");
  }


}

