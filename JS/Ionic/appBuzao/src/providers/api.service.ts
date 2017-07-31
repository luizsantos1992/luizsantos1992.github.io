import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiService {

  private urlAPI = 'http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterPosicoesDaLinha/692'
  private getAdressApi = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
  constructor(public http: Http) {
    console.log('Hello ApiService Provider');
  }

  getContent(): Promise<any[]> {
      return this.http.get(this.urlAPI)
               .toPromise()
               .then(response => response.json().DATA as any[])
               .catch(this.handleError);
  }

  getAdress(lat, log): Promise<any[]> {
      return this.http.get(this.getAdressApi + lat +','+log+'&sensor=true')
               .toPromise()
               .then(response => response.json().results as any[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
