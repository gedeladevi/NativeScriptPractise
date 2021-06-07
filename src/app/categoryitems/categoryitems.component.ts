import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
@Component({
    selector: "categoryitems",
    moduleId: module.id,
    templateUrl: "./categoryitems.component.html",
    styleUrls: ['./categoryitems.component.css']
})
export class CategoryitemsComponent implements OnInit {

 
    constructor(private route:Router) {
    }

    ngOnInit(): void {
    }
    GoTovegitabelsList():void{
        alert("Different types of vegitabels available")
       }
  GoToFruitsList():void{
     alert("All Fruits available here")
   }
  GoToLeafyvegitabelsList():void{
     alert("Fresh Leafy Vegitabels available here")
   }
  GoToChacolatesList():void{
    alert("All types of chacolates available here")
   }
  
}
