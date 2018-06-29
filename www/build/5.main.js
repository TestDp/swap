webpackJsonp([5],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepass__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassPageModule", function() { return ChangepassPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepassPageModule = (function () {
    function ChangepassPageModule() {
    }
    return ChangepassPageModule;
}());
ChangepassPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__changepass__["a" /* ChangepassPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepass__["a" /* ChangepassPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__changepass__["a" /* ChangepassPage */]
        ]
    })
], ChangepassPageModule);

//# sourceMappingURL=changepass.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangepassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepassPage = (function () {
    function ChangepassPage(afAuth, navCtrl, alertCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.userProfile = null;
    }
    ChangepassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepassPage');
    };
    ChangepassPage.prototype.changePassword = function (passNew, passConfir) {
        var _this = this;
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        var pass1 = passNew;
        var pass2 = passConfir;
        try {
            if (pass1 !== undefined) {
                var number = pass1.length;
                if (user != null) {
                    if (pass1 == pass2) {
                        console.log("Mozilla tiene " + number + " caracteres.");
                        if (number > 5 && number < 14) {
                            user.updatePassword(pass1).then(function (userIn) {
                                _this.navCtrl.setRoot('HomePage');
                                _this.alertCtrl.create({
                                    title: 'Cambio de Contraseña',
                                    subTitle: 'Cambio de Contraseña Exitoso',
                                    buttons: ['Volver al home']
                                }).present();
                                // Update successful.
                            }, function (error) {
                                // An error happened.
                            });
                        }
                        else {
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
    };
    ChangepassPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    return ChangepassPage;
}());
ChangepassPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-changepass',template:/*ion-inline-start:"C:\Users\N56J\Desktop\swap2\trunk\src\pages\changepass\changepass.html"*/'<!--\n  Generated template for the ChangepassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Changepass</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-icon name="eye" item-left></ion-icon>\n    <ion-label stacked color="danger">Contraseña Nueva:</ion-label>\n    <ion-input type="password" [(ngModel)]="password1" placeholder="Contraseña"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="eye" item-left></ion-icon>\n    <ion-label stacked color="danger">Confirmar Nueva contraseña:</ion-label>\n    <ion-input type="password" [(ngModel)]="password2" placeholder="Confirmar contraseña"></ion-input>\n  </ion-item>\n  <div padding>\n    <button ion-button block type="submit" (click)="changePassword(password1,password2)">Cambiar Contraseña</button>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\N56J\Desktop\swap2\trunk\src\pages\changepass\changepass.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ChangepassPage);

//# sourceMappingURL=changepass.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map