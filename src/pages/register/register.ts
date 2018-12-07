import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { MyApp } from "../../app/app.component";



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  myForm: FormGroup;
  user = {} as User;
  registrarUsuario: FirebaseListObservable<any>;
  usuario: any;




  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public af: AngularFireDatabase,
    public appmain: MyApp,

  ) {
    this.myForm = this.createMyForm();
    this.registrarUsuario = af.list('/usuario');

  }



  saveData() {
    console.log(this.myForm.value);
  }


  private createMyForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9_-].{4,8}")]],
        passwordConfirmation: ['', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9_-].{4,8}")]]
      }, { 'validator': this.matchingPasswords('password', 'passwordConfirmation') }),
      gender: ['', Validators.required],
    });
  }



  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  async register(user: User) {
    this.validarExistenciaUsuario(user.email).then(response => {
      if (response === 'existe') {
        this.alertCtrl.create({
          title: 'Aviso importante',
          subTitle: 'Ya existe un usuario con el correo indicado',
          buttons: ['Aceptar']
        }).present();

      } else if (response === 'noexiste') {
        try {
          this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(userAut => {
              this.registrarUsuario.push({
                nombre: user.nombre,
                apellidos: user.apellidos,
                email: user.email,
                fechaNacimiento: user.fechaNacimiento,
                genero: user.genero,
                estado: "A"
              }).then(userNew => {
                this.navCtrl.setRoot('HomePage');
              });
              // }
            }).catch(e => {
              if (e.message == 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.') {
                this.alertCtrl.create({
                  title: 'Email ya registrado',
                  subTitle: 'valide el Email',
                  buttons: ['Volver a intentar']
                }).present();
                console.log('Email ya registrado');
              }
            });
        }
        catch (e) {
          console.log(e.code);
          if (e.code === 'Email ya esta en Uso') {
            this.alertCtrl.create({
              title: 'Email ya registrado',
              subTitle: 'valide el Email',
              buttons: ['Volver a intentar']
            }).present();
          }
        }

      }

    })

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
          if (this.usuario.length > 0) {
            resolve("existe");
          } else {
            resolve("noexiste");
          }

        });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


}


