import { Component, OnInit, TemplateRef } from '@angular/core';
import { LighthouseSerService } from 'src/app/shared/services/lighthouse-ser.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lhArray = [];
  modalRef: BsModalRef;
  term;
  p: number = 1;
  order: string;
  reverse: boolean = false;

  constructor(private _lhSer: LighthouseSerService, private modalService: BsModalService) { }

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
    if (val == 'pincode') {
      this.order = "pincode";
      this.reverse = !this.reverse;
    }
  }

  //model
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  //display
  fetchdata() {
    this._lhSer.getData().subscribe((res) => {
      this.lhArray = res;
    });
  }

  //delete
  deletData(val) {
    if (confirm(`${"Are sure want to delete data ?"}`)) {
      this._lhSer.dData(val).subscribe((res) => {
        this.fetchdata();
      })
    }
  }

}
