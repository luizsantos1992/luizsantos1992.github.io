import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Bula provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BulaService {

  private apiUrl = 'https://content.cuidadospelavida.com.br/?json=get_search_results&post_type=produto&count=6&search=';

  constructor(public http: Http) {
    //console.log('Hello Bula Provider');
  }

  getMedicamentos(nomeMedicamento): Promise<any[]> {
      return this.http.get(this.apiUrl + nomeMedicamento)
              .toPromise()
              .then(response => response.json().posts as any[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('Erro ocorrido', error);
    return Promise.reject(error.message || error);
  }

}
