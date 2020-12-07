import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{Category} from "../../models/CategoryModel/category";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private apiUrl:string = "https://localhost:44374/api/Category";

  constructor(private http:HttpClient) {}

  public getAllCategories(){ //getAllCategories():Observable<Category[]>

    //api tarafında list olarak tanımlıdır. Fakat typescript tarafında list yapısı yoktu.
    //Onun yerine [] kullanılır.
    return this.http.get<Category[]>(this.apiUrl);

  }

  public getCategoryById(id:number){

    let url = `${this.apiUrl}/${id}`;

    return this.http.get<Category>(url);
  }


}
