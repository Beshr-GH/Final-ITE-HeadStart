import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  events =[
    {
      month:"APR",
      day:"29",
      name:"Lecture1 : What is ITE-HeadStart ",
      
      img:"event.jpg",
      Lecturer:"Dr. Saeed Abo Trab ",
      description2:"description description description description description description description description description description description description description description "
    
    },
    {
      month:"MAY",
      day:"01",
      name:"Lectur2 : User Experience ",
      
      
      img:"event.jpg",
      Lecturer:"Eng. Malek Mouzayen ",
      description2:"description description description description description description description description description description description description description description "
    
    },
    {
      month:"MAY",
      day:"08",
      name:"Lectur3 : Marketing ",
      
      
      img:"event.jpg",
      Lecturer:"Eng. Malek Mouzayen ",
      description2:"description description description description description description description description description description description description description description "
    
    }
  
  ];
  projects =[
    {
   
      name:"project1",

      img:"course_1.jpg",
 
    },
    {

      name:"project2",
      
      
      img:"course_1.jpg",

    },{
      
            name:"project3",
            
            
            img:"course_1.jpg",
      
          }
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
