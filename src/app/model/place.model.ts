export interface Place{
    title:string;
    country?:string;
    city?:string;
     keyword?:string;
    timestamp?:number;
      selected?:number;
      coordinates?:{
          longitude:number;
          latitude:number;
      };
      photo?:string[]

}