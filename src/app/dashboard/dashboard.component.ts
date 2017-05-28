import { Http } from '@angular/http';
import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   contactArray = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(
      data => {
        this.contactArray = data;
      }
      , error => { console.error( error ) });
  }

}
