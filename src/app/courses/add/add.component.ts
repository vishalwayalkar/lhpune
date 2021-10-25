import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseSerService } from 'src/app/shared/services/course-ser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _crsSer: CourseSerService, private _route:Router) { }

  ngOnInit(): void {
  }

  putData(val) {
    const crsData = {
      name: val.name,
      duration: val.duration,
    }
    this._crsSer.postData(crsData).subscribe((res) => {
      alert("Data Added SuccessFully...");
      this._route.navigate(['/courses']);
    })
  }

}
