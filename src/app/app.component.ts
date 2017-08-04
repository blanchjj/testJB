import { Component, Input } from '@angular/core';

import {MessageService} from './message.service';
import {ClassTreeService} from './class-tree.service';
import {InvDashInvService} from './inv-dash-inv.service';

import { InvDashComponent } from './inv-dash/inv-dash.component';
import { OrderDashComponent } from './order-dash/order-dash.component';
import { InvDashTreeComponent } from './inv-dash-tree/inv-dash-tree.component';
import { InvDashParamComponent } from './inv-dash-param/inv-dash-param.component';
import { InvDashInvComponent } from './inv-dash-inv/inv-dash-inv.component';
import { InvDashMessageComponent } from './inv-dash-message/inv-dash-message.component';
import { CheckBoxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, ClassTreeService, InvDashInvService]
})
export class AppComponent {
  title = 'app';
  @Input() invDashComponent:InvDashComponent;
  @Input() orderDashComponent:OrderDashComponent;
  @Input() invDashTreeComponent:InvDashTreeComponent;
  @Input() invDashParamComponent:InvDashParamComponent;
  @Input() invDashInvComponent:InvDashInvComponent;
  @Input() invDashMessageComponent:InvDashMessageComponent;
  @Input() checkBoxComponent:CheckBoxComponent;

}
