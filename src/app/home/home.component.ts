import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application} from '@nativescript/core'



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
 
isseeallshow:Boolean=false;
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

      GoToCategories():void{
        this.isseeallshow=false;
      
    }
    GoToSeeAllItems():void{ 
      this.isseeallshow=true;
      
    }
    GoToSeeAllItems1():void{
      this.route.navigate(["/home/seeallitems1"])
}

}