import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import {Facebook} from '@ionic-native/facebook';
import {PublicationPageModule} from "../pages/publications/publications.module";
import { Geolocation } from '@ionic-native/geolocation';
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {FCM} from "@ionic-native/fcm";
import {HttpModule} from "@angular/http";
import {NotificacionesPageModule} from "../pages/notifaciones/notificaciones.module";
import {ChatPageModule} from "../pages/chat/chat.module";
import {CambiosPageModule} from "../pages/cambios/cambios.module";
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import {homeModule} from "../pages/home/home.module";
import { IonicImageLoader } from 'ionic-image-loader';
import { Base64 } from '@ionic-native/base64';
import { diagnosticoModule } from '../pages/utilitys/diagnostico.module';
import { PagoPageModule } from '../pages/pago/pago.module';
import { PayPal} from '@ionic-native/paypal';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MysearchModule } from '../pages/search/search.module';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { FacebookServiceProvider } from '../pages/utilitys/facebook-service';
import { Badge } from '@ionic-native/badge';

//Conexión firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDcU15gVS6B1T1fp27Da7re2d3UX6RCS4Q",
   authDomain: "swap-5f943.firebaseapp.com",
   databaseURL: "https://swap-5f943.firebaseio.com",
   projectId: "swap-5f943",
   storageBucket: "swap-5f943.appspot.com",
   messagingSenderId: "512979795574"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PublicationPageModule,
    HttpModule,
    NotificacionesPageModule,
    ChatPageModule,
    CambiosPageModule,
    homeModule,
    IonicImageLoader.forRoot(),
    diagnosticoModule,
    PagoPageModule,
    MysearchModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GooglePlus, Facebook,
    Geolocation,
    NativeGeocoder,
    FCM,
    MyApp,
    NativePageTransitions,
    Base64,
    PayPal,
    InAppBrowser,
    LocationAccuracy,
    FacebookServiceProvider,  
    Badge,  
  
  ]
})
export class AppModule { }
