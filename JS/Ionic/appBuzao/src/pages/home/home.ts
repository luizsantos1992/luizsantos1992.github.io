import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiService } from './../../providers/api.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private frota:any[] = [];

  constructor(public navCtrl: NavController, public apiService : ApiService) {

  }

  ionViewDidLoad(){
    this.refresh();
  }

  refresh() {
    this.frota = [];
    this.apiService.getContent()
        .then((response) => {
          response.forEach((arr) => {
              let address = '';
              //pegando endereço
              this.apiService.getAdress(arr[3], arr[4])
                  .then((response) => {
                    if(response.length > 0){
                      address = response[0].formatted_address;
                    }

                    this.frota.push({
                      'linha' : arr[2],
                      'dataHora' : arr[0],
                      'endereco' : address
                    });
                  })
                  .catch((err) => console.log(err));
          }) 
        })
        .catch((err) => console.log(err));
  }

}
