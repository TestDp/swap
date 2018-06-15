import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, ModalController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { modalHomePage } from "./modal/modalHome";
import { Http } from '@angular/http';
import { MyApp } from '../../app/app.component';
import { LocationAccuracy } from '@ionic-native/location-accuracy';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  user = {} as User;
  Usuarios: FirebaseListObservable<any>;
  usuarioLoggeado: any;
  publicaciones: any = [];
  rutaImagenes: any = [];
  rutaUrl: any;
  busqueda: any;
  yaIngrese: boolean;
  planUsuario: any = [];
  publicacion: any = [];
  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public af: AngularFireDatabase,
    public formBuilder: FormBuilder,
    private nativePageTransitions: NativePageTransitions,
    public modalCtrl: ModalController,
    private navParams: NavParams,
    public http: Http,
    public MyApp: MyApp,
    private locationAccuracy: LocationAccuracy

  ) {
    let payl = JSON.parse(localStorage.getItem("payload"));
    localStorage.setItem("payload", JSON.stringify(("")));
    if (payl != null && payl != null && payl != "") {
      let paylP = JSON.parse(payl.payload);
      this.navCtrl.push(paylP.tipo, { payload: paylP });
    }
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.cargarPublicaciones();
    this.yaIngrese = false;
    this.enableLocation();
    if (this.usuarioLoggeado != null && this.usuarioLoggeado != "") {
      this.validarPlanUsuario();
    }
  }

  ngAfterViewInit() {
    let currentPage = this.navCtrl.getActive().name;
    localStorage.setItem("paginaActual", JSON.stringify((currentPage)));
  }

  enableLocation() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      console.log("estado gps", canRequest);
      if (canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () =>// alert('Gps activado correctamente.'),
            error => alert('Se presento un error al activar posicion.' + JSON.stringify(error))
        );
      }

    });
  }
  changePassword() {
    this.navCtrl.push('ChangepassPage');
  }

  logOutUser(): void {
    this.afAuth.auth.signOut();
    this.navCtrl.push('SignInPage');

  }

  alertVerifyDisableUser(): void {
    this.alertCtrl.create({
      title: 'Eliminar Usuario',
      message: '¿Está seguro que desea eliminar la cuenta?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'Aceptar',
        handler: () => {
          this.disableUser();
          this.navCtrl.push('SignInPage');
          console.log('Aceptar clicked');
        }
      }]
    }).present();
  }

  disableUser(): void {
    var user = firebase.auth().currentUser;
    //var emailCurrentUser = (user.email).toLowerCase();
    // this.Usuarios.subscribe(ListaUsuarios => {
    //   ListaUsuarios.forEach(usuario => {
    //     var minUsuario = (usuario.email).toLowerCase();
    //     if (minUsuario == emailCurrentUser) {
    //       this.Usuarios.update(usuario.$key,{
    //         estado: "D"
    //       })
    //     }
    //   });
    // });
    user.delete().then(function () {
      console.log('Usuario eliminado con exito');
    }, function (error) {
      console.log('No fue posible eliminar el usuario');
    });
  }


  ionViewDidLoad() {
    /*  let payl = JSON.parse(localStorage.getItem("payload"));
      localStorage.setItem("payload", JSON.stringify(("")));
      if(payl != null && payl != null && payl != ""){
          let paylP =  JSON.parse(payl.payload);
          this.navCtrl.push(paylP.tipo,  { payload: paylP });
      } */

    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid && this.MyApp.mensajeBienvenidad3 == true) {
        this.MyApp.mensajeBienvenidad3 = false;
        this.toast.create({
          message: 'Bienvenido a SWAP  '.concat(data.email),
          duration: 3000
        }).present();

      }
      localStorage.setItem("usuarioLoggeado", JSON.stringify(data));
      let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
      let idRegistro = JSON.parse(localStorage.getItem("idRegistro"));
      let usuarioInfo = this.af.list('/usuarioInformacion/' + usuarioLoggeado.uid + '/');
      usuarioInfo.remove();
      usuarioInfo.push({
        idRegistro: idRegistro,
      })


    });

    if (this.MyApp.mensajeBienvenidad == true && this.MyApp.mensajeBienvenidad2 == true) {
      this.MyApp.mensajeBienvenidad = false;
      let alert = this.alertCtrl.create({
        title: 'Mensaje bienvenida',
        subTitle: 'bienvenido a Swap, recuerda que tienes cinco publicaciones gratuitas, para la sexta debes suscribirte',
        cssClass: 'alert-danger2',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              this.MyApp.mensajeBienvenidad = false;

              console.log('Cancel clicked');
            }
          },
          {
            text: 'Suscribirme',
            handler: () => {
              this.MyApp.mensajeBienvenidad = false;
              this.validarPublicaciones();

            }
          }
        ]
      });
      alert.present();
    }
    // this.cargarPublicaciones();

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
            this.realizarPago();
          } else {
            alert("Aun tienes publicaciones gratuitas");
          }

        });

    } else {
      alert("Ya tienes un plan ");
    }

  }

  async realizarPago() {
    this.navCtrl.push('PagoPage')

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


  async publish() {
    this.navCtrl.push('PublishPage')
  }

  cargarPublicaciones() {
    const queryObservable = this.af.list('/article/', {
      query: {
        orderByChild: 'prioridad',
        limitToFirst: 200,
      }
    });

    queryObservable
      .subscribe(queriedItems => {
        let publicacionesCompuesta:any= [];
        this.publicaciones = queriedItems;
        console.log("publicaciones",this.publicaciones);
        this.publicaciones.forEach(element => {
          if (element.usuario != this.usuarioLoggeado.email) {
            publicacionesCompuesta.push(element);
          }
        })

        if (publicacionesCompuesta.length > 0) {
          this.publicaciones = publicacionesCompuesta;
          publicacionesCompuesta = [];
        }
        console.log("publicaciones",this.publicaciones);
       /* for (var i = 0; i < this.publicaciones.length; i++) {
          this.rutaImagenes = this.publicaciones[i].imageUrl;

        }*/

      });

  }
  // IMPORTANTE:SOLO PARA PRUEBAS
  listaImagenesPrueba: any = [];
  cargarPublicacionPrueba() {
    this.listaImagenesPrueba = this.http.get('http://www.flickr.com/services/feeds/photos_public.gne?tags=soccer&format=json');
    this.listaImagenesPrueba
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }

  swap(swap) {

    this.navCtrl.push('SwapPage', { swap: swap });
  }

  swapInfo(swap) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };

    this.nativePageTransitions.flip(options);
    let profileModal = this.modalCtrl.create(modalHomePage, { swap: swap });
    profileModal.present();


  }


  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    };

    this.nativePageTransitions.slide(options);
    this.navCtrl.setRoot('SecondPage');
  }

  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };

    this.nativePageTransitions.flip(options);
    this.navCtrl.push('SecondPage');
  }

  fadePage() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot('SecondPage');
  }

  curlPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };
    this.nativePageTransitions.curl(options);
    this.navCtrl.setRoot('SecondPage');
  }


  doInfinite(infiniteScroll) {

    console.log('Async operation has ended');
    setTimeout(() => {
      //this.cargarPublicaciones();

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  myHeaderFn(record, recordIndex, records) {
    if (recordIndex === 0) {
      return 'header at the beginning';
    }
    return null;
  }

  onInput(event) {
    const queryObservable = this.af.list('/article/', {
      query: {
        orderByChild: 'titulo',
        startAt: this.busqueda,
        endAt: this.busqueda + "\uf8ff",
      }
    });
    queryObservable
      .subscribe(queriedItems => {
        console.log(queriedItems);
        this.publicaciones = queriedItems;
        console.log("busqueda", this.publicaciones);

      });
  }

  onCancel(event) {
    this.busqueda = null;
  }


}
