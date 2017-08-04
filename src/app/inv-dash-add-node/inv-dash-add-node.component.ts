import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-inv-dash-add-node',
  templateUrl: './inv-dash-add-node.component.html',
  styleUrls: ['./inv-dash-add-node.component.css']
})
export class InvDashAddNodeComponent implements OnInit {

  public title: string = 'Modal with component';
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
