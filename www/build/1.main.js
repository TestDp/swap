webpackJsonp([1],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publish__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishPageModule", function() { return PublishPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PublishPageModule = (function () {
    function PublishPageModule() {
    }
    return PublishPageModule;
}());
PublishPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__publish__["a" /* PublishPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__publish__["a" /* PublishPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__publish__["a" /* PublishPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */]],
    })
], PublishPageModule);

//# sourceMappingURL=publish.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaCapture; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Media Capture
 * @description
 * @usage
 * ```typescript
 * import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
 *
 *
 * constructor(private mediaCapture: MediaCapture) { }
 *
 * ...
 *
 *
 * let options: CaptureImageOptions = { limit: 3 };
 * this.mediaCapture.captureImage(options)
 *   .then(
 *     (data: MediaFile[]) => console.log(data),
 *     (err: CaptureError) => console.error(err)
 *   );
 *
 * ```
 * @interfaces
 * MediaFile
 * MediaFileData
 * CaptureError
 * CaptureAudioOptions
 * CaptureImageOptions
 * CaptureVideoOptions
 * ConfigurationData
 */
var MediaCapture = (function (_super) {
    __extends(MediaCapture, _super);
    function MediaCapture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Start the audio recorder application and return information about captured audio clip files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.prototype.captureAudio = function (options) {
        return;
    };
    /**
     * Start the camera application and return information about captured image files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.prototype.captureImage = function (options) {
        return;
    };
    /**
     * Start the video recorder application and return information about captured video clip files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.prototype.captureVideo = function (options) {
        return;
    };
    /**
     * is fired if the capture call is successful
     * @returns {Observable<MediaFile[]>}
     */
    MediaCapture.prototype.onPendingCaptureResult = function () {
        return;
    };
    /**
     * is fired if the capture call is unsuccessful
     * @returns {Observable<CaptureError>}
     */
    MediaCapture.prototype.onPendingCaptureError = function () {
        return;
    };
    MediaCapture.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    MediaCapture.ctorParameters = function () { return []; };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* CordovaProperty */],
        __metadata("design:type", Array)
    ], MediaCapture.prototype, "supportedImageModes", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* CordovaProperty */],
        __metadata("design:type", Array)
    ], MediaCapture.prototype, "supportedAudioModes", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* CordovaProperty */],
        __metadata("design:type", Array)
    ], MediaCapture.prototype, "supportedVideoModes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], MediaCapture.prototype, "captureAudio", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], MediaCapture.prototype, "captureImage", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], MediaCapture.prototype, "captureVideo", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'pendingcaptureresult'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], MediaCapture.prototype, "onPendingCaptureResult", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'pendingcaptureerror'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], MediaCapture.prototype, "onPendingCaptureError", null);
    MediaCapture = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Plugin */])({
            pluginName: 'MediaCapture',
            plugin: 'cordova-plugin-media-capture',
            pluginRef: 'navigator.device.capture',
            repo: 'https://github.com/apache/cordova-plugin-media-capture',
            platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
        })
    ], MediaCapture);
    return MediaCapture;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(271);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PublishPage = (function () {
    function PublishPage(afAuth, navCtrl, alertCtrl, formBuilder, af, appmain, fb, mediaCapture, myapp, base64, loadingCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.af = af;
        this.appmain = appmain;
        this.fb = fb;
        this.mediaCapture = mediaCapture;
        this.myapp = myapp;
        this.base64 = base64;
        this.loadingCtrl = loadingCtrl;
        this.article = {};
        this.nombreArchivos = [];
        this.fullUrl = [];
        this.listaImagenes = [];
        this.bigImg = [];
        this.smallImg = null;
        this.loading = [];
        this.myForm = this.createMyForm();
        this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
        this.publicarArticulo = this.af.list('/article/');
    }
    PublishPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublishPage');
    };
    PublishPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            titulo: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required]],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required],
            imagen: [''],
            File: [''],
            categoria: [''],
            categorias: [''],
            rango: [''],
        });
    };
    PublishPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    PublishPage.prototype.SubirImagenFirebase = function () {
        this.alertCtrl.create({
            title: 'Email ya registrado',
            subTitle: 'valide el Email',
            buttons: ['Volver a intentar']
        }).present();
    };
    PublishPage.prototype.validationImage = function () {
        var input = document.getElementById('mainImage');
        input.addEventListener("change", this.SubirImagenFirebase, false);
    };
    PublishPage.prototype.publish = function (article) {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando artículo...'
        });
        this.loading.present();
        console.log("objeto publicar", this.article);
        if (this.article.categoria == undefined || this.article.categorias == undefined || this.article.descripcion == undefined ||
            this.article.file == undefined || this.article.rango == undefined || this.article.titulo == undefined) {
            this.alertCtrl.create({
                title: 'Información',
                subTitle: 'Debes ingresar todos los datos solicitados',
                buttons: ['Aceptar']
            }).present();
            this.loading.dismiss();
        }
        else {
            try {
                this.file = (document.getElementById("mainImage"));
                var rutaThumbail = this.grabarImagenes();
            }
            catch (error) {
                alert("imagen pequeña error" + error);
            }
        }
    };
    PublishPage.prototype.publish1 = function (article) {
        console.log("rangos", article);
    };
    PublishPage.prototype.grabarImagenes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ubicacion = JSON.parse(localStorage.getItem("ubicacion"));
            var pais = ubicacion.countryName;
            var ciudad = ubicacion.subAdministrativeArea;
            var uploadTask2;
            var storageRef = _this.fb.storage().ref();
            var _loop_1 = function () {
                //let imagenSubir = this.file.files[i];
                var filename = Math.floor(Date.now()) + i;
                //let uploadTask = storageRef.child('ImagenesArticulos/' + this.usuarioLoggeado.email + "/" + filename).put(imagenSubir);
                _this.nombreArchivos.push(filename);
                _this.generateFromImage(_this.bigImg[i], 450, 450, 9.5, function (data) {
                    var cleanedDataPrev = data.replace('data:image/jpeg;base64,', '');
                    _this.smallImg = cleanedDataPrev;
                    uploadTask2 = storageRef.child('ImagenesArticulosThumb/' + _this.usuarioLoggeado.email + "/" + filename).putString(_this.smallImg, 'base64', { contentType: 'image/png' });
                    uploadTask2.then(function (data) {
                        _this.fullUrl.push(data.downloadURL);
                        console.log("canvas image", _this.fullUrl);
                        var prioridad;
                        if (_this.usuarioLoggeado.prioridad == null) {
                            prioridad = 2;
                        }
                        else {
                            prioridad = _this.usuarioLoggeado.prioridad;
                        }
                        if (_this.fullUrl.length == _this.bigImg.length) {
                            var date = new Date();
                            var formatDate = date.toISOString();
                            _this.publicarArticulo.push({
                                titulo: _this.article.titulo,
                                descripcion: _this.article.descripcion,
                                usuario: _this.usuarioLoggeado.email,
                                categoria: _this.article.categoria,
                                categoriasCambio: _this.article.categorias,
                                imageUrl: _this.nombreArchivos,
                                estado: "A",
                                pais: pais,
                                ciudad: ciudad,
                                uid: _this.usuarioLoggeado.uid,
                                fecha: date,
                                id: _this.usuarioLoggeado.uid + formatDate,
                                imageThumb: _this.fullUrl,
                                rango: _this.article.rango,
                                prioridad: prioridad
                            }).then(function (snap) {
                                _this.loading.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: 'Creado exitosamente',
                                    subTitle: 'Ya este articulo se puede cambiar',
                                    cssClass: 'alert-danger',
                                    buttons: [
                                        {
                                            text: 'Aceptar',
                                            role: 'Aceptar',
                                            handler: function () {
                                                _this.redireccionarHome();
                                            }
                                        }
                                    ]
                                });
                                alert.present();
                            });
                        }
                    });
                });
            };
            for (var i = 0; i < _this.bigImg.length; i++) {
                _loop_1();
            }
            resolve("true");
        });
    };
    PublishPage.prototype.redireccionarHome = function () {
        //this.navCtrl.push('HomePage')
        this.myapp.rootPage = 'HomePage';
    };
    PublishPage.prototype.onImageChange = function () {
        var _this = this;
        if (this.bigImg.length < 3) {
            try {
                this.file = (document.getElementById("mainImage"));
                //var file: File = this.file.files[0];
                for (var i = 0; i < this.file.files.length; i++) {
                    var url = URL.createObjectURL(this.file.files[i]);
                    this.convertToDataURLviaCanvas(url, "image/jpeg").then(function (base64) {
                        _this.bigImg.push(base64);
                        console.log("imagenes convertidas", _this.bigImg);
                    });
                }
            }
            catch (error) {
                alert("imagen pequeña 3" + error);
            }
        }
        else {
            this.alertImagenes();
        }
    };
    PublishPage.prototype.alertImagenes = function () {
        var alert = this.alertCtrl.create({
            title: 'Información importante',
            subTitle: 'Solo se permite subir tres imagenes por artículo.',
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
    PublishPage.prototype.convertToDataURLviaCanvas = function (url, outputFormat) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                resolve(dataURL);
                canvas = null;
            };
            img.src = url;
        });
    };
    PublishPage.prototype.generateFromImage = function (img, MAX_WIDTH, MAX_HEIGHT, quality, callback) {
        if (MAX_WIDTH === void 0) { MAX_WIDTH = 1700; }
        if (MAX_HEIGHT === void 0) { MAX_HEIGHT = 1700; }
        if (quality === void 0) { quality = 30; }
        var canvas = document.createElement("canvas");
        var image = new Image();
        image.onload = function () {
            var width = image.width;
            var height = image.height;
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, width, height);
            // IMPORTANT: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg', quality);
            callback(dataUrl);
        };
        image.src = img;
    };
    PublishPage.prototype.captureFoto = function () {
        var _this = this;
        var options = { limit: 3 };
        this.mediaCapture.captureImage(options).then(function (imagedata) {
            var file = imagedata;
            _this.file2 = JSON.stringify(file);
            alert("informacion imagen camara" + JSON.stringify(_this.file2));
            imagedata.forEach(function (element) {
                //item.imagenPrincipal = element.fullPath;
                _this.captureDataUrl = 'data:image/jpeg;base64,' + imagedata;
            });
        });
    };
    PublishPage.prototype.subirFoto = function () {
        var storageRef = this.fb.storage().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("images/" + filename + ".jpg");
        imageRef.putString(this.captureDataUrl, "").then(function (snapshot) {
            // Do something here when the data is succesfully uploaded!
        });
    };
    PublishPage.prototype.obtenerImage = function () {
    };
    PublishPage.prototype.alertaPrueba = function () {
        alert("Se recomienda subir imagen tomadas de forma horizontalmente..");
    };
    return PublishPage;
}());
PublishPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-publish',template:/*ion-inline-start:"C:\Users\Diego\Desktop\swap\trunk\src\pages\publish\publish.html"*/'<!--\n  Generated template for the PublishPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Publicar Articulos</ion-title>\n    <ion-buttons right>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-image: url(\'assets/images/fondo-home.png\'); background-size:contain;" padding>\n\n  <form [formGroup]="myForm" (ngSubmit)="saveData()">\n    <div style="overflow-y: scroll; height:400px;">\n      <ion-list >\n        <ion-item>\n          <ion-icon name="person" item-left></ion-icon>\n          <ion-input class="campos-publicar" formControlName="titulo" type="text" [(ngModel)]="article.titulo" placeholder="Titulo"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'titulo\').errors && myForm.get(\'titulo\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'titulo\').hasError(\'required\')">El campo titulo es requerido</p>\n        </ion-item> \n        <ion-item class="campos-textpublicar">\n          <!--<ion-input formControlName="descripcion" type="text" [(ngModel)]="article.descripcion" placeholder="Descripcion del articulo"></ion-input>-->\n          <ion-textarea class="campos-textpublicar2" formControlName="descripcion" style="background-color: #F2F2F2;" #myInput id="myInput" rows="5" maxLength="500"\n            [(ngModel)]="article.descripcion" placeholder="Descripcion del articulo"></ion-textarea>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">El campo Descripcion es requerido</p>\n        </ion-item>\n        <ion-item class ="campos-publicar2">\n          <ion-label>Categoria</ion-label>\n          <ion-select formControlName="categoria" [(ngModel)]="article.categoria">\n            <ion-option>Hogar y muebles</ion-option>\n            <ion-option>Electrodomésticos</ion-option>\n            <ion-option>Accesorios para vehículos</ion-option>\n            <ion-option>Tecnología</ion-option>\n            <ion-option>Inmuebles</ion-option>\n            <ion-option>Accesorios personales</ion-option>\n            <ion-option>Entretenimiento y videojuegos</ion-option>\n            <ion-option>Industria</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class ="campos-publicar2">\n          <ion-label>Categorias de cambio</ion-label>\n          <ion-select formControlName="categorias" [(ngModel)]="article.categorias" multiple="true">\n            <ion-option>Hogar y muebles</ion-option>\n            <ion-option>Electrodomésticos</ion-option>\n            <ion-option>Accesorios para vehículos</ion-option>\n            <ion-option>Tecnología</ion-option>\n            <ion-option>Inmuebles</ion-option>\n            <ion-option>Accesorios personales</ion-option>\n            <ion-option>Entretenimiento y videojuegos prueba error</ion-option>\n            <ion-option>Industria</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class ="campos-publicar2">\n          <ion-label>Rango precio</ion-label>\n          <ion-select formControlName="rango" [(ngModel)]="article.rango">\n            <ion-option value="1">0-500.000</ion-option>\n            <ion-option value="2">500.000-1.000.000</ion-option>\n            <ion-option value="3">1.000.000-2.000.000</ion-option>\n            <ion-option value="4">2.000.000 o mayor</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <!-- <ion-item>\n                <ion-icon name="image" item-left></ion-icon>\n                <ion-label stacked>Imagen:</ion-label>\n                <ion-input formControlName="imagen" type="file" [(ngModel)]="article.imageUrl" placeholder="Imagen del articulo"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'imagen\').errors && myForm.get(\'imagen\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'imagen\').hasError(\'required\')">El campo Imagen es requerido</p>\n              </ion-item> -->\n\n\n\n        <ion-item class ="campos-publicar3" >\n          \n		<ion-icon name="image" item-left></ion-icon>\n          <input style="color:#ffff;"  type="file" formControlName="imagen" multiple="true" (click)="alertaPrueba()" (change)="onImageChange()" [(ngModel)]="article.file" name="subir"\n            value="" id="mainImage"\n			>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'imagen\').errors && myForm.get(\'imagen\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'imagen\').hasError(\'required\')">El campo Imagen es requerido</p>\n        </ion-item>\n        <div *ngIf="myForm.get(\'imagen\').errors && myForm.get(\'imagen\').dirty">\n          <p color="danger" ion-text *ngIf="validationImage(article.imageUrl)">se debe subir al menos una imagen</p>\n        </div>\n        <ion-row>\n          <ion-col *ngFor="let imagen of bigImg" col-4>\n            <ion-item *ngIf="bigImg.length > 0" style="border-bottom: 0px solid #ccc;">\n              <div style="height:80px;width: 80;">\n                <img style="max-width: 100%;max-height: 100%; margin:auto;display:block;width: 100%;height: 100%;" src="{{imagen}}">-->\n              </div>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <!--  (click)="publish(article)"  <progress></progress>-->\n      </ion-list>\n    </div>\n    <div padding>\n      <button ion-button block class="boton-publicar" (click)="publish(article)" [disabled]="myForm.invalid" >Guardar</button>\n    </div>\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Diego\Desktop\swap\trunk\src\pages\publish\publish.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2__["b" /* FirebaseApp */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */],
        __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
], PublishPage);

//# sourceMappingURL=publish.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map