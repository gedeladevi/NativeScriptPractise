import { Router } from "@angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { SblqwipoService } from '../Service';
import { DalsAndPulses } from '../Models/DalsAndPulses';
import { EdilbleOils } from '../Models/EdibleOils';
import { BeautyAndHygine } from '../Models/BeautyAndHygine';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "seeallitems1",
    moduleId: module.id,
    templateUrl: "./seeallitems1.component.html",
    styleUrls: ['./seeallitems1.component.css']   
})
export class Seeallitems1Component implements OnInit {
    dialogOpen = false;
    searchPhrase: string;
    qty: number = 0;
    SeeAllItems1: DalsAndPulses[] = [];
    SeeAllItems2: EdilbleOils[] = [];
    SeeAllItems3: BeautyAndHygine[] =[];

    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);}

    constructor( private _sblqwipoService:SblqwipoService
                ,private route:Router
               ) {
    }
  

    ngOnInit(): void {
this.SeeAllItems1 = this._sblqwipoService.GetSeeallitems1();
this.SeeAllItems1 = this._sblqwipoService.FormateItems1(this.SeeAllItems1);

this.SeeAllItems2 = this._sblqwipoService.GetSeeallitems2();
this.SeeAllItems2 = this._sblqwipoService.FormateItems2(this.SeeAllItems2);

this.SeeAllItems3 = this._sblqwipoService.GetSeeallitems3();
this.SeeAllItems3 = this._sblqwipoService.FormateItems3(this.SeeAllItems3);

    }
    GoTohomepage():void{
        this.route.navigate(["/home"])
    }
    minusqty1(item:DalsAndPulses):void{
       item.Quantity--;

     
    }
    plusqty1(item:DalsAndPulses):void{
        item.Quantity++;
        
    }


    minusqty2(item:EdilbleOils):void{
        item.Quantity--;
    }
    plusqty2(item:EdilbleOils):void{
        item.Quantity++;
    }


    minusqty3(item:BeautyAndHygine):void{
        item.Quantity--;
    }
    plusqty3(item:BeautyAndHygine):void{
        item.Quantity++;
    }
    showModal() {
        this.dialogOpen = true;
    }
    closeDialog() {
        this.dialogOpen = false;
    }

}
