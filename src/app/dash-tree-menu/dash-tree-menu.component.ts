
import {Component, Type, ViewChild, ViewEncapsulation} from '@angular/core'
import {ICellRendererAngularComp, ICellEditorAngularComp} from "ag-grid-angular/main";
import { CheckBoxComponent } from '../checkbox/checkbox.component';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { ClassTreeService } from '../inv-dash/class-tree.service';
import { ClassTreeNode} from '../model/class-tree-node';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-dash-tree-menu',
  templateUrl: './dash-tree-menu.component.html',
  styleUrls: ['./dash-tree-menu.component.css']
})
export class DashTreeMenuComponent implements  ICellRendererAngularComp {
  @ViewChild('childModalDel') public childModalDel:ModalDirective;
  @ViewChild('childModalAdd') public childModalAdd:ModalDirective;

  public params: any;
  public productClassifDesc: string;
  public displayPathName: string;
  public productClassifId: number;
  public parentProductClassifId: number;
  public underInd: string;

  public newProductClassifDesc: string;
  public newDisplayPathName: string;

  constructor(private classTreeService: ClassTreeService, private messageService: MessageService) {};


  // Open the ADD modal window
  onClickAdd() {
      console.log(this.params);
      this.underInd = 'under';
      this.newProductClassifDesc = "";
      this.newDisplayPathName = "";
      this.childModalAdd.show();
  }

  // Open the DELETE modal window
  onClickDel() {
    console.log(this.params);
    this.childModalDel.show();
  }


  // Delete a node
  // TODO:   should nod allow delete if a Parent
  //         means that we must delete all children before
  //         Also the service must make sure that the node is
  //         not in use by any position
  //
  // TODO: Somehow notify the inv-dash-tree-component to relod the grid
  // TODO: Multi-user should also get a notification to refresh
  //       websocket for PUSH notification

    delete(): void {

      this.classTreeService.delete(this.productClassifId)
            .then( classTreeNode => {
                 console.log("message created: PRODUCT_CLASSIF_CHANGED");
                 this.messageService.sendMessage('PRODUCT_CLASSIF_CHANGED');
                 this.childModalDel.hide();
            });
    }

    // Add a Node
    add():void {

        var cts = new ClassTreeNode();
        cts.id = null;
        cts.productClassifId = null;
        //add if here for same level control
        cts.parentProductClassifId = this.productClassifId;
        cts.parentSameCharacteristicInd = true;
        cts.displayPathName = this.newDisplayPathName;
        cts.displaySequence = null;
        cts.bidAccessInd = false;
        cts.offrAccessInd = false;
        cts.productClassifDesc = this.newProductClassifDesc;
        cts.parent = false;
        cts.level = null;
        cts.checked = false;

        this.classTreeService.add(cts)
            .then( classTreeNode => {
                //console.log(classTreeNode);
                console.log("message created: PRODUCT_CLASSIF_CHANGED");
                this.messageService.sendMessage('PRODUCT_CLASSIF_CHANGED');
                this.childModalAdd.hide();
            });
    }

    
    cancel():void {
      this.childModalAdd.hide();
      this.childModalDel.hide();
    }




  agInit(params:any):void {
        this.params = params;
        console.log('param: ', this.params);
        this.productClassifDesc = params.data.productClassifDesc;
        this.displayPathName = params.data.displayPathName;
        this.productClassifId = params.data.productClassifId;
        this.parentProductClassifId = params.data.parentProductClassifId;
  }

  getValue(): any {
        //console.log("GetValue was called");
        return true;
    }

}
