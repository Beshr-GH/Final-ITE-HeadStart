import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import {ProListService } from '../pro-list.service';
import {ProjectSchema} from "../ProjectSchema";
import {Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css'],
  providers:[ProListService]
 /* Pipes : [FilterPipe]*/
})
export class ProListComponent implements OnInit {
id;
img  ;
name;
category;
projects : ProjectSchema [
    // {
    //   num:"1",
    //   Project_Name:"start up",
    //   img:"1.jpg",
    //   Summary:"description description description description description description",
    //   description2:"description description description description description description description description description description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description description"
    //  , email:"aa@ss.com"
    // },
    // {
    //   num:"1",
    //   Project_Name:"start up",
    //   img:"1.jpg",
    //   Summary:"description description description description description description",
    //   description2:"description description description description description description description description description description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description description"
    //  , email:"aa@ss.com"
    // },
    // {
    //   num:"1",
    //   Project_Name:"start up",
    //   img:"1.jpg",
    //   Summary:"description description description description description description",
    //   description2:"description description description description description description description description description description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description description"
    //  , email:"aa@ss.com"
    // },{
    //   num:"1",
    //   Project_Name:"start up",
    //   img:"1.jpg",
    //   Summary:"description description description description description description",
    //   description2:"description description description description description description description description description description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description description"
    //  , email:"aa@ss.com"
    // }

  ];
  

constructor(private route : ActivatedRoute , private lister : ProListService ) {
  this.img=route.snapshot.params['img'];
  this.name=route.snapshot.params['name'];
  if (this.name == "ARTIFICIAL INTELLEGENCE")
  {
     this.category = "AI";
  }
  if (this.name == "Networking")
  {
     this.category = "Network";
  }
  if (this.name == "SOFTWARE ENGINEERING")
  {
     this.category = "Software";
  }


  
  
     }
     getProjects() : void
     { 
     
      console.log( "category  : " + this.category +"\n" + "name : " + this.name);

      this.lister.getdata(this.category)
      .subscribe(
        resultArray => this.projects = resultArray,
          error => console.log("Error :: " + error)
      )
      console.log("after getProjects function");
      
    } 

  
    ngOnInit() {
      
      this.getProjects();
    }
  
  }
  