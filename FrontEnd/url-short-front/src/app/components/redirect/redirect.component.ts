import { Component, OnInit } from '@angular/core';
import { ShortUrlComponent } from '../short-url/short-url.component';
import { ViewChild } from '@angular/core';
import { UrlServiceService } from '../../service/url-service.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {

  constructor(private _urlServiceServicce: UrlServiceService) { }

  @ViewChild(ShortUrlComponent) cid;
  uniqueId: String;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
  this.uniqueId = this.cid.id;
  }
  callRedirect() {
    this._urlServiceServicce.redirectUrl(this.uniqueId);
  }

}
