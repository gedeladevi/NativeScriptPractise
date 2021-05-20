import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

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
