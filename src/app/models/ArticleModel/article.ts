import { Category } from './../CategoryModel/category';


export class Article {

  id:number;
  title:string;
  article_Summary:string;
  article_Content:string;
  publish_Date:Date;
  picture:string;
  view_Count:number;
  comment_Count:number
  category:Category;

}
