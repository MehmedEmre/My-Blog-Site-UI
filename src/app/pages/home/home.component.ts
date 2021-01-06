import { ArticleService } from './../../services/ArticleService/article.service';
import { Article } from './../../models/ArticleModel/article';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page:number = 1;
  pageSize:number = 5;
  articles:Article[] = [];
  totalCount:number = 0;
  loadingItem:number = 5;

  constructor(private articleService:ArticleService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

      this.activatedRoute.paramMap.subscribe(par =>{//url'i dinler.


        //url'de bir page değeri varsa
        if(par.get("page")){
          this.page = Number(par.get("page"));
        }

        if(this.totalCount > 0){
          if(this.totalCount>=this.page*this.pageSize){

            this.loadingItem = 5;
          }else{
            this.loadingItem  = this.pageSize - (this.page *this.pageSize - this.totalCount);
          }

        }

        this.articleService.getArticles(this.page,this.pageSize).subscribe(data=>{

          this.articles = data.response;
          this.totalCount = data.totalCount;

        });

      })

  }

}
