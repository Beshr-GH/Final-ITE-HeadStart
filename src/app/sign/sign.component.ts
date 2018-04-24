import { Component, OnInit } from '@angular/core';
import { ProListService } from '../pro-list.service';
import { Http } from '@angular/http';
import { CompanySchema } from "../CompanySchema";
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  providers: [ProListService]
})
export class SignComponent implements OnInit {

  constructor(private lister: ProListService) { }

  insertData(name, email, number, Cname,
    website, Country, City, info, sponsor, investor, guest) {

    console.log("checkbox : " + guest.value)

    var sname = name.value;
    var scountry = Country.value;
    var scity = City.value;
    var sphone = number.value;
    var semail = email.value;
    var sCountry = Country.value;
    var sCname = Cname.value;
    var swebsite = website.value;
    var sinfo = info.value;
    var sinvester = (investor.value === "on") ? 1 : 0;
    var ssponser = (sponsor.value === "on") ? 1 : 0;
    var sguest = (guest.value === "on") ? 1 : 0;



    console.log("lama + : " + sname + " " + semail + " " + sCountry + "\n guest : " + sguest);
    var NewCompany: CompanySchema =
      {
        name: sname,
        com_name: sCname,
        country: sCountry,
        city: scity,
        phone: sphone,
        email: semail,
        website: swebsite,
        info: sinfo,
        sponser: ssponser,
        invester: sinvester,
        guest: sguest

      }

    console.log(" Inside onclick function " + JSON.stringify(NewCompany));
    this.lister.postCompany(NewCompany);


  }

  ngOnInit() {

  }

}
