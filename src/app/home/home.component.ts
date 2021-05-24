import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';



registerElement('CardView', () => CardView);
@Component({
  selector: 'Home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  

  constructor(private route:Router) {

  }
  ngOnInit(): void {

  }
  gotologin(): void{
this.route.navigate(["/home/login"]);
}



}
