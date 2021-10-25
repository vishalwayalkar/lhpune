import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enroll } from 'src/app/shared/interface/enroll.model';
import { EnrollSerService } from 'src/app/shared/services/enroll-ser.service';
import { LighthouseSerService } from 'src/app/shared/services/lighthouse-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  enrollObj: Enroll;

  edu: string[] = ["SSC", "HSC", "BSC", "MSC", "BCA", "BCS", "BE", "Bcom", "BA", "Other"];
  exp: any[] = [0, 1, 2, 3, 4, 5, "5+"];
  referance: string[] = ["Friend", "Poster", "SMS", "Ads", "Internet", "Others"];

  crs = [];
  lh = [];

  constructor(private actRoute: ActivatedRoute, private route: Router, private _enroll: EnrollSerService, private _lhSer: LighthouseSerService) { }

  ngOnInit(): void {

    this.course();
    this.branch();

    this.actRoute.paramMap.subscribe(param => {
      this.id = Number(param.get('id'));
      // console.log(this.id);
    });

    this._enroll.getId(this.id).subscribe(res => {
      this.enrollObj = { ...res };
    })
  }

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

  putData(val) {
    // console.log(val);
    const enrollData = {
      id:        this.id,
      fname:     val.fname,
      contact:  val.contact,
      email:    val.email,
      qualification: val.qualification,
      Specilization: val.Specilization,
      appearing: val.appearing,
      yop:        val.yop,
      clgnm:      val.clgnm,
      city:       val.city,
      work_exp:   val.workexp,
      org:        val.org,
      branch:     val.branch,
      course:     val.course,
      ref:        val.ref,
      batchtype:  val.batchtype
    }
    this._enroll.update(enrollData).subscribe((res) => {
      alert("Data Updated SuccessFully...");
      this.route.navigate(['/enrollment']);
    })
  }

}
