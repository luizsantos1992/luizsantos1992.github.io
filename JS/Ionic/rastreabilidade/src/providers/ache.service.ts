import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AcheService {

  private apiUrl: string = 'http://www.ache.com.br/blog-valor-para-todos/feed/';

  constructor(public http: Http) {
    //console.log('Hello AcheService Provider');
  }

  getContent(): Promise<any[]> {
    return this.http.get(this.apiUrl)
              .toPromise()
              .then((response) => response)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('Erro ocorrido', error);
    return Promise.reject(error.message || error);
  }

}
