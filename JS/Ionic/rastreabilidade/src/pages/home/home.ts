import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AcheService } from './../../providers/ache.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AcheService]
})
export class HomePage {

  constructor(public navCtrl: NavController, public acheService : AcheService) {

  }

   ionViewDidLoad() {
    //console.log('ionViewDidLoad Bulas');
    //this.acheService.getContent();
  }

}
