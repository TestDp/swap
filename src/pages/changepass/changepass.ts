import { Component } from '@angular/core';
import {  FormGroup} from '@angular/forms';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the ChangepassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-changepass',
  templateUrl: 'changepass.html',
})
export class ChangepassPage {

  
  userProfile: any = null;
  myForm: FormGroup;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepassPage');
  }

   changePassword(passNew,passConfir){

    var user = firebase.auth().currentUser;
    var pass1 = passNew;
    var pass2 = passConfir;

    
try {
    
    if (pass1 !== undefined)
      {
        
     

    var number = pass1.length;

   
        if (user != null) {
            if(pass1 == pass2  )
              {
                console.log("Mozilla tiene " + number + " caracteres.");
                 if(number > 5 && number < 14)
                   {
                    user.updatePassword(pass1).then(userIn => {
                    this.navCtrl.setRoot('HomePage');
                    this.alertCtrl.create({
                    title: 'Cambio de Contraseña',
                    subTitle: 'Cambio de Contraseña Exitoso',
                    buttons: ['Volver al home']
                  }).present();
                  // Update successful.
                }, function(error) {
                  // An error happened.
                });
                }
                else
                  {
                     this.alertCtrl.create({
                    title: 'Información',
                    subTitle: 'La contraseña debe tener por lo menos 6 caracteres y maximo 13',
                    buttons: ['Volver a intentar']
                      }).present();

                  }
              }
              else {
                    this.alertCtrl.create({
                    title: 'Información',
                    subTitle: 'las contraseñas ingresadas no coinciden',
                    buttons: ['Volver a intentar']
                      }).present();
                  }
        }
     }
      else {
        console.log("Mozilla tieneeeeeeeeeeeeeeeeeeeee   pasoooooo " + pass1 + " caracteres.");
          this.alertCtrl.create({
                    title: 'Información',
                    subTitle: 'No se permiten campos vacios',
                    buttons: ['Volver a intentar']
                      }).present();

     }
     
   }
    
    catch (error) {
      this.alertCtrl.create({
        title: 'Información',
        subTitle: 'No se permiten campos vacios',
        buttons: ['Volver a intentar']
      }).present();
    }

  }
  

   saveData() {
    console.log(this.myForm.value);
  }

}
