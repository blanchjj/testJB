import { Component, OnInit } from '@angular/core';
import { InvDashParamService } from '../inv-dash/inv-dash-param.service';

@Component({
  selector: 'app-inv-dash-param',
  templateUrl: './inv-dash-param.component.html',
  styleUrls: ['./inv-dash-param.component.css']
})
export class InvDashParamComponent implements OnInit {

  public matDateFrom: String = "2017/08/08";
  public matDateTo: String = "2017/08/08";

  constructor(private invDashParamService: InvDashParamService) {}

  ngOnInit() {

  }

  onClick() {
    console.log("inv-dash-param: refresh button hit");
    this.invDashParamService.setMatDateFrom(this.matDateFrom);
    this.invDashParamService.setMatDateTo(this.matDateTo);
  }

}
