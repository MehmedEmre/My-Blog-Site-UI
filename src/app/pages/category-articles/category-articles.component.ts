import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/ArticleModel/article';

@Component({
  selector: 'app-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.css']
})
export class CategoryArticlesComponent implements OnInit {


  page:number = 1;
  pageSize:number = 5;
  articles:Article[] = [];
  totalCount:number = 0;
  loadingItem:number = 5;
  categoryId:number;
  ajax:Subscription = null;

  constructor(private route:ActivatedRoute,private ArticleService:ArticleService) { }

  ngOnInit(): void {


    this.route.paramMap.subscribe(x=>{

      if(this.ajax != null){
        console.log("iptal")
        this.ajax.unsubscribe(); //ngOndestroy ile yapılamıyor çünkü kategoriler veya sayfalar değişse bile
                                //aynı component yani category-article componentte olacağız.

      }

      this.ArticleService.loading = true;
      this.articles = [];

      if(Number(x.get("categoryId"))){

        this.categoryId =Number(x.get("categoryId"));
      }

      if(Number(x.get("page"))){
        this.page = Number(x.get("page"));
      }

      if(this.totalCount > 0){
        if(this.totalCount>=this.page*this.pageSize){
          this.loadingItem = 5;

        }else{
          this.loadingItem  = this.pageSize - (this.page *this.pageSize - this.totalCount);

        }

      }

     this.ajax =  this.ArticleService.getArticleWithCategory(this.categoryId ,this.page,this.pageSize).subscribe(data=>{

          this.articles = data.response;
          this.totalCount = data.totalCount;

      })


    })


  }


}
