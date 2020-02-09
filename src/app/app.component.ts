import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eppendorf';
  constructor(private router: Router){

  }
  
  signUp(){
    this.router.navigateByUrl("signup");
  }
  
  showData(){
    this.router.navigateByUrl("viewer");
  }
}
