import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

/*
enum Paging{

  home = 1,
  about_me = 2,
  contact = 3

}
*/
@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  //pageActive:Paging;


  constructor(private router:Router) {

    /*
    this.router.events.subscribe(x=>{

      if(x instanceof NavigationEnd){

        if(x.url.indexOf("home") != -1){
            this.pageActive = Paging.home
        }
        else if(x.url.indexOf("about") != -1){
             this.pageActive = Paging.about_me
        }
        else if(x.url.indexOf("contact") != -1){
          this.pageActive = Paging.contact
        }
        else{
          this.pageActive = Paging.home
        }

      }

    })
    */

  }

  ngOnInit(): void {

  }





}
