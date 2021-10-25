import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EnrollSerService } from '../../shared/services/enroll-ser.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  modalRef: BsModalRef;
  enroll = [];
  term;
  p: number = 1;
  order: string;
  reverse: boolean = false;

  constructor(private _enrollSer: EnrollSerService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    if (val == 'contact') {
      this.order = "contact";
      this.reverse = !this.reverse;
    }
    if (val == 'branch') {
      this.order = "branch";
      this.reverse = !this.reverse;
    }

  }

  fetchData() {
    this._enrollSer.getData().subscribe(
      (res) => {
        this.enroll = res;
      }
    )
  }

  deletData(val) {
    if (confirm(`${"Are sure want to delete data ?"}`)) {
      this._enrollSer.dData(val).subscribe((res) => {
        this.fetchData();
      })
    }
  }

}
