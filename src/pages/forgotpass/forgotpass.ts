import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams,ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the ForgotpassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html',
})
export class ForgotpassPage {

  user = {} as User;
  userProfile: any = null;

  constructor(private afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpassPage');
  }

 

   async resetPassword(user: User) {
     console.log("esta entrando a la funcion y al envio  "+ user.email);
    try {
       this.afAuth.auth.sendPasswordResetEmail(user.email).then(userIn => {
          this.navCtrl.setRoot('SignInPage');
           this.alertCtrl.create({
            title: 'Envio Exitoso',
            subTitle: 'Se envio mensaje para reestablecer la contraseña al correo: '.concat(user.email),
            buttons:[
              {
                  text: 'Ir a inicio',
                  handler: () => {
                      this.dirigirLogin();
                  }
              },
              
          ]
          }).present();
        }).catch(mensaje => {          
          this.alertCtrl.create({
            title: 'Información',
            subTitle: 'Valide el correo electronico',
            buttons: ['Volver a intentar']
          }).present();
     })
    }
    catch (error) {
      this.alertCtrl.create({
            title: 'Información',
            subTitle: 'Valide el correo electronico',
            buttons: ['Volver a intentar']
          }).present();


    }
  }

  dirigirLogin(){
    this.navCtrl.setRoot('SignInPage');
  }

}
