import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions} from '@angular/http';
import { Observable, observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';
import { ShortUrlComponent } from '../components/short-url/short-url.component';
import { Url } from '../Url';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {
  private baseUrl = 'http://localhost:8080';
  private headers = new Headers ( { 'Content-Type': 'application/json' } );
  private options = new RequestOptions({headers: this.headers});
  private url: Url;
  constructor(private _http: Http) {    }

  redirectUrl(id: String) {
    return this._http.get(this.baseUrl + id, this.options).pipe(map((response: Response) => response.json))
    .catch(this.errorHandler);
  }
  shortenUrl(url: Url) {
    return this._http.post(this.baseUrl + '/shortener', this.options).pipe(map((response: Response) => response.json))
    .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || 'Server Error');
  }
  setter(url: Url ) {
     this.url = url;
  }
  getter() {
    return this.url;
  }
}
