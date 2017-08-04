import {Component, OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid';

import {InvDashInvService} from '../inv-dash-inv.service';
import { CheckBoxComponent } from '../checkbox/checkbox.component';

@Component({
  moduleId: module.id,
  selector: 'app-inv-dash-inv',
  template: `
    <ag-grid-angular #invDashInv style="width: 100%; height: 94%;"  class="ag-fresh"
                 [gridOptions]="gridOptions" 
                >
    </ag-grid-angular>
  `
})
export class InvDashInvComponent implements OnInit {
    public gridOptions: GridOptions;

    constructor(private invDashInvService: InvDashInvService) 
    {
        this.gridOptions = <GridOptions>{};

        this.gridOptions = {
            floatingFilter:true,
            enableSorting:true
        };
 
        this.gridOptions.columnDefs = [

                {headerName: "Description", field: "SecurityDesc", width: 150, pinned: true},

                {headerName: "Bid", field: "openForBid", width: 39, pinned: true,
                    suppressSorting: true, suppressFilter: true,
                     cellRendererFramework: CheckBoxComponent},

                {headerName: "Offer", field: "openForOffer", width: 39, pinned: true,
                    suppressSorting: true, suppressFilter: true,
                    
                    cellRendererFramework: CheckBoxComponent},

                {headerName: 'IA PRICE',
                
                    children: [
                        {headerName: "Bid Price", field: "iaBidPrice", width: 70, suppressFilter: true},
                        {headerName: "Bid Yield", field: "iaBidYield", width: 70, suppressFilter: true},
                        {headerName: "Ofr Price", field: "iaOfferPrice", width: 70, columnGroupShow: 'open', suppressFilter: true},
                        {headerName: "Ofr Yield", field: "iaOfferYield", width: 70, columnGroupShow: 'open', suppressFilter: true}

                    ] 
                },

               {headerName: 'Client PRICE',
                
                    children: [
                        {headerName: "Bid Price", field: "cltBidPrice", width: 70, suppressFilter: true},
                        {headerName: "Bid Yield", field: "cltBidYield", width: 70, suppressFilter: true},
                        {headerName: "Ofr Price", field: "cltOfferPrice", width: 70, columnGroupShow: 'open', suppressFilter: true},
                        {headerName: "Ofr Yield", field: "cltOfferYield", width: 70, columnGroupShow: 'open', suppressFilter: true}

                    ] 
                },
                {headerName: 'POS',
                
                    children: [
                        {headerName: "Ballance", field: "balQty", width: 70, suppressFilter: true},
                        {headerName: "Reserve", field: "reserveQty", width: 70, columnGroupShow: 'open', suppressFilter: true},
                        {headerName: "Min", field: "minQty", width: 70, columnGroupShow: 'open', suppressFilter: true},
                        {headerName: "Max", field: "maxQty", width: 70, columnGroupShow: 'open', suppressFilter: true},
                        {headerName: "Shown", field: "shownQty", width: 70, columnGroupShow: 'open', suppressFilter: true}
                    ] 
                },

        ];
    }

    getInvDashInvData():void {
        this.invDashInvService
            .get()
            .then(invData => this.gridOptions.api.setRowData(invData) )
    }

    //onGridReady(params) {
       // params.api.sizeColumnsToFit();

        //console.log('XYZ Grid ready');
        //this.getClassTreeData();
    //}

    ngOnInit(): void {
        console.log('DEF Grid ready');
        this.getInvDashInvData();
    }

}