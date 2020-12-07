import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/ArticleModel/article';


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

  constructor(private activetedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  pageChange(event){//Sadece url'i değiştirir. Home component'te ise
                    //gerekli makaleler getirilir

    this.page = event;//1 2 3 butonlarından gelen değeri al

    this.router.navigateByUrl(`/pages/${this.page}`)


  }

}
