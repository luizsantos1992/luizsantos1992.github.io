import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[CallNumber]
})
export class ContactPage {

  private mensagem:string = '';

  constructor(public navCtrl: NavController, private call: CallNumber) {

  }

  sendEmail() {
    console.log(this.mensagem);

    this.call.callNumber("21964445656", true)
             .then(() => console.log('Carregado corretamente!'))
             .catch(() => console.log('Erro'));
  }

}
