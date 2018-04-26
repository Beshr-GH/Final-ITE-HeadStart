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
      name:"Lecture1 : Lean Startup and MVP ",
      duration : "2 hours",
      img:"event.jpg",
      Lecturer:"Mr. Kinan Zayat",
      description2:"Introduce the students on how to enter the market in less expences possible to study the ability of each idea"
    
    },
    {
      month:"MAY",
      day:"03",
      name:"Lectur2 : Budgeting and pricing ",
      duration : "2-3 hours",
      
      img:"event.jpg",
      Lecturer:"Mr. Hadi Naha",
      description2:"Pricing project in the right way."
    
    },
    {
      month:"MAY",
      day:"06",
      name:"Lectur3 : Pitching and Presentation ",
      duration : "2 hours",
      
      img:"event.jpg",
      Lecturer:"Mr. Saeb Nahas ",
      description2:"Increase student's presenting Level infront of investors and introduce informations in an interesting way to businessmen "
    
    },
    {
      month:"MAY",
      day:"08",
      name:"Lectur4 : How to formulate the optimal solution UI/U ",
      duration : "2 hours",
      
      img:"event.jpg",
      Lecturer:"Mr. AbdelMalek Al-Mouzaye",
      description2:"Design not only programs and Apps but the right programs and apps."
    
    },
    {
      month:"MAY",
      day:"10",
      name:"Lectur5 :Case Studie",
      duration : "2 hours",
      
      
      img:"event.jpg",
      Lecturer:"Mr. AbdelMalek Al-Mouzayen and Mr. Saeb Naha ",
      description2:"The main goal of this lecture is to show previous businessmen Biographies."
    
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
