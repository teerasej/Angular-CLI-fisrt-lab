import { Router } from '@angular/router';
import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  name;

  constructor(private contactService: ContactService
            , private router: Router) { }

  ngOnInit() {
  }

  create( employeeName ){
    this.contactService.createNewEmployee( employeeName )
        .subscribe(
          data => { 
            this.router.navigateByUrl('/dashboard'); 
          }
          , error => { console.log( error ) }
        )
  }

}
