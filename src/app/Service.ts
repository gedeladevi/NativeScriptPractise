import {  DalsAndPulses} from '../app/Models/DalsAndPulses'
import { BeautyAndHygine } from '../app/Models/BeautyAndHygine';
import { EdilbleOils } from '../app/Models/EdibleOils';

export class SblqwipoService {

  SeeAllItems1: DalsAndPulses[] = [];
  SeeAllItems2: EdilbleOils[] = [];
  SeeAllItems3: BeautyAndHygine[] =[];
  

  constructor() { }


GetSeeallitems1(): DalsAndPulses[] {
 this.SeeAllItems1 = [
              { 
                ImageUrl:"res://flourcopy",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Sunitha Pvt Ltd",
                Cost:45.00,
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
            return this.SeeAllItems1;
          }

            GetSeeallitems2(): EdilbleOils[] {
              this.SeeAllItems2 =[
                {
                  ImageUrl:"res://flourcopy",
                  Name:"Double Daimond Premium Medha Flour",
                  SellerName:"Sunitha Pvt Ltd",
                  Cost:45.00,
                  Discount:10,
                  Points:80,
                  Quantity:1,
                  SellersCount:30 
                },             
                  {
                    ImageUrl:"res://flourcopy",
                    Name:"Double Daimond Premium Medha Flour",
                    SellerName:"Sunitha Pvt Ltd",
                    Cost:45.00,
                    Discount:10,
                    Points:80,
                    Quantity:1,
                    SellersCount:30 
                  },
                  {
                    ImageUrl:"res://flourcopy",
                    Name:"Double Daimond Premium Medha Flour",
                    SellerName:"Sunitha Pvt Ltd",
                    Cost:45.00,
                    Discount:10,
                    Points:80,
                    Quantity:1,
                    SellersCount:30  
                  },
                  {
                    ImageUrl:"res://flourcopy",
                    Name:"Double Daimond Premium Medha Flour",
                    SellerName:"Sunitha Pvt Ltd",
                    Cost:45.00,
                    Discount:10,
                    Points:80,
                    Quantity:1,
                    SellersCount:30 
                  },
                  {
                    ImageUrl:"res://flourcopy",
                    Name:"Double Daimond Premium Medha Flour",
                    SellerName:"Sunitha Pvt Ltd",
                    Cost:45.00,
                    Discount:10,
                    Points:80,
                    Quantity:1,
                    SellersCount:30 
                  },
                  {
                    ImageUrl:"res://flourcopy",
                    Name:"Double Daimond Premium Medha Flour",
                    SellerName:"Sunitha Pvt Ltd",
                    Cost:45.00,
                    Discount:10,
                    Points:80,
                    Quantity:1,
                    SellersCount:30  
                  },
                  {
                    ImageUrl:"res://flourcopy",
                    Name:"Double Daimond Premium Medha Flour",
                    SellerName:"Sunitha Pvt Ltd",
                    Cost:45.00,
                    Discount:10,
                    Points:80,
                    Quantity:1,
                    SellersCount:30 
                  },
                  {
                    ImageUrl:"res://flourcopy",
                  Name:"Double Daimond Premium Medha Flour",
                  SellerName:"Sunitha Pvt Ltd",
                  Cost:45.00,
                  Discount:10,
                  Points:80,
                  Quantity:1,
                  SellersCount:30 
                  },
              ];
return this.SeeAllItems2;
}

GetSeeallitems3(): BeautyAndHygine[] {
  this.SeeAllItems3 = [
               { 
                 ImageUrl:"res://flourcopy",
                 Name:"Double Daimond Premium Medha Flour",
                 SellerName:"Sunitha Pvt Ltd",
                 Cost:45.00,
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
             return this.SeeAllItems3;
           }



FormateItems1(items1:DalsAndPulses[]): DalsAndPulses[] {
  let itemcount = items1.length;
  let columns  = 2;
  let rows = Math.round (itemcount/columns);
  let index = -1;
   

for ( let y = 0; y < rows; y++ ) {   
  for ( let x = 0; x < columns; x++ ) {
  index++; 
  
 if(index <= (itemcount-1)){
  items1[index].Row = y;
  items1[index].Col = x;  
 }

      
  }
} 
return items1;
}

FormateItems2(items2:EdilbleOils[]): EdilbleOils[] {
  let itemcount = items2.length;
  let columns  = 2;
  let rows = Math.round (itemcount/columns);
  let index = -1;
   
for ( let y = 0; y < rows; y++ ) {   
  for ( let x = 0; x < columns; x++ ) {
  index++; 
  
  if(index <= (itemcount-1)){
    items2[index].Row = y;
    items2[index].Col = x;  
   }

      
  }
} 
return items2;
}


FormateItems3(items3:BeautyAndHygine[]): BeautyAndHygine[] {
  let itemcount = items3.length;
  let columns  = 2;
  let rows = Math.round (itemcount/columns);
  let index = -1;
   

for ( let y = 0; y < rows; y++ ) {   
  for ( let x = 0; x < columns; x++ ) {
  index++; 
  
      

  if(index <= (itemcount-1)){
    items3[index].Row = y;
    items3[index].Col = x;  
   }


  }
} 
return items3;
}

}

