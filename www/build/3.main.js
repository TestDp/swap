webpackJsonp([3],{

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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






var RegisterPage = (function () {
    function RegisterPage(afAuth, navCtrl, alertCtrl, formBuilder, af, appmain) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.af = af;
        this.appmain = appmain;
        this.user = {};
        this.myForm = this.createMyForm();
        this.registrarUsuario = af.list('/usuario');
    }
    RegisterPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    RegisterPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required]],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].email]],
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required],
            passwordRetry: this.formBuilder.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].pattern(".*\\S.*[a-zA-z0-9_-].{8,12}")]],
                passwordConfirmation: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].pattern(".*\\S.*[a-zA-z0-9_-].{8,12}")]]
            }, { 'validator': this.matchingPasswords('password', 'passwordConfirmation') }),
            gender: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required],
        });
    };
    RegisterPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    //var noEsUsuario = true;
                    // var minUser = (user.email).toLowerCase();
                    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                        .then(function (userAut) {
                        // this.registrarUsuario.subscribe(ListaUsuarios => {
                        //   ListaUsuarios.forEach(usuario => {
                        //     var minUsuario = (usuario.email).toLowerCase();
                        //     if (minUsuario == minUser) {
                        //       this.registrarUsuario.update(usuario.$key, {
                        //         nombre: user.nombre,
                        //         apellidos: user.apellidos,
                        //         email: user.email,
                        //         fechaNacimiento: user.fechaNacimiento,
                        //         genero: user.genero,
                        //         estado: "A"
                        //       }).then(userUpdate => {
                        //         this.navCtrl.setRoot('HomePage');
                        //       });
                        //       noEsUsuario=false;
                        //     }
                        //   });
                        // });
                        //  if (noEsUsuario) {
                        _this.registrarUsuario.push({
                            nombre: user.nombre,
                            apellidos: user.apellidos,
                            email: user.email,
                            fechaNacimiento: user.fechaNacimiento,
                            genero: user.genero,
                            estado: "A"
                        }).then(function (userNew) {
                            _this.navCtrl.setRoot('HomePage');
                        });
                        // }
                    }).catch(function (e) {
                        if (e.message == 'The email address is already in use by another account.') {
                            _this.alertCtrl.create({
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
                    if (e.code === 'auth/email-already-in-use') {
                        this.alertCtrl.create({
                            title: 'Email ya registrado',
                            subTitle: 'valide el Email',
                            buttons: ['Volver a intentar']
                        }).present();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\jcblandon\Desktop\swap\trunk\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      REGISTER\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm">\n    <div style="overflow-y: scroll; height:400px;">\n      <ion-list>\n        <ion-item>\n          <ion-icon name="person" item-left></ion-icon>\n          <ion-label stacked>Nombres:</ion-label>\n          <ion-input formControlName="name" type="text" [(ngModel)]="user.nombre" placeholder="Nombre"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'name\').errors && myForm.get(\'name\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'name\').hasError(\'required\')">El campo nombre es requerido</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="person" item-left></ion-icon>\n          <ion-label stacked>Apellidos:</ion-label>\n          <ion-input formControlName="lastName" type="text" [(ngModel)]="user.apellidos" placeholder="Apellidos"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'lastName\').errors && myForm.get(\'lastName\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'lastName\').hasError(\'required\')">El campo apellidos es requerido</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="mail" item-left></ion-icon>\n          <ion-label stacked>Correo electronico:</ion-label>\n          <ion-input formControlName="email" type="email" [(ngModel)]="user.email" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'email\').errors && myForm.get(\'email\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'required\')">El campo email es requerido</p>\n          <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'email\')">Ingresar un email valido</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="calendar" item-left></ion-icon>\n          <ion-label stacked>Fecha de nacimiento:</ion-label>\n          <ion-datetime formControlName="dateBirth" displayFormat="MM-DD-YYYY" [(ngModel)]="user.fechaNacimiento" placeholder="MM-DD-YYY"></ion-datetime>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'dateBirth\').errors && myForm.get(\'dateBirth\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'dateBirth\').hasError(\'required\')">El campo fecha Nacimiento es requerido</p>\n        </ion-item>\n        <div formGroupName="passwordRetry">\n          <ion-item>\n            <ion-icon name="eye" item-left></ion-icon>\n            <ion-label stacked>Contraseña:</ion-label>\n            <ion-input formControlName="password" type="password" [(ngModel)]="user.password" placeholder="Contraseña"></ion-input>\n          </ion-item>\n          <div *ngIf="myForm.get(\'passwordRetry\').errors && myForm.get(\'passwordRetry\').dirty">\n            <p color="danger" ion-text *ngIf="myForm.get(\'passwordRetry\').get(\'password\').hasError(\'required\')">El campo contraseña es requerido</p>\n            <p color="danger" ion-text *ngIf="myForm.get(\'passwordRetry\').get(\'password\').hasError(\'pattern\')">La contraseña debe tener entre 8 y 12 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula</p>\n          </div>\n          <ion-item>\n            <ion-icon name="eye" item-left></ion-icon>\n            <ion-label stacked>Confirmar contraseña:</ion-label>\n            <ion-input formControlName="passwordConfirmation" type="password" [(ngModel)]="user.passwordConfirmation" placeholder="Confirmar contraseña"></ion-input>\n          </ion-item>\n          <div *ngIf="myForm.get(\'passwordRetry\').errors && myForm.get(\'passwordRetry\').dirty">\n            <p color="danger" ion-text *ngIf="myForm.get(\'passwordRetry\').get(\'passwordConfirmation\').hasError(\'required\')">El campo confirmar contraseña es requerido</p>\n            <p color="danger" ion-text *ngIf="myForm.get(\'passwordRetry\').get(\'passwordConfirmation\').hasError(\'pattern\')">La contraseña debe tener entre 8 y 12 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula</p>\n          </div>\n        </div>\n        <div *ngIf="myForm.get(\'passwordRetry\').errors && myForm.get(\'passwordRetry\').dirty">\n          <p color="danger" ion-text *ngIf="matchingPasswords(user.password,user.passwordConfirmation)">las contraseñas no son iguales</p>\n        </div>\n        <ion-row radio-group formControlName="gender" [(ngModel)]="user.genero">\n          <ion-item>\n            <ion-icon name="woman" item-left></ion-icon>\n            <ion-label>Mujer</ion-label>\n            <ion-radio value="2"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="man" item-left></ion-icon>\n            <ion-label>Hombre</ion-label>\n            <ion-radio value="1"></ion-radio>\n          </ion-item>\n        </ion-row>\n        <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">El campo genero es requerido</p>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div padding>\n      <button ion-button block type="submit" (click)="register(user)" [disabled]="myForm.invalid">Guardar</button>\n\n    </div>\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jcblandon\Desktop\swap\trunk\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map