import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/interface/course.model';
import { CourseSerService } from 'src/app/shared/services/course-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  crsArray: Course;
  constructor(private actRoute: ActivatedRoute, private crsSer: CourseSerService, private route:Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      param => {
        this.id = Number(param.get(`id`));
      }
    );
    this.crsSer.getId(this.id).subscribe(
      res => {
        this.crsArray = { ...res };
      }
    )
  }

  //update
  putData(val) {
    const crsArray = {
      id: this.id,
      name: val.name,
      duration: val.duration
    }
    this.crsSer.update(crsArray).subscribe(() => {
      alert("Data updated successFully !!");
      this.route.navigate(['/courses']);
    })
  }

}
