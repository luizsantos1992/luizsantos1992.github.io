import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



/**
 * Generated class for the Rastreabilidade page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-rastreabilidade',
  templateUrl: 'rastreabilidade.html',
  providers: [BarcodeScanner]
})
export class RastreabilidadePage {

  code : string = '';
  msgErrCode : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rastreabilidade');
    console.log(this.msgErrCode.length);
  }

  onBarcodeScanner():void {
    
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }

  getCode():void {
    this.msgErrCode = '';

    if(this.code.length == 0){
      this.msgErrCode = 'Código não localizado';
    }

    this.code = '';
  }

  
}
