import { Component, OnInit } from "@angular/core";
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";
@Component({
    selector: "seeall-items",
    moduleId: module.id,
    templateUrl: "./seeallitems.component.html",
    styleUrls: ['./seeallitems.component.css']
})
export class SeeallitemsComponent implements OnInit {

    onScroll(args: ScrollEventData) {
        const scrollView = args.object as ScrollView;    
    }
    constructor() {
    }

    ngOnInit(): void {
    }
}
