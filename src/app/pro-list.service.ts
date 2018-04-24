import { Injectable } from '@angular/core';
import {Http , Response,RequestOptions} from '@angular/http';
import { Headers } from '@angular/http/src/headers';
import {ProjectSchema} from "./ProjectSchema";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Console } from '@angular/core/src/console';
import { CompanySchema } from 'app/CompanySchema';

@Injectable()
export class ProListService {
log(){
	console.log('ddddddddd');
}

  constructor(private http : Http) { }

  getdata(Vary) : Observable<ProjectSchema[]>
  {
    console.log("inside getdata function");
     return this.http.get('http://localhost:4000/' + Vary).map(
       (response : Response) => {return <ProjectSchema[]> response.json();
      }
     )
    }

  getpro(proName) :Observable<ProjectSchema[]>
  {
    console.log("inside getpro function : " + proName);
    return this.http.get('http://localhost:4000/project/'+ proName).map(
      (response : Response) => {return <ProjectSchema[]> response.json();
      }
    )
  }
  
    postCompany(NewCompany : CompanySchema) : Promise<CompanySchema>
    {
      console.log("inside  postCompay  function ")
      
      console.log("the body for posting is " + JSON.stringify(NewCompany));
  
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      // const httpOptions = {
      //   headers: new Headers({
      //     'Content-Type':  'application/json',
      //     'Authorization': 'my-auth-token'
      //   })
      // };
      return this.http.post('http://localhost:4000/company' , NewCompany , options)
      .toPromise()
      .then(this.extractData)
            .catch(this.handleErrorPromise);
      
    }
    extractData(res: Response) {
      let body = res.json();
      return body || {};
    }
    handleErrorObservable (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    } 
    private handleErrorPromise (error: Response | any) {
      console.error(error.message || error);
      return Promise.reject(error.message || error);
    }

}
