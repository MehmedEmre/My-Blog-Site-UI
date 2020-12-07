import { Category } from '../../models/CategoryModel/category';
import { CategoryService } from '../../services/CategoryService/category.service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {


  categories:Category[] = [];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {

     this.categoryService.getAllCategories().subscribe(data =>{

      this.categories = data;

     },error=>{

     });


  }





}
