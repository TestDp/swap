import {Component, QueryList, Renderer} from '@angular/core';
import {IonicPage, ModalController, NavController, Platform, DomController, NavParams, AlertController} from 'ionic-angular';
import {  AngularFireDatabase } from 'angularfire2/database';

import firebase from 'firebase';
import { Input, ViewChildren } from '@angular/core';
import {modalNotificacionesPage} from "./modal/modalNotificaciones";

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
  styles: ['notificaciones.scss']
})

export class NotificacionesPage {
  @Input() accordionMode: boolean = false;
  @Input() iosItemHeight: number = 50;
  @Input() mdItemHeight: number = 50;
  @Input() wpItemHeight: number = 50;
  @ViewChildren('options') optionDivs: QueryList<any>;
  @ViewChildren('headerIcon') headerIcons;

  publicaciones: any = [];
  publicacionesArticulo: any = [];
  articulosCambio: any = [];
  rutaImagenes: any = [];
  rutaUrl: any;
  mostrarSlider: boolean;
  slides:any = [];
  publicacion:any;
  usuarioLoggeado:any;
  articuloSeleccionado:any = [];
  payload: any;
  constructor(
    public database: AngularFireDatabase,
    private af: AngularFireDatabase,
    public navCtrl: NavController,
    private platform: Platform,
    private domCtrl: DomController,
    private renderer: Renderer,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ) {
    this.usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
    this.cargarPublicacion();
    this.mostrarSlider = false;

  }

  ionViewDidLoad() {
    this.payload = this.navParams.get('payload');
    //let entraIf:any;
    if (this.payload != null) {
     
    }


  }

  cargarPublicacion(){
    const queryObservable = this.af.list('/articuloSwap/', {
      query: {
        orderByChild: 'usuarioPertenece',
        equalTo: this.usuarioLoggeado.email,
      }
    });
    queryObservable
      .subscribe(queriedItems1 => {
        this.publicaciones = queriedItems1;
        for (var i = 0; i < this.publicaciones.length; i++){
          this.articulosCambio = this.publicaciones[i].articulosOfrece;
          let articuloFinal:any = [];
          for (var j = 0; j < this.articulosCambio.length; j++){
            const queryObservable1 = this.af.list('/article/', {
              query: {
                orderByChild: 'id',
                equalTo: this.articulosCambio[j],
              }
            });
            queryObservable1
              .subscribe(queriedItems2 => {
                this.publicacionesArticulo = queriedItems2;

                for (var k = 0; k < this.publicacionesArticulo.length; k++){
                  this.rutaImagenes = this.publicacionesArticulo[k].imageUrl;
                  let rutaPublicacion:any = [];
                  for (var l = 0; l < this.rutaImagenes.length; l++){
                    firebase.storage().ref().child('ImagenesArticulos/'+ this.publicacionesArticulo[k].usuario + "/" + this.rutaImagenes[l]).getDownloadURL()
                      .then(response => {
                        this.rutaUrl = response;
                        rutaPublicacion.push(this.rutaUrl);
                      })
                      .catch(error => console.log('error', error))
                  }
                  this.publicacionesArticulo[k].imageUrl = rutaPublicacion;
                  articuloFinal.push(this.publicacionesArticulo[k]);
                }
             });

          }

          this.publicaciones[i].publicacionesArticulo = articuloFinal;

       }
    });

  }
  seleccionar(articulo, publicacion){
    let profileModal = this.modalCtrl.create(modalNotificacionesPage, { articulo: articulo, publicacion: publicacion });
    profileModal.present();
  }


  // Toggle the sub options of the selected item
  public toggleItemOptions(optionsDivElement: any, arrowIcon: any, itemsCount: number): void {
    let itemHeight;

    if (this.accordionMode) {
      this.collapseAllOptionsExceptSelected(optionsDivElement);
      this.resetAllIconsExceptSelected(arrowIcon);
    }

    if (this.platform.is('ios')) {
      itemHeight = this.iosItemHeight;
    } else if (this.platform.is('windows')) {
      itemHeight = this.wpItemHeight;
    } else {
      itemHeight = this.mdItemHeight;
    }

    this.toggleOptionSubItems(optionsDivElement, itemHeight + 1, itemsCount);
    this.toggleOptionIcon(arrowIcon);
  }

  // Collapse the sub items of all the options except the selected option
  private collapseAllOptionsExceptSelected(selectedOptionsContainer: any): void {
    this.optionDivs.forEach(optionDiv => {
      let optionElement = optionDiv.nativeElement;
      if (optionElement.id !== selectedOptionsContainer.id && this.subItemsAreExpanded(optionElement)) {
        this.hideSubItems(optionElement);
      }
    });
  }

  // Reset the arrow icon of all the options except the selected option
  private resetAllIconsExceptSelected(selectedArrowIcon: any): void {
    this.headerIcons.forEach(headerIcon => {
      let iconElement = headerIcon.nativeElement;
      if (iconElement.id !== selectedArrowIcon.id && this.iconIsRotated(iconElement)) {
        this.resetIcon(iconElement);
      }
    });
  }

  // Toggle the sub items of the selected option
  private toggleOptionSubItems(optionsContainer: any, elementHeight: number, itemsCount: number): void {
    this.domCtrl.write(() => {
      this.subItemsAreExpanded(optionsContainer)
        ? this.renderer.setElementStyle(optionsContainer, 'height', '0px')
        : this.renderer.setElementStyle(optionsContainer, 'height', `${(elementHeight * itemsCount)}px`);
    });
  }

  // Toggle the arrow icon of the selected option
  private toggleOptionIcon(arrowIcon: any): void {
    this.domCtrl.write(() => {
      this.iconIsRotated(arrowIcon)
        ? this.renderer.setElementClass(arrowIcon, 'rotate', false)
        : this.renderer.setElementClass(arrowIcon, 'rotate', true);
    });
  }


  // Return true if sub items are expanded
  private subItemsAreExpanded(element: any): boolean {
    return element.style.height !== '' && element.style.height !== '0px';
  }

  // Collapse the sub items of the selected option
  private hideSubItems(optionsContainer: any): void {
    this.domCtrl.write(() => {
      this.renderer.setElementStyle(optionsContainer, 'height', '0px');
    });
  }

  // Return true if the icon is rotated
  private iconIsRotated(element: any): boolean {
    return element.classList.contains('rotate');
  }

  // Reset the arrow icon of the selected option
  private resetIcon(arrowIcon: any): void {
    this.domCtrl.write(() => {
      this.renderer.setElementClass(arrowIcon, 'rotate', false);
    });
  }




}
/**
 * Created by N56J on 29/11/2017.
 */

