import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  token:any;
  error:any;

  constructor(public navCtrl: NavController, private firebase: Firebase, private platform: Platform) {
    console.log("testando aplicação");
      alert("testando aplicação");

    this.platform.ready().then(() => {

      console.log("testando aplicação");
      alert("testando aplicação");

      this.firebase.getToken()
      .then(token => this.token = token) // save the token server-side and use it to push notifications to this device
      .catch(error => this.error = error);

      this.firebase.onTokenRefresh()
      .subscribe((token: string) => console.log(`Got a new token ${token}`));
    })


  }

}
