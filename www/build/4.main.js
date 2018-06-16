webpackJsonp([4],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpass__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpassPageModule = (function () {
    function ForgotpassPageModule() {
    }
    return ForgotpassPageModule;
}());
ForgotpassPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgotpass__["a" /* ForgotpassPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpass__["a" /* ForgotpassPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__forgotpass__["a" /* ForgotpassPage */]
        ]
    })
], ForgotpassPageModule);

//# sourceMappingURL=forgotpass.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpassPage; });
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



/**
 * Generated class for the ForgotpassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForgotpassPage = (function () {
    function ForgotpassPage(afAuth, alertCtrl, toast, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.userProfile = null;
    }
    ForgotpassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpassPage');
    };
    ForgotpassPage.prototype.resetPassword = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("esta entrando a la funcion y al envio  " + user.email);
                try {
                    this.afAuth.auth.sendPasswordResetEmail(user.email).then(function (userIn) {
                        _this.navCtrl.setRoot('SignInPage');
                        _this.alertCtrl.create({
                            title: 'Envio Exitoso',
                            subTitle: 'Se envio mensaje para reestablecer la contraseña al correo: '.concat(user.email),
                            buttons: [
                                {
                                    text: 'Ir a inicio',
                                    handler: function () {
                                        _this.dirigirLogin();
                                    }
                                },
                            ]
                        }).present();
                    }).catch(function (mensaje) {
                        _this.alertCtrl.create({
                            title: 'Información',
                            subTitle: 'Valide el correo electronico',
                            buttons: ['Volver a intentar']
                        }).present();
                    });
                }
                catch (error) {
                    this.alertCtrl.create({
                        title: 'Información',
                        subTitle: 'Valide el correo electronico',
                        buttons: ['Volver a intentar']
                    }).present();
                }
                return [2 /*return*/];
            });
        });
    };
    ForgotpassPage.prototype.dirigirLogin = function () {
        this.navCtrl.setRoot('SignInPage');
    };
    return ForgotpassPage;
}());
ForgotpassPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-forgotpass',template:/*ion-inline-start:"C:\Users\Diego\Desktop\swap\trunk\src\pages\forgotpass\forgotpass.html"*/'<!--\n  Generated template for the ForgotpassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-content class="fondo">\n\n  <ion-content class="contenedor-logo">\n    <ion-img width="250" height="95" src="assets/images/swap-trans.png"></ion-img>\n  </ion-content>\n  <ion-content class="login">\n    <div style="text-align:center;" class="padding">\n      <h2 color="danger">Ingresa tu correo y recibirás un Email para reestablecer tu contraseña</h2>\n    </div>\n\n    <div class="list">\n\n      <ion-item class="fondo-contra">\n        <ion-input class="campos-forgot" type="email" [(ngModel)]="user.email" placeholder="me@gmail.com"></ion-input>\n      </ion-item>\n\n    </div>\n\n    <div style="padding-top: 20px;">\n       <button class="boton-reset" ion-button block color="happiness" (click)="resetPassword(user)" >Reestrablecer contraseña</button>\n    </div>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"C:\Users\Diego\Desktop\swap\trunk\src\pages\forgotpass\forgotpass.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ForgotpassPage);

//# sourceMappingURL=forgotpass.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map