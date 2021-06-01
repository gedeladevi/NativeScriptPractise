import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "allcatagorieslist",
    moduleId: module.id,
    templateUrl: "./allcatagorieslist.component.html",
    styleUrls: ['./allcatagorieslist.component.css']
})
export class AllcatagorieslistComponent implements OnInit {

    constructor(private route:Router) {
    }

    ngOnInit(): void {
    }
}
