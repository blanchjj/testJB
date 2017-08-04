import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp, ICellEditorAngularComp} from "ag-grid-angular/main";

@Component({
  selector: 'app-checkbox',
  template: `
  <input class="form-check-input" [ngModel]="chkValue" (ngModelChange)="onChange($event)" type="checkbox">
  `,
  styleUrls: ['./checkbox.component.css']
})

export class CheckBoxComponent implements ICellEditorAngularComp, ICellRendererAngularComp {

    private params:any;
    public chkValue:boolean = true;

    agInit(params:any):void {
        this.params = params;
        this.chkValue = params.value;
        //console.log(this.params);
    }

    onChange($event) {
        this.chkValue = $event;
        this.params.node.setDataValue(this.params.colDef, this.chkValue);
    }

    getValue(): any {
        //console.log("GetValue was called");
        return this.chkValue;
    }

}
