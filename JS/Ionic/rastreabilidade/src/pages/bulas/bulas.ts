import { BulaService } from './../../providers/bula';
import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Bulas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bulas',
  templateUrl: 'bulas.html',
  providers: [BulaService]
})
export class BulasPage {

  nomeMedicamento: string = '';
  msgErro: string = '';
  medicamentos:any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public bulaService : BulaService,
    public loadingCtrl : LoadingController
  ) 
  {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Bulas');
    this.medicamentos = [];
  }

  ionViewWillLeave() {
    //console.log('Deixou a página');
    this.medicamentos = [];
    this.nomeMedicamento = '';
  }

  onSearchBula() {
    this.msgErro = '';
    if(this.nomeMedicamento.length == 0){
      this.msgErro = 'Informe o nome do medicamento';
      return;
    }

     let loading = this.loadingCtrl.create({
        content: 'Buscando medicamentos'
    });

    loading.present();

    this.bulaService.getMedicamentos(this.nomeMedicamento)
        .then((response) => {
         this.medicamentos = [];

         response.forEach(element => {
           let imgUrlMedicamento: string = element.thumbnail_images.image_produto.url;
           let titleMediamento: string = element.title;
           let urlBulaMedicamento = '';

           //Buscando o ID da bula e procurando no attachments o ID da bula, para buscar a url
           if(element.custom_fields.url_da_bula && element.custom_fields.url_da_bula[0]){
             let idBula = element.custom_fields.url_da_bula[0];
             element.attachments.forEach(element => {
               if(element.id == idBula){
                 urlBulaMedicamento = element.url;
               }
             });
           }


           let object: any = {
             'imgUrl' : imgUrlMedicamento,
             'titulo' : titleMediamento,
             'urlBula' : urlBulaMedicamento
           }

           this.medicamentos.push(object);
         });

          //this.medicamentos = bulas;
          loading.dismiss();
        })
        .catch((err) => {
          console.log('O erro é', err);
        })
  }

}
