import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Pipe } from '@angular/core';
import { Article } from 'src/app/models/ArticleModel/article';
import { ArticleService } from 'src/app/services/ArticleService/article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() totalCount:number;
  @Input() articles:Article[];
  @Input() page:number;
  @Input() pageSize:number;
  @Input() loadingItem:number;
  @Input() type:string;

  articlePicture:string = "assets/article.png"

  constructor(public articleService:ArticleService,private router:Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.articleService.loading = true;
  }

  createArray(value):number[]{

    var array:number[]=[];

    for(let i=0;i<this.loadingItem;i++){
      array.push(i);
    }

    return array;
  }

  pageChanged(event){//Sadece url'i değiştirir. Home component'te ise
                    //gerekli makaleler getirilir

    this.articleService.loading = true;

    this.page = event;//1 2 3 butonlarından gelen değeri al

    if(this.type == "home"){
      this.router.navigateByUrl(`/pages/${this.page}`)
    }
    else if(this.type == "categoryArticle"){

      let categoryId = this.aroute.snapshot.paramMap.get("categoryId");
      let name = this.aroute.snapshot.paramMap.get("name");

      this.router.navigateByUrl(`category/${name}/${categoryId}/pages/${this.page}`)


    }




  }

}
