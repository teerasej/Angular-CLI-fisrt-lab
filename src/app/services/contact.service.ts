import {Headers,  Http} from '@angular/http';
import "rxjs/add/operator/map";

import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  contactArray = [
    { name:'Mix', phone:'082-298-3891' , imageUrl:'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/15267619_10154789415276098_1443357584742520709_n.jpg?oh=7922bbd622e227989c3e9b2152c95411&oe=59BEEEA1'}
    ,{ name:'Kate', phone:'057-289-3182' , imageUrl:''}
    ,{ name:'Pae', phone:'048-218-2189' , imageUrl:''}
    ,{ name:'Peace', phone:'582-381-3288' , imageUrl:''}
    ,{ name:'Ploy', phone:'593-318-3828' , imageUrl:''}
  ];

  url = "http://localhost:3000";

  constructor(private http: Http) { }

  getContacts() {
    // let url = "https://randomuser.me/api/?results=30";
    let url = this.url + "/employee";
    return this.http.get(url).map(res => res.json());
  }

  createNewEmployee( employeeName ){
    let url = this.url + "/employee/create";

    let headers = new Headers({'Content-Type':'application/json'});

    let json = {};

    json = JSON.stringify({ name: employeeName });

    return this.http.post(url, json, { headers: headers }).map(res => res.json());

  }

}
