import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public produits:any;
  public size:number=5;
  public curentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  private currentMotCle: String="";


  constructor(private catService:CatalogueService,private router:Router) { }

  ngOnInit(): void {
  }

  onGetProducts() {
    this.catService.getProducts(this.curentPage,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.produits=data;

      },errorlistprod => console.log(errorlistprod))



  }

  onPageProduct(i) {
    this.curentPage=i;;
    this.chercherProduits();
    
  }

  onChercher(form:any){
    this.curentPage=0;
    this.currentMotCle=form.MotCle;
    this.chercherProduits();

  }


  chercherProduits() {
    this.catService.getProductsByMotCle(this.currentMotCle,this.curentPage,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.produits=data;
      },err=>{
        console.log(err);
      });

  }

  onDeleteProduct(p) {
    let conf=confirm("Etes vous sure de suprimer ???");
    if (conf) this.catService.deleteResource(p._links.self.href)
      .subscribe(data=>{
        this.chercherProduits();
      },error1 =>{
        console.log(error1);
      } )
    
  }

  oneEditProduct(p) {
    let url=p._links.self.href;
    this.router.navigateByUrl("/edit-product/"+btoa(url));

  }
}
