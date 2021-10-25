import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  varArray;
  //  data:string;
  constructor(private _login: LoginService, private _route: Router) { }

  ngOnInit(): void {
    // this.fetchData();
  }



  logOut() {
    if (confirm("Are You Sure Want to Log-Out")) {
      this._login.signOut();
      this._route.navigate(['/']);
    }
  }

}
