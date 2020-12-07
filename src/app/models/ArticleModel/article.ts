import { Category } from './../CategoryModel/category';


export class Article {

  id:number;
  title:string;
  article_summary:string;
  article_content:string;
  publish_date:Date;
  picture:string;
  view_count:number;
  comment_count:number
  category:Category;

}
