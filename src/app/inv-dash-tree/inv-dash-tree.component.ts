import {Component, OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid';

import { CheckBoxComponent } from '../checkbox/checkbox.component';
import { DashTreeMenuComponent } from '../dash-tree-menu/dash-tree-menu.component';

import { ClassTreeService } from '../inv-dash/class-tree.service';
import { ClassTreeNode} from '../model/class-tree-node';

import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';

@Component({
  moduleId: module.id,
  selector: 'app-inv-dash-tree',
  template: `
    <button type="submit" (click)="onClick()" class="btn btn-default">SaveSelected</button>
    <ag-grid-angular #invDashTree style="width: 100%; height: 94%;"  class="ag-fresh"
                 [gridOptions]="gridOptions"
                >
    </ag-grid-angular>
  `
})
export class InvDashTreeComponent implements OnInit {
    public gridOptions: GridOptions;
    subscription: Subscription;

    public allo: string = "asasas";
    

    constructor(private classTreeService: ClassTreeService, public messageService: MessageService) 
    {

        this.subscription = this.messageService.getMessage().subscribe(message => { this.processMessage(message); });

        this.gridOptions = <GridOptions>{};
        this.gridOptions.enableColResize = true;
        this.gridOptions.rowSelection = 'multiple';
        this.gridOptions.groupSelectsChildren = true;
        this.gridOptions.suppressRowClickSelection = true;
        this.gridOptions.getNodeChildDetails = this.getNodeChildDetail;
        //this.gridOptions.onColumnGroupOpened = this.groupOpened;

        //this.gridOptions.api.addEventListener('columnGroupOpened' , (event) => {
        //    console.log(event);
        //    console.log(this.allo);
        //    this.messageService.sendMessage('INV-DASH-SPLIT-RESIZE');
        //})

        this.gridOptions.columnDefs = [
            
                {headerName: "menu", field: "menu", width: 50, pinned: 'left',
                     
                     cellRendererFramework: DashTreeMenuComponent},

                {headerName: "Product", field: "productClassifDesc", cellRenderer: 'group', pinned: 'left',
                            cellRendererParams: {
                            checkbox: true
                        }
                },

                {headerName: "Bid", field: "bidAccessInd", width: 39, pinned: 'left',
                     cellRendererFramework: CheckBoxComponent},

                {headerName: "Offer", field: "offrAccessInd", width: 39, pinned: 'left',
                    cellRendererFramework: CheckBoxComponent},
                
                {headerName: 'CALC',
                
                    children: [
                        {headerName: "INHERIT", field: "parentSameCharacteristicInd", width: 70, suppressFilter: true, cellRendererFramework: CheckBoxComponent },
                        {headerName: "Calc Type", field: "calcTypeCd", width: 70, columnGroupShow: 'open', suppressFilter: true, editable: true},
                        {headerName: "Trade Basis", field: "trdBasisCd", width: 90, columnGroupShow: 'open', suppressFilter: true},
                        {headerName: "Day Count", field: "dayCountConventionCd", width: 90, columnGroupShow: 'open', suppressFilter: true},
                        {headerName: "# coupon", field: "annualCouponCnt", width: 70, columnGroupShow: 'open', suppressFilter: true},
                        {headerName: "Month End", field: "monthEndMethodCd", width: 80, columnGroupShow: 'open', suppressFilter: true}
                    ] 
                },

        ];
    }

    //groupOpened(event) {
    //    console.log(event);
    //    console.log(this.allo);
    //    this.messageService.sendMessage('INV-DASH-SPLIT-RESIZE');
    //}

    onClick() {
        console.log('Try to get selected node');
        console.log(this.gridOptions.api.getSelectedNodes());
    }

    processMessage(message) {
        console.log(message.text);
        if (message.text == 'PRODUCT_CLASSIF_CHANGED') {
            console.log("Message received: PRODUCT_CLASSIF_CHANGED");
            this.getClassTreeData();
        }
    }


    //delete():void {

    //    var id:number = 20;

    //    this.classTreeService.delete(id)
    //        .then( classTreeNode => {
                //console.log(classTreeNode);
   //             this.getClassTreeData();
   //         });
   // }

    //add():void {

    //    var cts = new ClassTreeNode();
     //   cts.id = null;
     //   cts.productClassifId = null;
     //   cts.parentProductClassifId = 7;
      //  cts.parentSameCharacteristicInd = true;
    //    cts.displayPathName = null;
    //    cts.displaySequence = null;
    //    cts.bidAccessInd = false;
    //    cts.offrAccessInd = false;
    //    cts.productClassifDesc = "NAT"
    //    cts.parent = false;
    //    cts.level = null;
     //   cts.checked = false;

     //   this.classTreeService.add(cts)
     //       .then( classTreeNode => {
                //console.log(classTreeNode);
     //           this.getClassTreeData();
    //        });
    //}

    getClassTreeData():void {
        this.classTreeService
            .get()
            .then(response => {
                    //console.log('xxxx: ', response);
                    this.gridOptions.api.setRowData(response)} )
                    //this.gridOptions.api.setRowData(this.classTreeService.getTree())} )
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();

        //console.log('XYZ Grid ready');
    }

    ngOnInit(): void {
        //console.log('ABC Grid Init start ');
        this.getClassTreeData();
        //console.log('ABC Grid Init END ');
    }

    getNodeChildDetail(node):any {

            var exp:boolean;

            if (node.level <= 0) { exp=true} else {exp=false}

            if (node.parent) {
            return {
                    group: true,
                    children: node.children,
                    expanded: exp,
                    field: 'productClassifDesc',
                    key: node.productClassifDesc
                }
            } else {
                return null;
            }
        }

}
