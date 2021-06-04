import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application} from '@nativescript/core'
import { Router } from '@angular/router';


@Component({
    selector: "common-header",
    moduleId: module.id,
    templateUrl: "./commonheader.component.html",
    styleUrls: ['./commonheader.component.css']
})
export class CommonheaderComponent implements OnInit {

    constructor(private route:Router) { }

    ngOnInit(): void { }

    gotologin(): void {
        this.route.navigate(["/home/login"]);
        }
        
        onDrawerButtonTap(): void {
          const sideDrawer=<RadSideDrawer>Application.getRootView()
          sideDrawer.showDrawer()
        }

        GoToGoogleMap():void {
            alert("Go TO GoogleMaps");
              }
        
}
