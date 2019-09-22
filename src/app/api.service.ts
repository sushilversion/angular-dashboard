import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    //private http: Http,
    private session: SessionService
  ) {
  }

  public signIn(username: string, password: string) {
    // return this.http
    //   .post(API_URL + '/sign-in', {
    //     username,
    //     password
    //   })
    //   .map(response => response.json())
    //   .catch(this.handleError);

   
  
  }
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
