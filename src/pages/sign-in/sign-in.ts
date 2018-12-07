import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, Platform } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
//import { Facebook } from '@ionic-native/facebook';
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { Facebook} from "ng2-cordova-oauth/core";
import { FacebookServiceProvider } from '../utilitys/facebook-service';
import { Alert } from 'ionic-angular/components/alert/alert';

/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  user = {} as User;
  userProfile: any = null;
  tasks: FirebaseListObservable<any>;
  registrarUsuario: FirebaseListObservable<any>;

  private oauth: OauthCordova = new OauthCordova();
  private facebookProvider: Facebook = new Facebook({
    clientId: '1801513843512058',
    responseType: 'code%20token',
    redirectUri: 'https://swap-5f943.firebaseapp.com/__/auth/handler',
    appScope: ["email"]
  })

  datos = {
    nombre: '',
    email: '',
    genero: '',
    apellidos: '',

  };
  access_token: any;
  datoss: any;
  usuario: any;


  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase,
    public toast: ToastController,
    public googlePlus: GooglePlus,
    //public facebook: Facebook,
    public af: AngularFireDatabase,
    private platform: Platform,
    public facebookService: FacebookServiceProvider,
  ) {
    this.tasks = this.database.list('/tasks');

  }


  ngAfterViewInit() {
    // this.gps.checkLocation();
  }

  async login(user: User) {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(userIn => {
          //let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
          let idRegistro = JSON.parse(localStorage.getItem("idRegistro"));
          let usuarioInfo = this.af.list('/usuarioInformacion/' + userIn.uid + '/');
          usuarioInfo.remove();
          usuarioInfo.push({
            usuario: user.email,
          })

          this.navCtrl.setRoot('HomePage');
        }).catch(mensaje => {
          this.alertCtrl.create({
            title: 'Información',
            subTitle: 'Valide el usuario o contraseña',
            buttons: ['Volver a intentar']
          }).present();
        })
    }
    catch (error) {
      console.log("error login", JSON.parse(error));
      this.alertCtrl.create({
        title: 'Información',
        subTitle: 'Valide el usuario o contraseña 2.',
        buttons: ['Volver a intentar']
      }).present();


    }
  }


  register() {
    this.navCtrl.push('RegisterPage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  loginGoogle(): void {
    this.googlePlus.login({
      'webClientId': '512979795574-lj2b3o84svbsibelf7fdfremv2mu9dbm.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
      this.validarExistenciaUsuario2(res.email).then(response => {
        if (response === 'existe') {
          this.alertCtrl.create({
            title: 'Aviso importante',
            subTitle: 'Ya existe un usuario con el correo indicado. Debes reestablecer la contraseña.',
            buttons: ['Aceptar']
          }).present();

        } else if (response === 'noexiste') {
          firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
            .then(success => {
              console.log("Google sing in success: " + JSON.stringify(success));
              if (this.usuario.length == 0) {
                this.crearUsuarioFirebase(success);
              }
              let idRegistro = JSON.parse(localStorage.getItem("idRegistro"));
              let usuarioInfo = this.af.list('/usuarioInformacion/' + success.uid + '/');
              usuarioInfo.remove();
              usuarioInfo.push({
                usuario: success.email,
              })
            })
            .catch(error => alert("Google sing in success: " + JSON.stringify(error)));

        }

      })

    }).catch((error) => {
      alert("error 22 " + JSON.stringify(error));
      console.error("Error: ", error);
    })

  }


   /*
  loginFacebook(): void {
    this.facebook.login(['email']).then((response) => {
      firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken))
        .then((success) => {
          console.log("Facebook sing in success: " + JSON.stringify(success));
          this.userProfile = success
          this.navCtrl.setRoot('HomePage');
        })
        .catch((error) => {
          console.log("Facebook sing in failure: " + JSON.stringify(error));
        });
    }).catch((error) => {
      console.log(error);
    })
  }*/

  public facebook1() {
    var lobThis = this;
    this.platform.ready().then(() => {
      try {
        this.oauth.logInVia(this.facebookProvider).then(success => {

          lobThis.access_token = success["access_token"];
          lobThis.facebookService.setRemoteData(lobThis.access_token);
          this.facebookService.getRemoteData().subscribe(result => {
            this.datoss = result;
            this.datos.nombre = this.datoss["name"];
            this.datos.email = this.datoss["email"];
            this.datos.genero = this.datoss["gender"];
            this.datos.apellidos = this.datoss["middle_name"];
            this.validarExistenciaUsuario(this.datos.email).then(response => {
              if (response === 'existe') {
                this.alertCtrl.create({
                  title: 'Aviso importante',
                  subTitle: 'Ya existe un usuario con el correo indicado. Debes reestablecer la contraseña.',
                  buttons: ['Aceptar']
                }).present();

              } else if (response === 'noexiste') {
                firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(lobThis.access_token))
                  .then((success) => {
                    console.log("Facebook sing in success: " + JSON.stringify(success));
                    let idRegistro = JSON.parse(localStorage.getItem("idRegistro"));
                    let usuarioInfo = this.af.list('/usuarioInformacion/' + success.uid + '/');
                    usuarioInfo.remove();
                    usuarioInfo.push({
                      usuario: success.email,
                    })
                    this.userProfile = success
                    this.navCtrl.setRoot('HomePage');
                  })
                  .catch((error) => {
                    console.log("Facebook sing in failure: " + JSON.stringify(error));
                  });
                if (this.usuario.length == 0) {

                  this.crearUsuarioFirebaseFace(this.datos);
                }
                


              }
            })
          });
        }, error => {
          console.log("iam in fail");
          console.log("ERROR: ", error);
        });
      }
      catch (e) {
        console.log("error : " + e);
      }
    })
  }


  crearUsuarioFirebase(datos) {
    this.registrarUsuario = this.af.list('/usuario');
    this.registrarUsuario.push({
      nombre: datos.displayName,
      apellidos: "Ingreso google",
      email: datos.email,
      fechaNacimiento: "user.fechaNacimiento",
      genero: "1",
      estado: "A",

    }).then(userNew => {
      this.navCtrl.setRoot('HomePage');
    });
  }


  crearUsuarioFirebaseFace(datos) {
    console.log("datos facebook", datos);
    if (datos.apellidos == undefined) {
      datos.apellidos = "";
    }
    this.registrarUsuario = this.af.list('/usuario');
    this.registrarUsuario.push({
      nombre: datos.nombre,
      apellidos: "Ingreso facebook",
      email: datos.email,
      fechaNacimiento: "user.fechaNacimiento",
      genero: datos.genero,
      estado: "A"
    }).then(userNew => {
      this.navCtrl.setRoot('HomePage');
    });
  }


  validarExistenciaUsuario(email) {
    return new Promise((resolve, reject) => {
      const queryObservable = this.af.list('/usuario/', {
        query: {
          orderByChild: 'email',
          equalTo: email
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          this.usuario = queriedItems;
          if (this.usuario.length > 0 && this.usuario[0].apellidos !== 'Ingreso facebook') {
            resolve("existe");
          } else {
            resolve("noexiste");
          }

        });
    });
  }

  validarExistenciaUsuario2(email) {
    return new Promise((resolve, reject) => {
      const queryObservable = this.af.list('/usuario/', {
        query: {
          orderByChild: 'email',
          equalTo: email
        }
      });
      queryObservable
        .subscribe(queriedItems => {
          this.usuario = queriedItems;
          if (this.usuario.length > 0 && this.usuario[0].apellidos !== 'Ingreso google') {
            resolve("existe");
          } else {
            resolve("noexiste");
          }

        });
    });
  }

  forgot() {
    this.navCtrl.push('ForgotpassPage')
  }


}
