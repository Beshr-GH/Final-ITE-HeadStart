import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { ProjectSchema } from 'app/ProjectSchema';
import {ProListService } from '../pro-list.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers:[ProListService]
})
export class ProjectDetailsComponent implements OnInit {
name ;
pro_det : ProjectSchema[] ;
emails = ["1","2","3","4"];
tele = ["11","22","33","44"];
details = "our project";
img;
pro;
category;/*
Cname = "lama";*/
students =[
  {
    
    name:" name",
   
    img:"1.jpg"
  },
    {
      
      name:" name",
     
      img:"1.jpg"
    },
    {
      
      name:" name",
     
      img:"1.jpg"
    },
    {
      
      name:" name",
     
      img:"1.jpg"
    }
  ];
  supervisors =[
    {
      
      name:" name",
     
      img:"1.jpg"
    },
      {
        
        name:" name",
       
        img:"1.jpg"
      }
    ];

project =[
  {
    year:"2018",
    name:"start up",
    specialization:"specialization",
    Sub_specialty:"Sub-specialty",
    
    img:"1.jpg",
    description1:"description description description description description description",
    description2:"description description description description description description description description description description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description descriptiondescription description description description description description description description"
   , email:"aa@ss.com",
   person1:"name1",
   person2:"name2",
   person3:"name3",
   person4:"name4",
   img1:"1.jpg",
   img2:"1.jpg",
   img3:"1.jpg",
   img4:"1.jpg",
   tag1:"tag1",
   tag2:"tag2",
   tag3:"tag3",
   tag4:"tag4",
  }

];
  constructor(private route : ActivatedRoute , private lister : ProListService) {
this.img=route.snapshot.params['img'];
this.pro=route.snapshot.params['name2'];
this.category=route.snapshot.params['name'];/*
this.Cimg=route.snapshot.params['Cname'];*/


   }

   getProject() : void
   {
    console.log("project name is : " + this.pro);
    this.lister.getpro(this.pro)
    .subscribe(
      resultArray => this.pro_det = resultArray,
      error => console.log("Error :: " + error ),
     
    )
    console.log("after getPro_det function : \n" + JSON.stringify(this.pro_det));
   }

  ngOnInit() {
    console.log("WHat is category  :  " + this.category + "\n pro :  " + this.pro );
    this.getProject();
  }

}
