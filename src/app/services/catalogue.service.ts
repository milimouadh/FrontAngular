import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:String ="http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  public getProducts(page: number, size: number) {
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);


  }
  public getProductsByMotCle(mc:String,page: number, size: number) {
    return this.httpClient.get(this.host+"/produits/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }

  public deleteResource(url) {
return this.httpClient.delete(url);
  }
  public saveResource(url,data):Observable<Product> {
    // @ts-ignore
    return this.httpClient.post(url,data);
  }
  public getResource(url):Observable<Product> {
// @ts-ignore
    return this.httpClient.get(url);
  }
  public updateResource(url,data) {
    return this.httpClient.put(url,data);
  }


}

