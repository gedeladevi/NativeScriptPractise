import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application} from '@nativescript/core'
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";

registerElement('CardView', () => CardView);
@Component({
  selector: 'Home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView;

    console.log("scrollX: " + args.scrollX);
    console.log("scrollY: " + args.scrollY);
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

}
