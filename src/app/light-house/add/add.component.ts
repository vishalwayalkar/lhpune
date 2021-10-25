import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LighthouseSerService } from 'src/app/shared/services/lighthouse-ser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _lhSer:LighthouseSerService, private _route:Router) { }

  ngOnInit(): void {
  }

  //insert
  putData(val){
    // console.log(val);
    const lhData = {
      name :  val.name,
      pincode : val.pincode,

    }
    this._lhSer.postData(lhData).subscribe((res)=>
    {
      alert("Data Added SuccessFully...");
      this._route.navigate(['/lighthouse']);
    })
  }

}
