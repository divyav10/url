import { Component, OnInit, Input } from '@angular/core';
import { UrlServiceService } from '../../service/url-service.service';
import { Url } from '../../url';
import { Router } from '@angular/router';
@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {

  constructor(private _urlServiceServicce: UrlServiceService , private _router: Router) { }
  public id: String;

  callShortener() {
    const url = new Url();
    this._urlServiceServicce.setter(url);
    this._urlServiceServicce.shortenUrl(url).subscribe(( uniqueid ) => {
      console.log(uniqueid);
      this.id = uniqueid.toString();
      this._router.navigate(['/redirect']);
    }, (error) => {
      console.log(error);
    });
  }
}


