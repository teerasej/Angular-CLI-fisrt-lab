import { ContactService } from './services/contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello!';
  username = "Pon";
  result = 0;

  numberArray = [1, 2, 3, 4, 5];
 

  constructor(private contactService:ContactService){
    
  }

  signIn(username, password) {
    alert('OK ' + username + ' ' + password);
  }

  calculate(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    this.result = result;
  }
}
