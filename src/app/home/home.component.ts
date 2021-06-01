import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application} from '@nativescript/core'
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { SearchBar } from "@nativescript/core/ui/search-bar";

registerElement('CardView', () => CardView);
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls:["./home.component.css"]
})
export class HomeComponent implements OnInit {

  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;    
}

searchPhrase: string;
onSearchSubmit(args): void {
    let searchBar = <SearchBar>args.object;
    console.log("You are searching for " + searchBar.text);}
 
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

GoToAllCatgeoryList():void{
  this.route.navigate(["/home/allcatagorieslist"]);
}
GoToGoogleMap():void{
alert("Go TO GoogleMaps");
}

}
