import { Component, OnInit } from "@angular/core";
import { SearchBar } from 'tns-core-modules';
@Component({
    selector: "commonhorizontalscroll",
    moduleId: module.id,
    templateUrl: "./commonhorizontalscroll.component.html",
    styleUrls: ['./commonhorizontalscroll.component.css']
})
export class CommonhorizontalscrollComponent implements OnInit {

    searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);}

    constructor() {
    }

    ngOnInit(): void {
    }
}
