import {  DalsAndPulses} from '../app/Models/DalsAndPulses'
import { BeautyAndHygine } from '../app/Models/BeautyAndHygine';
import { EdilbleOils } from '../app/Models/EdibleOils';
import { Recommandeditems } from '../app/Models/Recommandeditems';
import {Buyagainitems } from '../app/Models/Buyagainitems';

export class SblqwipoService {

  SeeAllItems1: DalsAndPulses[] = [];
  SeeAllItems2: EdilbleOils[] = [];
  SeeAllItems3: BeautyAndHygine[] =[];
  MixItems    : Recommandeditems[]=[];
  Buyagainitems: Buyagainitems[]=[];

  constructor() { }

  

GetSeeallitems1(): DalsAndPulses[] {
 this.SeeAllItems1 = [
              { 
                ImageUrl:"res://flourcopy",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Annapurna",
                Cost:65.00,
                Discount:10,
                Points:10,
                Quantity:9,
                SellersCount:3
               },
               { 
                ImageUrl:"res://chana_dal",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Annapurna",
                Cost:75,
                Discount:8,
                Points:25,
                Quantity:0,
                SellersCount:4
               },
               { 
                ImageUrl:"res://flour1",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Durga Pvt Ltd",
                Cost:45,
                Discount:5,
                Points:34,
                Quantity:0,
                SellersCount:3
               },
               { 
                ImageUrl:"res://flour1copy",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Godhavari",
                Cost:65,
                Discount:10,
                Points:45,
                Quantity:0,
                SellersCount:7
               },
               { 
                ImageUrl:"res://grain",
                Name:"Double Daimond Premium Medha Flour",
                SellerName:"Kiki",
                Cost:95,
                Discount:10,
                Points:12,
                Quantity:0,
                SellersCount:6
               }
            ];
            return this.SeeAllItems1;
          }

 GetSeeallitems2(): EdilbleOils[] {
              this.SeeAllItems2 =[
                {
                  ImageUrl:"res://sunflower",
                  Name:"Natural SunFlower Oil",
                  SellerName:"Freedom",
                  Cost:175.00,
                  Discount:0,
                  Points:10,
                  Quantity:0,
                  SellersCount:6 
                },             
                  {
                    ImageUrl:"res://sunflower1",
                    Name:"Pure sunFlower Oil",
                    SellerName:"Freedom",
                    Cost:145.00,
                    Discount:10,
                    Points:3,
                    Quantity:0,
                    SellersCount:4 
                  },
                  {
                    ImageUrl:"res://sunflowergold",
                    Name:"SunFlower Oil",
                    SellerName:"Freedom",
                    Cost:145.00,
                    Discount:5,
                    Points:10,
                    Quantity:0,
                    SellersCount:4  
                  },
                  {
                    ImageUrl:"res://groundnutoil",
                    Name:"Fresh Groundnut Oil",
                    SellerName:"Freedom",
                    Cost:135.00,
                    Discount:10,
                    Points:4,
                    Quantity:0,
                    SellersCount:6 
                  },
                  {
                    ImageUrl:"res://edibleoil",
                    Name:"SunFlower oil",
                    SellerName:"Freedom",
                    Cost:245.00,
                    Discount:20,
                    Points:10,
                    Quantity:1,
                    SellersCount:7
                  },
                  {
                    ImageUrl:"res://edible_oils",
                    Name:"Double Daimond Premium Oil",
                    SellerName:"SunFlower",
                    Cost:435.00,
                    Discount:30,
                    Points:23,
                    Quantity:1,
                    SellersCount:4  
                  },
                  {
                    ImageUrl:"res://almond",
                    Name:"Badam Hair oil",
                    SellerName:"Ayurvedh",
                    Cost:245.00,
                    Discount:10,
                    Points:10,
                    Quantity:0,
                    SellersCount:3
                  },
                  {
                    ImageUrl:"res://daburamla",
                  Name:"Double Daimond Premium Hair Oil",
                  SellerName:"She Saw",
                  Cost:145.00,
                  Discount:10,
                  Points:23,
                  Quantity:0,
                  SellersCount:9 
                  },
              ];
return this.SeeAllItems2;
}

GetSeeallitems3(): BeautyAndHygine[] {
  this.SeeAllItems3 = [
               { 
                 ImageUrl:"res://bodylotion",
                 Name:"Body Lotion",
                 SellerName:"She Saw",
                 Cost:425.00,
                 Discount:5,
                 Points:12,
                 Quantity:0,
                 SellersCount:4
                },
                { 
                 ImageUrl:"res://almond",
                 Name:"Almond Hair Oil",
                 SellerName:"Ayurvedh",
                 Cost:145,
                 Discount:4,
                 Points:6,
                 Quantity:0,
                 SellersCount:5
                },
                { 
                 ImageUrl:"res://beauty",
                 Name:"Beauty parlor Items",
                 SellerName:"Naturals",
                 Cost:345,
                 Discount:6,
                 Points:10,
                 Quantity:0,
                 SellersCount:4
                },
                { 
                 ImageUrl:"res://daburamla",
                 Name:"DaburAmla Hair Oil",
                 SellerName:"Ayurevedh",
                 Cost:245,
                 Discount:3,
                 Points:10,
                 Quantity:0,
                 SellersCount:4
                },
                { 
                 ImageUrl:"res://lotion",
                 Name:"Double Daimond Body Lotion",
                 SellerName:"KIki",
                 Cost:455,
                 Discount:15,
                 Points:20,
                 Quantity:0,
                 SellersCount:5
                }
             ];
             return this.SeeAllItems3;
           }

GetMixItems(): Recommandeditems[]{
           this.MixItems=[
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://flourcopy",
              Fname:"Premium ",
              Lname:"Toor Dal",
             },
             {
              Discount:20,
              Points:10,
              ImageUrl:"res://bakery",
              Fname:"Amul",
              Lname:"Fresh Bakery Items",
             },
             {
              Discount:10,
              Points:5,
              ImageUrl:"res://groundnutoil",
              Fname:"Pallavi",
              Lname:"GroundNutOil",
             },
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://bodylotion",
              Fname:"Fogg",
              Lname:"Perfumes",
             },
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://edibleoil",
              Fname:"Freedom",
              Lname:"SunFlower Oil",
             },
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://flour1",
              Fname:"annapurna",
              Lname:"Toor dal",
             },
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://flour",
              Fname:"Godhavari",
              Lname:"Premium toor Dal",
             },
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://grain",
              Fname:"Annapurna",
              Lname:"Multi Grains",
             },
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://flour1copy",
              Fname:"Annapurna",
              Lname:"Grains",
             },
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://ice_cream",
              Fname:"Amul ",
              Lname:"IceCreams",
             },
             {
              Discount:10,
              Points:12,
              ImageUrl:"res://tomato",
              Fname:"POlimeras",
              Lname:"Fresh Veggies",
             },
           ];

           return this.MixItems;
            
           }

 GetBuyagainitems(): Buyagainitems[]{
this.Buyagainitems=[
  {
    ImageUrl:"res://flourcopy",
    Name:"devi",
    Quantity:10,
    Cost:100,
   
  },
  {
    ImageUrl:"res://flourcopy",
    Name:"devi",
    Quantity:10,
    Cost:100,
   
  },
  {
    ImageUrl:"res://flourcopy",
    Name:"devi",
    Quantity:10,
    Cost:100,
   
  },
  {
    ImageUrl:"res://flourcopy",
    Name:"devi",
    Quantity:10,
    Cost:100,
   
  },
  {
    ImageUrl:"res://flourcopy",
    Name:"devi",
    Quantity:10,
    Cost:100,
   
  },
  {
    ImageUrl:"res://flourcopy",
    Name:"devi",
    Quantity:10,
    Cost:100,
   
  },
  {
    ImageUrl:"res://flourcopy",
    Name:"devi",
    Quantity:10,
    Cost:100,
   
  },
  {
    ImageUrl:"res://flourcopy",
    Name:"devi",
    Quantity:10,
    Cost:100,
   
  },

];
return this.Buyagainitems;

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

FormateItems4(items4:Recommandeditems[]): Recommandeditems[] {
  let itemcount = items4.length;
  let columns  = itemcount;
  let rows = 0;
  let index = -1;

  for ( let y = 0; y < columns; y++) {
  index++; 
  items4[index].Row =rows;
  items4[index].Col = y;

  }

return items4;
}

formateItems5(items5:Buyagainitems[]): Buyagainitems[] {

  let itemcount = items5.length;
  let columns = itemcount;
  let rows = 0;
  let index = -1;

  for (let y = 0; y < columns; y++) {
    index++; 
    items5[index].Row = rows;
    items5[index].Col = y;
  }
  return items5;
}

}

