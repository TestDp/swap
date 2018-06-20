
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Article } from "../../models/article";
import { AngularFireAuth } from 'angularfire2/auth';
import { MyApp } from "../../app/app.component";
import { FirebaseApp } from 'angularfire2';
import { MediaCapture, CaptureImageOptions } from '@ionic-native/media-capture';
import { Base64 } from '@ionic-native/base64';


@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})


export class PublishPage {

  myForm: FormGroup;
  article = {} as Article;
  publicarArticulo: FirebaseListObservable<any[]>;
  subirImagenes: FirebaseListObservable<any>;
  storageRef: any;
  file: any;
  file2: any;
  captureDataUrl: any;
  usuarioLoggeado: any;
  nombreArchivos: any = [];
  fullUrl: any = [];
  listaImagenes: any = [];
  bigImg: any = [];
  smallImg = null;
  loading: any = [];


  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    private af: AngularFireDatabase,
    public appmain: MyApp,
    private fb: FirebaseApp,
    private mediaCapture: MediaCapture,
    public myapp: MyApp,
    private base64: Base64,
    public loadingCtrl: LoadingController,

  ) {
    this.myForm = this.createMyForm();
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.publicarArticulo = this.af.list('/article/');

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishPage');
  }

  private createMyForm() {
    return this.formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', Validators.required],
      imagen: [''],
      File: [''],
      categoria: [''],
      categorias: [''],
      rango: [''],
    });
  }

  saveData() {
    console.log(this.myForm.value);
  }

  public SubirImagenFirebase() {
    this.alertCtrl.create({
      title: 'Email ya registrado',
      subTitle: 'valide el Email',
      buttons: ['Volver a intentar']
    }).present();
  }


  validationImage() {
    var input = document.getElementById('mainImage');
    input.addEventListener("change", this.SubirImagenFirebase, false);
  }

  ngAfterViewInit() {
    this.myapp.submenu = false;
  }

  ionViewWillLeave(){
    this.myapp.submenu = true;
  }


  publish(article: Article) {
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
    } else {
      try {
        this.file = (document.getElementById("mainImage"));
        let rutaThumbail = this.grabarImagenes();
      } catch (error) {
        alert("imagen pequeña error" + error);
      }

    }

  }

  publish1(article: Article) {
    console.log("rangos", article);
  }

  grabarImagenes() {
    return new Promise((resolve, reject) => {
      var ubicacion = JSON.parse(localStorage.getItem("ubicacion"));
      var pais = ubicacion.countryName;
      var ciudad = ubicacion.subAdministrativeArea;
      let uploadTask2;
      let storageRef = this.fb.storage().ref();
      for (var i = 0; i < this.bigImg.length; i++) {
        //let imagenSubir = this.file.files[i];
        const filename = Math.floor(Date.now()) + i; 
        //let uploadTask = storageRef.child('ImagenesArticulos/' + this.usuarioLoggeado.email + "/" + filename).put(imagenSubir);
        this.nombreArchivos.push(filename);
        this.generateFromImage(this.bigImg[i], 450, 450, 9.5, data => {
          let cleanedDataPrev = data.replace('data:image/jpeg;base64,', '');
          this.smallImg = cleanedDataPrev;
          uploadTask2 = storageRef.child('ImagenesArticulosThumb/' + this.usuarioLoggeado.email + "/" + filename).putString(this.smallImg, 'base64', { contentType: 'image/png' });
          uploadTask2.then(data => {
            this.fullUrl.push(data.downloadURL);
            console.log("canvas image", this.fullUrl);
            let prioridad;
            if (this.usuarioLoggeado.prioridad == null) {
              prioridad = 2
            } else {
              prioridad = this.usuarioLoggeado.prioridad
            }

            if (this.fullUrl.length == this.bigImg.length) {
              var date = new Date();
              var formatDate = date.toISOString();
              this.publicarArticulo.push({
                titulo: this.article.titulo,
                descripcion: this.article.descripcion,
                usuario: this.usuarioLoggeado.email,
                categoria: this.article.categoria,
                categoriasCambio: this.article.categorias,
                imageUrl: this.nombreArchivos,
                estado: "A",
                pais: pais,
                ciudad: ciudad,
                uid: this.usuarioLoggeado.uid,
                fecha: date,
                id: this.usuarioLoggeado.uid + formatDate,
                imageThumb: this.fullUrl,
                rango: this.article.rango,
                prioridad: prioridad
              }).then((snap) => {
                this.loading.dismiss();
                let alert = this.alertCtrl.create({
                  title: 'Creado exitosamente',
                  subTitle: 'Ya este articulo se puede cambiar',
                  cssClass: 'alert-danger',
                  buttons: [
                    {
                      text: 'Aceptar',
                      role: 'Aceptar',
                      handler: () => {
                        this.redireccionarHome();
                      }
                    }
                  ]
                });
                alert.present();

              })

            }
          });

        });

      }
      resolve("true");

    });

  }

  redireccionarHome() {
    //this.navCtrl.push('HomePage')
    this.myapp.rootPage = 'HomePage';
  }



  onImageChange() {
    if (this.bigImg.length < 3) {
      try {
        this.file = (document.getElementById("mainImage"));
        //var file: File = this.file.files[0];
        for (var i = 0; i < this.file.files.length; i++) {
          var url = URL.createObjectURL(this.file.files[i]);
          this.convertToDataURLviaCanvas(url, "image/jpeg").then(base64 => {

            this.bigImg.push(base64);
            console.log("imagenes convertidas", this.bigImg);

          });
        }

      } catch (error) {
        alert("imagen pequeña 3" + error);
      }
    } else {
      this.alertImagenes();
    }


  }

  alertImagenes() {
    let alert = this.alertCtrl.create({
      title: 'Información importante',
      subTitle: 'Solo se permite subir tres imagenes por artículo.',
      cssClass: 'alert-danger',
      buttons: [
        {
          text: 'Aceptar',
          role: 'Aceptar',
          handler: () => {

          }
        }
      ]
    });
    alert.present();

  }


  convertToDataURLviaCanvas(url, outputFormat) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        resolve(dataURL);
        canvas = null;
      };
      img.src = url;
    });
  }

  generateFromImage(img, MAX_WIDTH: number = 1700, MAX_HEIGHT: number = 1700, quality: number = 30, callback) {
    var canvas: any = document.createElement("canvas");
    var image = new Image();

    image.onload = () => {
      var width = image.width;
      var height = image.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
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

      callback(dataUrl)
    }
    image.src = img;
  }

  captureFoto() {
    let options: CaptureImageOptions = { limit: 3 };
    this.mediaCapture.captureImage(options).then((imagedata: any) => {
      let file = imagedata;
      this.file2 = JSON.stringify(file);
      alert("informacion imagen camara" + JSON.stringify(this.file2));
      imagedata.forEach(element => {
        //item.imagenPrincipal = element.fullPath;
        this.captureDataUrl = 'data:image/jpeg;base64,' + imagedata;
      });
    })
  }

  subirFoto() {
    let storageRef = this.fb.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);
    imageRef.putString(this.captureDataUrl, "").then((snapshot) => {
      // Do something here when the data is succesfully uploaded!
    });

  }

  obtenerImage() {

  }

  alertaPrueba(){
    alert("Se recomienda subir imagen tomadas de forma horizontalmente..");
  }



}
