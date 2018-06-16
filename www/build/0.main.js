webpackJsonp([0],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = (function () {
    function SignInPageModule() {
    }
    return SignInPageModule;
}());
SignInPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]
        ]
    })
], SignInPageModule);

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utility_1 = __webpack_require__(404);
var DEFAULTS = {
    redirectUri: 'http://localhost/callback'
};
var OAuthProvider = (function () {
    function OAuthProvider(options) {
        if (options === void 0) { options = {}; }
        this.APP_SCOPE_DELIMITER = ',';
        this.authUrl = '';
        this.defaults = {};
        this.options = utility_1.utils.defaults(options, DEFAULTS);
    }
    Object.defineProperty(OAuthProvider.prototype, "name", {
        get: function () {
            return this.constructor.name || this.authUrl;
        },
        enumerable: true,
        configurable: true
    });
    OAuthProvider.prototype.parseResponseInUrl = function (url) {
        var response = utility_1.utils.parseQueryString(url);
        if (!this.isValid(response)) {
            var error = new Error("Problem authenticating with " + this.name);
            Object.defineProperty(error, 'response', { value: response });
            throw error;
        }
        return response;
    };
    OAuthProvider.prototype.dialogUrl = function () {
        return this.optionsToDialogUrl(this.options);
    };
    OAuthProvider.prototype.optionsToDialogUrl = function (options) {
        utility_1.utils.defaults(options, this.defaults);
        var url = this.authUrl + "?client_id=" + options.clientId + "&redirect_uri=" + options.redirectUri;
        if (options.appScope) {
            url += "&scope=" + this.serializeAppScope(options.appScope);
        }
        if (options.state) {
            url += "&state=" + options.state;
        }
        if (options.responseType) {
            url += "&response_type=" + options.responseType;
        }
        return url;
    };
    OAuthProvider.prototype.serializeAppScope = function (scope) {
        return typeof scope.join === 'function' ? scope.join(this.APP_SCOPE_DELIMITER) : scope;
    };
    OAuthProvider.prototype.isValid = function (response) {
        return !response.error && (response.code || response['access_token']);
    };
    return OAuthProvider;
}());
exports.OAuthProvider = OAuthProvider;


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.utils = {
    parseQueryString: function (url) {
        var values = url.split(/[?#]{1,2}/)[1].split('&');
        return values.reduce(function (map, value) {
            var _a = value.split('='), paramName = _a[0], paramValue = _a[1];
            map[decodeURIComponent(paramName)] = decodeURIComponent(paramValue);
            return map;
        }, {});
    },
    defaults: function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        sources.forEach(function (source) {
            for (var prop in source) {
                if (!target.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                }
            }
        });
        return target;
    }
};


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Angular 2 (ng2) Cordova Oauth
 * Created by Nic Raboy
 * http://www.nraboy.com
 */

var utility_1 = __webpack_require__(404);
/*
 * The main driver class for connections to each of the providers.
 */
var Oauth = (function () {
    function Oauth() {
        this.defaultWindowOptions = {};
    }
    Oauth.prototype.login = function (provider, windowOptions) {
        if (windowOptions === void 0) { windowOptions = {}; }
        console.warn("\n        new CordovaOauth().login(...) is deprecated and will be removed in the next release.\n        Please use new CordovaOauth().logInVia(...) instead.\n      ");
        return this.logInVia(provider, windowOptions);
    };
    Oauth.prototype.logInVia = function (provider, windowOptions) {
        if (windowOptions === void 0) { windowOptions = {}; }
        var url = provider.dialogUrl();
        return this.openDialog(url, utility_1.utils.defaults(windowOptions, this.defaultWindowOptions), {
            resolveOnUri: provider.options.redirectUri,
            providerName: provider.name
        }).then(function (event) {
            return provider.parseResponseInUrl(event.url);
        });
    };
    Oauth.prototype.serializeOptions = function (options) {
        var chunks = [];
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                chunks.push(prop + "=" + options[prop]);
            }
        }
        return chunks.join(',');
    };
    Oauth.prototype.openDialog = function (url, windowParams, options) {
        if (options === void 0) { options = {}; }
        return Promise.reject(new Error('Not implemented'));
    };
    return Oauth;
}());
exports.Oauth = Oauth;


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_cordova_oauth_platform_cordova__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_cordova_oauth_platform_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_cordova_oauth_platform_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_core__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilitys_facebook_service__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
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






//import { Facebook } from '@ionic-native/facebook';



/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignInPage = (function () {
    function SignInPage(afAuth, navCtrl, alertCtrl, database, toast, googlePlus, 
        //public facebook: Facebook,
        af, platform, facebookService) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.toast = toast;
        this.googlePlus = googlePlus;
        this.af = af;
        this.platform = platform;
        this.facebookService = facebookService;
        this.user = {};
        this.userProfile = null;
        this.oauth = new __WEBPACK_IMPORTED_MODULE_6_ng2_cordova_oauth_platform_cordova__["OauthCordova"]();
        this.facebookProvider = new __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_core__["Facebook"]({
            clientId: '1801513843512058',
            responseType: 'code%20token',
            redirectUri: 'http://localhost/callback',
            appScope: ["email"]
        });
        this.datos = {
            nombre: '',
            email: '',
            genero: '',
            apellidos: '',
        };
        this.tasks = this.database.list('/tasks');
    }
    SignInPage.prototype.ngAfterViewInit = function () {
        // this.gps.checkLocation();
    };
    SignInPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
                        .then(function (userIn) {
                        //let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
                        var idRegistro = JSON.parse(localStorage.getItem("idRegistro"));
                        var usuarioInfo = _this.af.list('/usuarioInformacion/' + userIn.uid + '/');
                        usuarioInfo.remove();
                        usuarioInfo.push({
                            usuario: user.email,
                        });
                        _this.navCtrl.setRoot('HomePage');
                    }).catch(function (mensaje) {
                        _this.alertCtrl.create({
                            title: 'Información',
                            subTitle: 'Valide el usuario o contraseña',
                            buttons: ['Volver a intentar']
                        }).present();
                    });
                }
                catch (error) {
                    console.log("error login", JSON.parse(error));
                    this.alertCtrl.create({
                        title: 'Información',
                        subTitle: 'Valide el usuario o contraseña 2',
                        buttons: ['Volver a intentar']
                    }).present();
                }
                return [2 /*return*/];
            });
        });
    };
    SignInPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.loginGoogle = function () {
        var _this = this;
        this.googlePlus.login({
            'webClientId': '512979795574-9fd1sac0f3arvseemqke0ivropb0m40p.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken))
                .then(function (success) {
                console.log("Google sing in success: " + JSON.stringify(success));
                _this.crearUsuarioFirebase(success);
            })
                .catch(function (error) { return console.log("Google sing in success: " + JSON.stringify(error)); });
        }).catch(function (error) {
            console.error("Error: ", error);
        });
    };
    /*
    loginFacebook(): void {
      this.facebook.login(['email']).then((response) => {
        firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken))
          .then((success) => {
            console.log("Facebook sing in success: " + JSON.stringify(success));
            this.userProfile = success
            this.navCtrl.setRoot('HomePage');
          })
          .catch((error) => {
            console.log("Facebook sing in failure: " + JSON.stringify(error));
          });
      }).catch((error) => {
        console.log(error);
      })
    }*/
    SignInPage.prototype.facebook1 = function () {
        var _this = this;
        var lobThis = this;
        this.platform.ready().then(function () {
            try {
                _this.oauth.logInVia(_this.facebookProvider).then(function (success) {
                    lobThis.access_token = success["access_token"];
                    lobThis.facebookService.setRemoteData(lobThis.access_token);
                    _this.facebookService.getRemoteData().subscribe(function (result) {
                        _this.datoss = result;
                        _this.datos.nombre = _this.datoss["name"];
                        _this.datos.email = _this.datoss["email"];
                        _this.datos.genero = _this.datoss["gender"];
                        _this.datos.apellidos = _this.datoss["middle_name"];
                        _this.crearUsuarioFirebaseFace(_this.datos);
                    });
                }, function (error) {
                    console.log("iam in fail");
                    console.log("ERROR: ", error);
                });
            }
            catch (e) {
                console.log("error : " + e);
            }
        });
    };
    SignInPage.prototype.crearUsuarioFirebase = function (datos) {
        var _this = this;
        this.registrarUsuario = this.af.list('/usuario');
        this.registrarUsuario.push({
            nombre: datos.displayName,
            apellidos: "Ingreso google",
            email: datos.email,
            fechaNacimiento: "user.fechaNacimiento",
            genero: "1",
            estado: "A",
        }).then(function (userNew) {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    SignInPage.prototype.crearUsuarioFirebaseFace = function (datos) {
        var _this = this;
        this.registrarUsuario = this.af.list('/usuario');
        this.registrarUsuario.push({
            nombre: datos.nombre,
            apellidos: datos.apellidos,
            email: datos.email,
            fechaNacimiento: "user.fechaNacimiento",
            genero: datos.genero,
            estado: "A"
        }).then(function (userNew) {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    SignInPage.prototype.forgot = function () {
        this.navCtrl.push('ForgotpassPage');
    };
    return SignInPage;
}());
SignInPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\Diego\Desktop\swap\trunk\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="fondo" padding>\n\n  <ion-content class="contenedor-logo">\n    <ion-img width="170" height="170" src="assets/images/logo-login.png"></ion-img>\n  </ion-content>\n\n  <ion-content class="login">\n    <ion-row style="padding-top: 0px;" class="campos">\n      <ion-item>\n        <ion-label style="padding-left: 5%;" floating>Email Adress</ion-label>\n        <ion-input class="campos-login" type="text" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label style="padding-left: 5%;" floating>Password</ion-label>\n        <ion-input class="campos-login" type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row style="width:100%; padding-top: 15px;">\n      <button class="boton-login" ion-button (click)="login(user)">HAGAMOS EL TRATO</button>\n    </ion-row>\n	    <ion-row style="width:100%;padding-top: 15%;">\n      <label class="registrar" ion-href (click)="forgot()">Olvide mi Contraseña</label>\n      <label class="registrar" ion-label color="light" (click)="register()">¿No tienes una cuenta aún? Regístrate AQUÍ</label>\n    </ion-row>\n    <ion-row style="width:100%;padding-top: 10px;">\n      <button ion-button block class="boton-google" center (click)="loginGoogle()" block outline>\n        <ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>  Conectar con google\n      </button>\n    </ion-row>\n    <ion-row style="width:100%;padding-top: 10px;">\n      <button ion-button class="boton-facebook" center (click)="facebook1()" block outline>\n        <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>  Conectar con Facebook\n      </button>\n    </ion-row>\n\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Diego\Desktop\swap\trunk\src\pages\sign-in\sign-in.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__utilitys_facebook_service__["a" /* FacebookServiceProvider */]])
], SignInPage);

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(406));
__export(__webpack_require__(415));
__export(__webpack_require__(416));
__export(__webpack_require__(417));
__export(__webpack_require__(418));
__export(__webpack_require__(420));
__export(__webpack_require__(419));
__export(__webpack_require__(421));
__export(__webpack_require__(422));


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var oauth_1 = __webpack_require__(406);
function ensureEnvIsValid() {
    if (!window.cordova) {
        throw new Error('Cannot authenticate via a web browser');
    }
    if (!window.cordova.InAppBrowser) {
        throw new Error('The Apache Cordova InAppBrowser plugin was not found and is required');
    }
}
var OauthCordova = (function (_super) {
    __extends(OauthCordova, _super);
    function OauthCordova() {
        _super.apply(this, arguments);
        this.defaultWindowOptions = {
            location: 'no',
            clearsessioncache: 'yes',
            clearcache: 'yes'
        };
    }
    OauthCordova.prototype.openDialog = function (url, windowParams, options) {
        if (options === void 0) { options = {}; }
        var params = this.serializeOptions(windowParams);
        return new Promise(function (resolve, reject) {
            try {
                ensureEnvIsValid();
            }
            catch (error) {
                return reject(error);
            }
            var browserRef = window.cordova.InAppBrowser.open(url, '_blank', params);
            var exitListener = function () { return reject(new Error("The \"" + options.providerName + "\" sign in flow was canceled")); };
            browserRef.addEventListener('loaderror', function () {
                browserRef.removeEventListener('exit', exitListener);
                browserRef.close();
                reject(new Error("Error loading login page of \"" + options.providerName + "\""));
            });
            browserRef.addEventListener('loadstart', function (event) {
                if (event.url.indexOf(options.resolveOnUri) === 0) {
                    browserRef.removeEventListener('exit', exitListener);
                    browserRef.close();
                    resolve(event);
                }
            });
            return browserRef.addEventListener('exit', exitListener);
        });
    };
    return OauthCordova;
}(oauth_1.Oauth));
exports.OauthCordova = OauthCordova;


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(403);
var Facebook = (function (_super) {
    __extends(Facebook, _super);
    function Facebook(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://www.facebook.com/v2.0/dialog/oauth';
        this.defaults = {
            responseType: 'token'
        };
        if (!options.appScope || options.appScope.length <= 0) {
            throw new Error("A " + this.name + " app scope must exist");
        }
    }
    Facebook.prototype.optionsToDialogUrl = function (options) {
        var url = _super.prototype.optionsToDialogUrl.call(this, options);
        if (options.authType) {
            url += "&auth_type=" + options.authType;
        }
        return url;
    };
    return Facebook;
}(provider_1.OAuthProvider));
exports.Facebook = Facebook;


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(403);
var Google = (function (_super) {
    __extends(Google, _super);
    function Google(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://accounts.google.com/o/oauth2/auth';
        this.APP_SCOPE_DELIMITER = ' ';
        this.defaults = {
            responseType: 'token'
        };
        if (!options.appScope || options.appScope.length <= 0) {
            throw new Error("A " + this.name + " app scope must exist");
        }
    }
    Google.prototype.optionsToDialogUrl = function (options) {
        return _super.prototype.optionsToDialogUrl.call(this, options) + '&approval_prompt=force';
    };
    return Google;
}(provider_1.OAuthProvider));
exports.Google = Google;


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(403);
var Imgur = (function (_super) {
    __extends(Imgur, _super);
    function Imgur(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://api.imgur.com/oauth2/authorize';
        this.defaults = {
            responseType: 'token'
        };
    }
    return Imgur;
}(provider_1.OAuthProvider));
exports.Imgur = Imgur;


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(403);
var Instagram = (function (_super) {
    __extends(Instagram, _super);
    function Instagram(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://api.instagram.com/oauth/authorize';
        this.APP_SCOPE_DELIMITER = '+';
        this.defaults = {
            responseType: 'token'
        };
    }
    return Instagram;
}(provider_1.OAuthProvider));
exports.Instagram = Instagram;


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(403);
var LinkedIn = (function (_super) {
    __extends(LinkedIn, _super);
    function LinkedIn() {
        _super.apply(this, arguments);
        this.authUrl = 'https://www.linkedin.com/oauth/v2/authorization';
        this.APP_SCOPE_DELIMITER = ' ';
        this.defaults = {
            responseType: 'code'
        };
    }
    return LinkedIn;
}(provider_1.OAuthProvider));
exports.LinkedIn = LinkedIn;


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(403);
var Meetup = (function (_super) {
    __extends(Meetup, _super);
    function Meetup(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://secure.meetup.com/oauth2/authorize/';
        this.defaults = {
            responseType: 'token'
        };
    }
    return Meetup;
}(provider_1.OAuthProvider));
exports.Meetup = Meetup;


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(403);
var Strava = (function (_super) {
    __extends(Strava, _super);
    function Strava() {
        _super.apply(this, arguments);
        this.authUrl = 'https://www.strava.com/oauth/authorize';
        this.defaults = {
            responseType: 'code'
        };
    }
    return Strava;
}(provider_1.OAuthProvider));
exports.Strava = Strava;


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(403);
var utility_1 = __webpack_require__(404);
var VK = (function (_super) {
    __extends(VK, _super);
    function VK(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://oauth.vk.com/authorize';
        this.defaults = {
            responseType: 'token',
            redirectUri: 'https://oauth.vk.com/blank.html'
        };
        if (!options.appScope || options.appScope.length <= 0) {
            throw new Error("A " + this.name + " app scope must exist");
        }
    }
    VK.prototype.optionsToDialogUrl = function (options) {
        utility_1.utils.defaults(options, this.defaults);
        var url = _super.prototype.optionsToDialogUrl.call(this, options);
        if (options.display) {
            url += "&display=" + options.display;
        }
        if (options.v) {
            url += "&v=" + options.v;
        }
        if (options.revoke) {
            url += "&revoke=" + options.revoke;
        }
        return url;
    };
    return VK;
}(provider_1.OAuthProvider));
exports.VK = VK;


/***/ })

});
//# sourceMappingURL=0.main.js.map