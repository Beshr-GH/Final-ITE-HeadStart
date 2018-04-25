import { Component,OnInit } from '@angular/core';
import {HomeComponent} from './home/index';
import { ProListComponent} from './pro-list/index';
import { SignComponent} from './sign/index';
import { ProjectDetailsComponent} from './project-details/index';
import { Router, NavigationEnd,RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  //directives : [HomeComponent]
})
export class AppComponent implements OnInit  {

  constructor(private router: Router) { }

  title = 'app work ! , woop ,woop.';
  name='marah najjar';
  person={
f:"marah",
l: "naj"
  };
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}

}
