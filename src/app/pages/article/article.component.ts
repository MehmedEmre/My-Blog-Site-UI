import { Category } from './../../models/CategoryModel/category';
import { Article } from './../../models/ArticleModel/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:Article;
  category:Category;


  constructor(public ArticleService:ArticleService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    //url ile istek yapmak için ve zaten anasayfada makelenin devamına tıkladığımızda yine url değişecektir
    this.route.paramMap.subscribe(par =>{

      let id =  Number(par.get("id"))

      this.ArticleService.loading = true;

      this.ArticleService.getArticle(id).subscribe(data=>{

        this.article = data;
        this.category = data.category

      })


    })


  }

}
