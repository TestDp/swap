import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Observable';

@Injectable()
export class FacebookServiceProvider {
  serviceAccessToken: any;

  fbapi = "https://graph.facebook.com/v2.11/";

  querry: any;

  access_token: any;

  private fbLargePic;

  private url: any;

  private urlFbPic: any;

  constructor(public http: Http) {
    console.log('Hello FacebookServiceProvider Provider');
  }
  setRemoteData(token: any) {
    this.serviceAccessToken = token;
    console.log("serviceAccessToken : " + this.serviceAccessToken);
    this.querry = "me?access_token=" + this.serviceAccessToken + "&fields=id,name,email,cover,gender,first_name,last_name,middle_name,picture&method=get";
    this.url = this.fbapi + this.querry;
    console.log("url in setter" + this.url);
  }
  setPhotoData(userId: number) {
    this.urlFbPic = "http://graph.facebook.com/" + userId + "/picture?type=large";
  }
  setFbLargePic(picLarge: string) {
    this.fbLargePic = picLarge;
  }
  getFbLargePic() {
    console.log("get fb large pic service : " + this.fbLargePic)
    return this.fbLargePic;
  }
  getRemoteFbPic() {
    return this.http.get(this.urlFbPic)
      .do(res => {
        console.log("photo url service : " + res.url);
        this.setFbLargePic(res.url);
      })
      .map(res => {

      })
  }
  getRemoteData() {
    return this.http.get(this.url)
      .do(this.logResponseData)
      .map(this.extractResponseData)
  }
  private logResponseData(res) {
    return console.log(res);
  }

  private extractResponseData(res) {
    return res.json();
  }
}