import { ArticleResponse } from './../../models/ArticleModel/article-response';
import { Observable } from 'rxjs';
import{tap} from 'rxjs/operators'
import { Article } from './../../models/ArticleModel/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl:string = "https://localhost:44374/api/Article";
  public loading:boolean = true;


  constructor(private http:HttpClient) { }


  public getArticle(page:number,pageSize:number):Observable<ArticleResponse>{

    let url = `${this.apiUrl}/${page}/${pageSize}`;


    //pipe ile gelen veriler üzerinde bir dizi işlem yapabiliriz.
    //x.response yaparak veri üzerinde ek işlemler yapılabilir.
    //getArticle metoduna subscribe olduğumuzda x.respons'a ve x.totalCount
    //gibi datalar dolar. Yani verimiz kaynakdan geldi demektir.

    return this.http.get<ArticleResponse>(url).pipe(tap(x => {

      this.loading = false; //veri sunucudan geldiğinde loading'i false yap
    }));
  }


}
