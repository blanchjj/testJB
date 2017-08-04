
export class ClassTreeNode {
    id: number;                             // needed for in meme data service

    // Node setup
    productClassifId: number;
    productClassifDesc: string;
    parentProductClassifId: number;
    displayPathName: string;
    displaySequence: number;
    parentSameCharacteristicInd: boolean;
 
    // Market open close
    bidAccessInd: boolean;
    offrAccessInd: boolean;

    //Rules
    //minCheckInd: boolean;
    //minBuyQty: number;
    //minSellQty: number;
    //minMultiple: number;
    //maxCheckInd: boolean;
    //maxBuyQty: number;
    //maxSellQty: number;
    //multiple: number;
    //swapAvailableInd: boolean;
    //bid2bidMaxMat: number;
    //minMatSell: number

    //Calc Params
    
    calcTypeCd: string;
    trdBasisCd: string;
    dayCountConventionCd: string;
    annualCouponCnt: number;
    monthEndMethodCd: string;

    parent:  boolean;
    level:   number;
    checked: boolean;
    menu:    string;
}


//export class ClassTreeNode {
//    id: number;
//   seq: number;
//    name: string;
 //   parentId: number;
 //   parent: boolean;
 //   level: number;
 //   openForBid: boolean;
 //   openForOffre: boolean;
 //   checked: boolean;
 //   DisplayPath: string;
 //   inheritFromParent: boolean;
 //   car1: string;
 //   car2: string;
 //   cae3: string;
//}
