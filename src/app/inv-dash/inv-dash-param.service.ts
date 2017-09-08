import { Injectable } from '@angular/core';


@Injectable()
export class InvDashParamService {

    public matDateFrom: String;
    public matDateTo: String;

    public productClassidIds: number[];


    public setMatDateFrom(matDateFrom: String):void {
      this.matDateFrom = matDateFrom;
    }

    public setMatDateTo(matDateTo: String):void {
      this.matDateTo = matDateTo;
    }

    public setProductClassIds(productClassIds:number[]) {
        this.productClassidIds = productClassIds;
    }

}