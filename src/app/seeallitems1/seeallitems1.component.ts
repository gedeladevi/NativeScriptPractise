import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";
@Component({
    selector: "seeallitems1",
    moduleId: module.id,
    templateUrl: "./seeallitems1.component.html",
    styleUrls: ['./seeallitems1.component.css']
})
export class Seeallitems1Component implements OnInit {

    searchPhrase: string;
    qty:number = 0;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);}

    constructor(private route:Router) {
    }


    ngOnInit(): void {
    }
    onSelectedIndexchanged($event):void{
        alert("eeeeeeeeeeeeee????????????/")
    }
    GoTohomepage():void{
        this.route.navigate(["/home"])
    }
    minusqty():void{
        this.qty--;
    }
    plusqty():void{
        this.qty++;
    }
}
