import { Component, OnInit, TemplateRef } from '@angular/core';
import { CourseSerService } from '../../shared/services/course-ser.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  course = [];
  modalRef: BsModalRef;
  term;
  p: number = 1;
  order: string;
  reverse: boolean = false;

  constructor(private _crsSer: CourseSerService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchdata();
  }

  changeOrder(val) {
    if (val == 'id') {
      this.order = "id";
      this.reverse = !this.reverse;
    }
    if (val == 'name') {
      this.order = "name";
      this.reverse = !this.reverse;
    }
    if (val == 'duration') {
      this.order = "duration";
      this.reverse = !this.reverse;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetchdata() {
    this._crsSer.getData().subscribe((res) => {
      this.course = res;
    });
  }

  deletData(val) {
    if (confirm(`${"Are sure want to delete data ?"}`)) {
      this._crsSer.dData(val).subscribe((res) => {
        this.fetchdata();
      })
    }
  }
}
