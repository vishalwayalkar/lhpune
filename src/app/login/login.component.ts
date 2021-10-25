import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from 'src/app/shared/login.service';
import { Login } from '../shared/interface/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Login[];
  uname: string;
  upass: string;

  constructor(private _log:LoginService, private _route:Router) { }

  ngOnInit(): void {
  }

  userLogin() {
    this._log.getUser().subscribe((res) => {
      this.user = res;
      const data = this.user.filter(item => (item.uname == this.uname) && (item.upass == this.upass));
      if (data.length > 0) {
        this._log.signIn(this.uname);
        this._route.navigate(['/lighthouse']);
      }
      else {
        alert("Invalid User");
        this.uname = "";
        this.upass = "";
      }
    });
  }

}
