import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [DashboardComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class CoursesModule { }
