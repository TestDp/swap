import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Md5 } from 'ts-md5/dist/md5';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
    selector: 'page-pago',
    templateUrl: 'pago.html',
    providers: [Md5]
})


export class PagoPage {
    usuarioLoggeado: any;
    email: any;
    valorTotal: any;
    numeroFacturaT: any;
    signatureNormal: any;
    message: any;
    description: any;
    mostraPago: boolean;
    mensajePago: any;
    mostraPagoExitoso: boolean;
    usuarioAnualidad: FirebaseListObservable<any[]>;
    preferencial:any;

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        private payPal: PayPal,
        private iab: InAppBrowser,
        private af: AngularFireDatabase,

    ) {
        this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
        this.mostraPago = false;
        this.mostraPagoExitoso = false;
    }


    ionViewDidLoad() {

        this.email = this.usuarioLoggeado.email;
    }

    paypalInit() {
        this.payPal.init({
            PayPalEnvironmentProduction: 'AfAA8SizQlq6rEnQnW5MBiGP5jIMyv_yAgpApzkLgjCQ7vzi7SqPmNXVhxfMynP79UEiOlJRoqo5yNrD',
            PayPalEnvironmentSandbox: 'AWM7xR0OHdWrfKO-7GIdC6oHduw3ih-gs4Lp3SoySpTepjapkbHKCuyy5fdVroGtLbWsPM9RD03vsLX3'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let payment = new PayPalPayment('6', 'USD', this.description, 'Swap');
                this.payPal.renderSinglePaymentUI(payment).then(() => {
                    console.log("respuesta pago", payment);
                    // Successfully paid

                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, () => {
                    // Error or render dialog closed without being successful
                });
            }, () => {
                // Error in configuration
            });
        }, (error) => {
            console.log("error inicializando paypayl", error);

        })
    }

    pagar(valor, descripcion) {
        this.valorTotal = valor;
        this.description = descripcion;
        this.mostraPago = true;
    }

    payUInit() {
        this.valorTotal = 5;
        this.description = "Semestre";
        if(this.preferencial == true){
            this.valorTotal = this.valorTotal + 1;   
        }
        let merchantId = 708031; // (508029- pruebas) 708031 - propio;  aca se debe colocar el merchantid propip
        let accountId = 711291; // (512321 - pruebas) 711291 -propio  aca se debe colocar el accountId propip 
        var date = new Date();
        var formatDate = date.toISOString();
        let referenceCode = formatDate + this.usuarioLoggeado.uid;
        let signatureNormal = "4Vj8eK4rloUd272L48hsrarnUA" + "~" + "708031" + "~" + referenceCode + "~" + this.valorTotal + "~" + "COP"; //0cdkasjVRvnj28y8jxK9ivon0F
        var hash2 = Md5.hashStr(signatureNormal);
        this.signatureNormal = hash2.toString();
        var pageContent = '<html><head></head><body><form id="loginForm" action="https://sandbox.gateway.payulatam.com/ppp-web-gateway/" method="POST">' +
            '<input type="hidden" name="merchantId" value="' + merchantId + '">' +
            '<input type="hidden" name="accountId" value="' + accountId + '">' +
            '<input type="hidden" name="description" value="' + this.description + '">' +
            '<input type="hidden" name="referenceCode" value="' + referenceCode + '">' +
            '<input type="hidden" name="amount" value="' + this.valorTotal + '">' +
            '<input type="hidden" name="tax" value="' + "0" + '">' +
            '<input type="hidden" name="taxReturnBase" value="' + "0" + '">' +
            '<input type="hidden" name="currency" value="' + "COP" + '">' +
            '<input type="hidden" name="signature" value="' + this.signatureNormal + '">' +
             // '<input type="hidden" name="test" value="' + "1" + '">' + IMPORTANTE: Solo para pruebas
            '<input type="hidden" name="buyerEmail" value="' + this.usuarioLoggeado.email + '">' +
            '<input type="hidden" name="responseUrl" value="' + "http://localhost:8100/#/pago" + '">' +
            '<input type="hidden" name="confirmationUrl" value="' + "http://localhost:8100/#/pago" + '">' +

            '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';
        var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);
        const browser = this.iab.create(pageContentUrl);

        browser.on('loadstop').subscribe(
            data => {
                //let datas = data;
                let url = data.url;
                if (url.includes("message")) {
                    this.message = url.split('?')[1].split('&')[6].replace('message=', '');
                    console.log("session state ", this.message);
                    browser.close();
                    if (this.message == "lapTransactionState=APPROVED") {
                        let sumar = 186;
                        this.mensajePago = "Pago realizado exitosamente.";
                        this.mostraPagoExitoso = true;
                        this.usuarioAnualidad = this.af.list('/planesPago/');
                        var date = new Date();
                        var formatDate = date.toISOString();
                        var date2 = new Date();
                        date2.setDate(date2.getDate() + sumar);
                        var formatDate2 = date2.toISOString();
                        this.usuarioAnualidad.push({
                            valor: this.valorTotal,
                            descripcion: this.description,
                            usuario: this.usuarioLoggeado.email,
                            uid: this.usuarioLoggeado.uid,
                            medioPago: 'PayU',
                            fechaPago: formatDate,
                            fechaVencimiento: formatDate2,

                        })
                        if(this.preferencial == true){
                            this.usuarioLoggeado.prioridad = 1;
                            localStorage.setItem("usuarioLoggeado", JSON.stringify(this.usuarioLoggeado));
                        }
                        //this.navCtrl.push('PublishPage');

                    }

                }
            }
        )

    }




}
