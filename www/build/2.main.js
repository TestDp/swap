webpackJsonp([2],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swap__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormModule", function() { return MyFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyFormModule = (function () {
    function MyFormModule() {
    }
    return MyFormModule;
}()); /**
 * Created by N56J on 18/12/2017.
 */
MyFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__swap__["a" /* SwapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swap__["a" /* SwapPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__swap__["a" /* SwapPage */]
        ]
    })
], MyFormModule);

//# sourceMappingURL=swap.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwapPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SwapPage = (function () {
    function SwapPage(navCtrl, alertCtrl, af, navParams, http, myapp, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.navParams = navParams;
        this.http = http;
        this.myapp = myapp;
        this.loadingCtrl = loadingCtrl;
        this.swapArticle = {};
        this.publicaciones = [];
        this.loading = [];
        this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
        this.articuloSeleccionado = navParams.get('swap');
        this.cargarDatosUsuarioPertenece(1);
        this.cargarPublicacion();
    }
    SwapPage.prototype.ionViewDidLoad = function () {
    };
    SwapPage.prototype.ngAfterViewInit = function () {
        this.myapp.submenu = false;
    };
    SwapPage.prototype.ionViewWillLeave = function () {
        this.myapp.submenu = true;
    };
    SwapPage.prototype.cargarPublicacion = function () {
        var _this = this;
        if (this.usuarioPertenece == undefined) {
            this.cargarDatosUsuarioPertenece(2);
        }
        else {
            var queryObservable = this.af.list('/article/', {
                query: {
                    orderByChild: 'usuario',
                    equalTo: this.usuarioLoggeado.email,
                }
            });
            queryObservable
                .subscribe(function (queriedItems) {
                var idRegistro = JSON.parse(localStorage.getItem("idRegistro"));
                _this.publicaciones = queriedItems;
                _this.swapArticle.articulo = _this.articuloSeleccionado.titulo;
                _this.swapArticle.usuarioPertenece = _this.articuloSeleccionado.usuario;
                _this.swapArticle.usuarioOfrece = _this.usuarioLoggeado.email;
                _this.swapArticle.idRegUsuarioOfrece = idRegistro;
                _this.swapArticle.idRegUsuarioPertenece = _this.usuarioPertenece[0].idRegistro;
            });
        }
    };
    ;
    SwapPage.prototype.cargarDatosUsuarioPertenece = function (int) {
        var _this = this;
        var queryObservable = this.af.list('/usuarioInformacion/' + this.articuloSeleccionado.uid + '/', {});
        queryObservable
            .subscribe(function (queriedItems) {
            _this.usuarioPertenece = queriedItems;
            if (int == 2) {
                _this.cargarPublicacion();
            }
        });
    };
    SwapPage.prototype.enviar = function () {
        var _this = this;
        if (this.swapArticle.articulosOfrece != undefined) {
            this.loading = this.loadingCtrl.create({
                content: 'Enviando solicitud...'
            });
            this.loading.present();
            var date = new Date();
            var articuloSwap = this.af.list('/articuloSwap/');
            articuloSwap.push({
                articulo: this.swapArticle.articulo,
                usuarioPertenece: this.swapArticle.usuarioPertenece,
                usuarioOfrece: this.swapArticle.usuarioOfrece,
                articulosOfrece: this.swapArticle.articulosOfrece,
                comentario: this.swapArticle.comentario,
                idRegUsuarioPertenece: this.swapArticle.idRegUsuarioPertenece,
                idRegUsuarioOfrece: this.swapArticle.idRegUsuarioOfrece,
                uidUsuarioPertenece: this.articuloSeleccionado.uid,
                uidUsuarioOfrece: this.usuarioLoggeado.uid,
                idArticulo: this.articuloSeleccionado.id,
                fecha: date,
            }).then(function (snap) {
                _this.enviarNotificacionPush(_this.swapArticle);
                _this.loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Envio solicitud Swap',
                    subTitle: 'Se ha enviado correctamente la solicitud de cambio',
                    cssClass: 'alert-danger',
                    buttons: [
                        {
                            text: 'Aceptar',
                            role: 'Aceptar',
                            handler: function () {
                                _this.navCtrl.setRoot('HomePage');
                                // this.myapp.rootPage = 'HomePage';;
                            }
                        }
                    ]
                });
                alert.present();
            });
        }
        else {
            this.alertCambio();
        }
    };
    SwapPage.prototype.alertCambio = function () {
        var alert = this.alertCtrl.create({
            title: 'Información importante',
            subTitle: 'Debe seleccionar un o varios artículos de cambio.',
            cssClass: 'alert-danger',
            buttons: [
                {
                    text: 'Aceptar',
                    role: 'Aceptar',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    SwapPage.prototype.enviarNotificacionPush = function (swapArticle) {
        var json = {
            "to": swapArticle.idRegUsuarioPertenece,
            "priority": "high",
            "data": {
                "title": "Solicitud Swap",
                "body": swapArticle.comentario,
                "payload": {
                    "message": swapArticle.comentario,
                    "tipo": "NotificacionesPage",
                    "image": "icon"
                }
            },
            "notification": {
                "sound": "default",
                "title": "Solicitud Swap",
                "message": "pruebaMensaje",
                "body": swapArticle.comentario,
                "click_action": "FCM_PLUGIN_ACTIVITY",
            },
        };
        var apikey = "AAAAd2_6fnY:APA91bFdS2qkdHpev2U758YzNzRXUEkdYfepIq4HYjH5bkdJkhBzt8KVh-PdCNbeUybLSWGJ_teAsbAj7xqrKViBPeFH3gWZsubnOFbDqBJCypoggY_09ytvxibJ5_pab_lakOzkaljq";
        var url = 'https://fcm.googleapis.com/fcm/send';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'key=' + apikey
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, json, options)
            .map(function (response) {
            return response;
        }).subscribe(function (data) {
            //post doesn't fire if it doesn't get subscribed to
            console.log(data);
        });
    };
    SwapPage.prototype.publish = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push('PublishPage');
                return [2 /*return*/];
            });
        });
    };
    // IMPORTANTE: EN EL MOMENTO SOLO PARA PRUEBAS ESTE METODO
    SwapPage.prototype.enviarNotificacionPushSwap = function () {
        var json = {
            "to": "c2p3gHwiduE:APA91bG_rdv7Z69ehkCh_28OqmRfwhF9Il7CyDw7lMTmIQZLiXYQq70UoYFqZ1Y_CEABv1oUdBR0vw7yjI_0Idl0z8mrwLOzQ_cSBtQIgsOksRF0UGhdMiPtaEBkHUwuvkdTLBluG-jK",
            "data": {
                "title": "Solicitud Swap",
                "body": "Solicitud Swap",
                "payload": {
                    "message": "Solicitud Swap",
                    "tipo": "ChatPage",
                    "image": "icon"
                }
            },
            "notification": {
                "sound": "default",
                "title": "Solicitud Swap",
                "message": "pruebaMensaje",
                "body": "Solicitud Swap",
                "click_action": "FCM_PLUGIN_ACTIVITY",
            },
        };
        /*
          var json = {
      
            "to":"f48XUA5lbw0:APA91bFv6-JKzkod8OisbWbS2r8n6M09PMxpZqgrCsM-qnoEIhFZNxttxLuvig0-MI84V-oE6wKMlAd1gqqrcSgpoTnmirKoZNFOvkRaN4ru3M79MemF3hCyldJwqX5se8nv5xci58Mx",
            "priority": "high",
            "show_in_foreground": true,
            "badge":"true",
            "sound":"true",
            "alert":"true",
            "content_available": true,
            "click_action":"ChatPage",
            "vibrate":"true",
             "notification": {
              "message": "test message",
              "sound":"default",
              "title": "Solicitud Swap",
              "body": "prueba notificacion 3",
              "icon": "fcm_push_icon",
              "tipo": "swapSolicitud",
      
            },
            "data": {
              "title": "mensaje Swap",
              "body": "prueba notificacion 1",
              "message": "prueba notificacion 5",
              "payload": {
                "message": "ChatPage",
                "tipo": "swapSolicitud",
                "image": "icon"
              }
            },
          };*/
        var apikey = "AAAAd2_6fnY:APA91bFdS2qkdHpev2U758YzNzRXUEkdYfepIq4HYjH5bkdJkhBzt8KVh-PdCNbeUybLSWGJ_teAsbAj7xqrKViBPeFH3gWZsubnOFbDqBJCypoggY_09ytvxibJ5_pab_lakOzkaljq";
        var url = 'https://fcm.googleapis.com/fcm/send';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'key=' + apikey
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, json, options)
            .map(function (response) {
            return response;
        }).subscribe(function (data) {
            //post doesn't fire if it doesn't get subscribed to
            console.log(data);
        });
    };
    return SwapPage;
}());
SwapPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-swap',template:/*ion-inline-start:"C:\Users\N56J\Desktop\swap2\trunk\src\pages\swap\swap\swap.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n    <ion-title style="background-image: url(\'assets/images/favicon.png\') !important; background-repeat: no-repeat; background-position-x: 35%;\n    background-size: 25px;">\n      SWAP\n\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content  style="text-align:center;" class="fondo" padding>\n  <ion-list>\n    <ion-item class = "campos-swap">\n      <ion-label>Seleccione articulos de cambio</ion-label>\n      <ion-select [(ngModel)]="swapArticle.articulosOfrece"   multiple="true">\n        <ion-option *ngFor="let publicacion of publicaciones" value="{{publicacion.id}}" >{{publicacion.titulo}} - {{publicacion.descripcion}} </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class = "campos-textcomentario">\n      <ion-label floating>Comentario</ion-label>\n      <ion-textarea class = "campos-textcomentario2"> style="background-color: #F2F2F2;" #myInput id="myInput" rows="5" maxLength="500"  [(ngModel)]="swapArticle.comentario"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block class="boton-swap" (click)="enviar()" >Swap</button>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\N56J\Desktop\swap2\trunk\src\pages\swap\swap\swap.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], SwapPage);

/**
 * Created by N56J on 18/12/2017.
 */
//# sourceMappingURL=swap.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map