import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { SearchBar } from 'tns-core-modules';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application} from '@nativescript/core'



 registerElement('CardView', () => CardView);
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls:["./home.component.css"]
})
export class HomeComponent implements OnInit {
  searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);}

  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;    
}
 
  constructor(private route:Router) {

  }
  ngOnInit(): void {
    
  }
  gotologin(): void{
    this.route.navigate(["/home/login"]);
    }
    
    onDrawerButtonTap(): void{
      const sideDrawer=<RadSideDrawer>Application.getRootView()
      sideDrawer.showDrawer()
    }

    GoToGoogleMap():void{
        alert("Go TO GoogleMaps");
      }

    GoToSeeAllItems():void{
      this.route.navigate(["/home/seeallitems"]);
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
