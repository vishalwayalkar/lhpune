import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightHouseRoutingModule } from './light-house-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
// import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [DashboardComponent, EditComponent, AddComponent],
  imports: [
    CommonModule,
    LightHouseRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    // BrowserModule, 
    NgxPaginationModule,
    OrderModule
  ]
})
export class LightHouseModule { }
