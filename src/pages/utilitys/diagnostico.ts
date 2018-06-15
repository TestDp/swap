/*import { Diagnostic } from '@ionic-native/diagnostic';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AppDiagnostico {
    observableGPS: Observable<any>;
    alertaGps: Boolean = false;
    alertaPauta: Boolean = false;
    constructor(public diagnostic: Diagnostic, public alertCtrl: AlertController, public platform: Platform) {
        this.observableGPS = Observable.interval(6000);
        this.platform.pause.subscribe(()=>this.alertaPauta = true);
        this.platform.resume.subscribe(() => this.alertaPauta=false);
    }

    
    checkLocation() {
        try{
          if (this.platform.is('ios') || this.platform.is('android')) {

            return this.observableGPS
            .subscribe(() => {
                this.diagnostic.isGpsLocationEnabled().then(
                    (isAvailable) => {
                        if (!isAvailable && !this.alertaGps && !this.alertaPauta) {
                            this.alertaGps = true;
                            let alert = this.alertCtrl.create({
                                title: 'Activar GPS',
                                message: 'Debes activar el GPS para el funcionamiento de 24/7?',
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: () => {
                                            this.platform.exitApp();
                                            this.alertaGps = false;
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'Habilitar',
                                        handler: () => {
                                            this.diagnostic.switchToLocationSettings();
                                            this.alertaGps = false;
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }

                    })
                    .catch((e) => {
                        // console.log(e);
                        // alert(JSON.stringify(e));
                    });
            });
        }
        }
        catch(ex){

        }

    }

 
}*/
