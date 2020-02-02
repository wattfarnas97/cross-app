import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
keyword:string;
public currentPage:number=1;
public size:number=10;
private dataImages=[];
  totalPages: number;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
onLoadImages(){
this.dataImages=[];
this.currentPage=1;
this.totalPages=0;
this.doSearch();
}
public doSearch(){
  this.httpClient.get("https://pixabay.com/api/?key=14515526-eb26de5f82439c28a88690eb6&q="+this.keyword+"&per_page="+this.size+"&page="+this.currentPage)
  .subscribe(data=>{
    data["hits"].forEach(im => {
      this.dataImages.push(im);
    });
    this.totalPages=data["totalHits"]/this.size;
  },
  error=>{
    console.log(error);
  })

}
public loadData(event){
 if(this.currentPage<this.totalPages){
   this.currentPage++;
   this.doSearch();
   event.target.complete();
 }
 if(this.currentPage>=this.totalPages){
   event.target.disabled=true;
 }
}
}
