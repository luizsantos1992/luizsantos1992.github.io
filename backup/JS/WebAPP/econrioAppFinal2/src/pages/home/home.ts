import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BrowserQRCodeReader, VideoInputDevice } from '@zxing/library';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scannerActivite: boolean = false;
  codeReader:BrowserQRCodeReader;

  constructor(public navCtrl: NavController) {
    this.codeReader = new BrowserQRCodeReader();
  }

  scanner() {
    
    this.codeReader.getVideoInputDevices()
        .then(videoInputDevices => {
            this.scannerActivite = true;
            let deviceID = undefined;
            videoInputDevices.forEach(
                device => { 
                  console.log(`${device.label}, ${device.deviceId}`)
                  if(device.label.includes('back')) {
                    deviceID = device.deviceId;
                  }
                }
            );

            const firstDeviceId = deviceID;
              
            this.codeReader.decodeFromInputVideoDevice(firstDeviceId, 'video')
                .then(result => {
                  alert(result);
                  this.cancelScanner();
                 })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
  }

  cancelScanner() {
    this.scannerActivite = false;
    this.codeReader.reset();

  }

}
