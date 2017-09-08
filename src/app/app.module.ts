import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
//import {componentFactory} from '@angular/core'

import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms'
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataClassTree } from './in-mem-data.dao';

import { DatepickerModule, ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AgGridModule } from "ag-grid-angular/main";
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { MessageService } from './message.service';
import { InvDashParamService } from './inv-dash/inv-dash-param.service';
import { InvDashComponent } from './inv-dash/inv-dash.component';
import { OrderDashComponent } from './order-dash/order-dash.component';
import { InvDashTreeComponent } from './inv-dash-tree/inv-dash-tree.component';
import { InvDashParamComponent } from './inv-dash-param/inv-dash-param.component';
import { InvDashInvComponent } from './inv-dash-inv/inv-dash-inv.component';
import { InvDashMessageComponent } from './inv-dash-message/inv-dash-message.component';

import { CheckBoxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DashTreeMenuComponent } from './dash-tree-menu/dash-tree-menu.component';
import { InvDashAddNodeComponent } from './inv-dash-add-node/inv-dash-add-node.component';


@NgModule({
  declarations: [
    AppComponent,
    InvDashComponent,
    OrderDashComponent,
    InvDashTreeComponent,
    InvDashParamComponent,
    InvDashInvComponent,
    InvDashMessageComponent,
    CheckBoxComponent,
    DatepickerComponent,
    DashTreeMenuComponent,
    InvDashAddNodeComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularSplitModule,
    //InMemoryWebApiModule.forRoot(InMemDataClassTree, { apiBase: '/Icarius/' }),
    AgGridModule.withComponents([CheckBoxComponent, DashTreeMenuComponent]),
    DatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [InvDashParamService, MessageService, {provide: APP_BASE_HREF, useValue: '/Icarius/'} ],
  bootstrap: [AppComponent],
  entryComponents: [InvDashAddNodeComponent]
})
export class AppModule { }
