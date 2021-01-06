import { Category } from './../../models/CategoryModel/category';
import { Article } from './../../models/ArticleModel/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit,OnDestroy {

  article:Article;
  category:Category;
  ajax:Subscription;

  ngOnDestroy():void{
      console.log("Sayfa değiştirildiğinde arka plandaki ajax isteği iptal edilir")
      if(this.ajax != null){//Eğer bir ajax işlemi başlamış ise
        this.ajax.unsubscribe();
      }
  }

  constructor(public ArticleService:ArticleService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    //url ile istek yapmak için kullanır ve zaten anasayfada makelenin devamına tıkladığımızda yine url değişecektir
    this.route.paramMap.subscribe(par =>{

      let id =  Number(par.get("id"))

      this.ArticleService.loading = true;

      this.ajax = this.ArticleService.getArticle(id).subscribe(data=>{

        this.article = data;
        this.category = data.category

      })


    })


  }

}
