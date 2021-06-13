
import {  DalsAndPulses} from '../app/Models/DalsAndPulses'

 
export class SblqwipoService {

  SeeAllItems: DalsAndPulses[] = [];
  Row: number = 0;
  Col: number = 0;

  constructor() { }


GetSeallitems(): DalsAndPulses[] {

 this.SeeAllItems = [
              { 
                ImageUrl:"res://flourcopy",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Sunitha Pvt Ltd",
                Cost:45,
                Discount:10,
                Points:80,
                Quantity:1,
                SellersCount:30
               },
               { 
                ImageUrl:"res://chana_dal",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Raja Pvt Ltd",
                Cost:45,
                Discount:10,
                Points:80,
                Quantity:1,
                SellersCount:30
               },
               { 
                ImageUrl:"res://flour1",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Durga Pvt Ltd",
                Cost:45,
                Discount:10,
                Points:80,
                Quantity:1,
                SellersCount:30
               },
               { 
                ImageUrl:"res://flour1copy",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Harini Pvt Ltd",
                Cost:45,
                Discount:10,
                Points:80,
                Quantity:1,
                SellersCount:30
               },
               { 
                ImageUrl:"res://grain",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Koti Pvt Ltd",
                Cost:45,
                Discount:10,
                Points:80,
                Quantity:1,
                SellersCount:30
               }
            ];

 return this.SeeAllItems;

}

FotamteItems(items:DalsAndPulses[]): DalsAndPulses[] {
  
  // var matrix = [];
  // function gen(row,col){
  // for ( var y = 0; y < row; y++ ) {
  //     matrix[ y ] = [];
  //     for ( var x = 0; x < col; x++ ) {
  //         matrix[ y ][ x ] = y+""+x;
  //     }
  // }
  
  // console.log( matrix.join('\n') );
  // }
  // gen(3,2);

 
return items;
}

}

