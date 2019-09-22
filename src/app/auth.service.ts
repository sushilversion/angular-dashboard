import { Injectable } from '@angular/core';

import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

  constructor(
    private session: SessionService,
  ) {
  }

  public isSignedIn() {
      //@TODO- Hard Code
      return true;
      console.log("isSignedIn: ",!!this.session.accessToken);
      
    return !!this.session.accessToken;
  }

  public doSignOut() {
    this.session.destroy();
  }

  public doSignIn(accessToken: string, name: string) {
     // console.log(accessToken,name);
      
    if ((!accessToken) || (!name)) {
      return;
    }
    
    this.session.accessToken = accessToken;
    this.session.name = name;
   // console.log(this.session.accessToken,this.session.name);
  }

}