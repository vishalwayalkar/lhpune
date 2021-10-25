import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _route:Router){}

  canActivate(): boolean {
    // return true;
    
    if(!! sessionStorage.getItem("user")){
      return true;
    }
    else{
      alert("You are not Authorized Person!!");
      this._route.navigate(['/']);

    }
  }

}
