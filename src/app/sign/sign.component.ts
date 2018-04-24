import { Component, OnInit } from '@angular/core';
import {ProListService } from '../pro-list.service';
import {Http} from '@angular/http';
import {CompanySchema} from "../CompanySchema";
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  providers:[ProListService]
})
export class SignComponent implements OnInit {

  constructor(private lister : ProListService) { }

  insertData(name ,email ,number ,Cname  ,
    website  , Country , City ,  info , sponser, invester ,guest ){

        var sname = name.value;
        var scountry=  Country.value;
        var scity = City.value;
        var sphone = number.value;
        var semail = email.value;
        var sCountry = Country.value;
        var sCname = Cname.value;
        var swebsite = website.value;
        var sinfo = info.value;
        // var sinvester = invester.value;
        // var ssponser = sponser.value;
        // var sguest = guest.value;



        console.log("lama + : " + sname +" " +  semail + " "  + sCountry + "\n invester "   );
      var NewCompany  :CompanySchema = 
        {
        name : sname,
        com_name : sCname,
        country: sCountry,
        city : scity,
        phone : sphone,
        email : semail,
        website : swebsite,
        info : sinfo,
        sponser : 1,
        invester : 0,
        guest : 1

      }
      
      console.log(" Inside onclick function " + JSON.stringify(NewCompany));
      this.lister.postCompany(NewCompany);


    }

  ngOnInit() { 

  }

}
