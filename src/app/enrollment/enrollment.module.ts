import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [DashboardComponent, EditComponent, AddComponent],
  imports: [
    CommonModule,
    EnrollmentRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    // BrowserAnimationsModule,
    // BsDropdownModule.forRoot()
    // BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class EnrollmentModule { }
