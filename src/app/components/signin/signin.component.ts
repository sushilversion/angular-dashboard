import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {

  public frm: FormGroup;

  public isBusy = false;
  public hasFailed = false;
  public showInputErrors = false;

  constructor(
   //  private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.frm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public doSignIn() {

    // Make sure form values are valid
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }

    // Reset status
    this.isBusy = true;
    this.hasFailed = false;

    // Grab values from form
    const username = this.frm.get('username').value;
    const password = this.frm.get('password').value;

    if(username==='demo' && password==='demo'){
    let response ={
        token: "asdsdasdaswewwwdasdas",
        name: "demo"
      }
      this.auth.doSignIn(
        response.token,
        response.name
      );
      this.router.navigate(['dashboard']);
    }
    else{
      this.isBusy = false;
      this.hasFailed = true;
    }

    // Submit request to API
    // this.api
    //   .signIn(username, password)
    //   .subscribe(
    //     (response) => {
    //       this.auth.doSignIn(
    //         response.token,
    //         response.name
    //       );
    //       this.router.navigate(['dashboard']);
    //     },
    //     (error) => {
    //       this.isBusy = false;
    //       this.hasFailed = true;
    //     }
    //   );
  }
}