import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseSerService } from 'src/app/shared/services/course-ser.service';
import { EnrollSerService } from 'src/app/shared/services/enroll-ser.service';
import { LighthouseSerService } from 'src/app/shared/services/lighthouse-ser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  edu: string[] = ["SSC", "HSC", "BSC", "MSC", "BCA", "BCS", "BE", "Bcom", "BA", "Other"];
  exp: any[] = [0, 1, 2, 3, 4, 5, "5+"];
  referance: string[] = ["Friend", "Poster", "SMS", "Ads", "Internet", "Others"];

  crs = [];
  lh = [];

  enroll = [];
  isShow: boolean = true;
  isShow2: boolean = true;
  isShow3: boolean = true;

  myStyle: object = {
    visibility: "hidden"
  }
  myStyle2: object = {
    visibility: "visible"
  }

  constructor(private _enroll: EnrollSerService, private _lhSer: LighthouseSerService, private _router: Router) { }

  ngOnInit(): void {
    this.course();
    this.branch();
  }

  // change(value) {
  //   if (value == "hsc") {
  //     this.myStyle = {
  //       visibility: "visible"
  //     }
  //   }
  // }

  //  r:string;
  // myFun(val){
  //   // this.myStyle = {
  //   //   visibility: "visible"
  //   // }
  //   this.r = val;
  //   alert(this.r);
  // }

  course() {
    this._enroll.getCourses().subscribe((res) => {
      this.crs = res;
    })
  }
  branch() {
    this._lhSer.getData().subscribe((res) => {
      this.lh = res;
    })
  }

  // putData(val) {
  //   console.log(val);
  // }

  putData(val) {
    const enrollData = {
      fname: val.fname,
      contact: val.contact,
      email: val.email,
      qualification: val.qualification,
      Specilization: val.Specilization,
      appearing: val.appearing,
      yop: val.yop,
      clgnm: val.clgnm,
      city: val.city,
      work_exp: val.workexp,
      org: val.org,
      branch: val.branch,
      course: val.course,
      ref: val.ref,
      batchtype: val.batchtype
    }
    this._enroll.postData(enrollData).subscribe((res) => {
      alert("Data Added SuccessFully...");
      this._router.navigate(['/enrollment']);
    })
  }

  showSpec(val) {
    if (val == 'SSC' || val == 'HSC') {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  showSpec2(val) {
    if (val == 'Completed') {
      this.isShow2 = false;
    }
    else {
      this.isShow2 = true;
    }
    // alert(val);
  }

  showSpec3(val) {
    if (val == 'Lighthouse') {
      this.isShow3 = false;
    }
    else {
      this.isShow3 = true;
    }
    // alert(val);
  }

}
