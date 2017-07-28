import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Contato provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Contato {

  private apiUrl: string = 'http://rotapi.sendEmail.cuidadospelavida.com.br';

  constructor(public http: Http) {
    //console.log('Hello Contato Provider');
  }

  sendEmail(texto): Promise<any[]> {
      let params: URLSearchParams = new URLSearchParams();
      params.set('mensagem', texto);

      let requestOptions = new RequestOptions();
      requestOptions.search = params;

      return this.http.get(this.apiUrl, requestOptions)
              .toPromise()
              .then(response => response.json().posts as any[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('Erro ocorrido', error);
    return Promise.reject(error.message || error);
  }

}
