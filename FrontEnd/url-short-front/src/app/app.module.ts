import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShortUrlComponent } from './components/short-url/short-url.component';
import { UrlServiceService } from './service/url-service.service';
import { RedirectComponent } from './components/redirect/redirect.component';

const appRoutes: Routes = [
    { path : 'shorturl' , component : ShortUrlComponent },
    { path : 'redirect' , component : RedirectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShortUrlComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [UrlServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
