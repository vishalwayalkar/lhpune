import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lighthouse } from 'src/app/shared/interface/lighthouse.model';
import { LighthouseSerService } from 'src/app/shared/services/lighthouse-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number;
  lhArray:Lighthouse;

  constructor(private actRoute:ActivatedRoute, private _lhSer:LighthouseSerService, private _route:Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      param=>{
        this.id = Number(param.get(`id`));
      }
    );
    this._lhSer.getId(this.id).subscribe(res=>{
      this.lhArray = {...res};
    });
  }

//update
  putData(val){
    const lhArray = {
      id : this.id,
      name : val.name,
      pincode: val.pincode
    }
    this._lhSer.update(lhArray).subscribe(()=>{
      alert("Data updated successFully !!");
      this._route.navigate(['/lighthouse']);
    })
  }
}
