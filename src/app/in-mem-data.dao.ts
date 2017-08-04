import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataClassTree implements InMemoryDbService {
  createDb() {

const productClassif = [

      { id: 0, productClassifId: 0, menu:"A",
        parentProductClassifId: null,
        parentSameCharacteristicInd: false,
        displayPathName: 'CORP',
        displaySequence: 1,
        bidAccessInd: true,
        offrAccessInd: true,
        productClassifDesc: 'CORP',
        calcTypeCd: 'F1', trdBasisCd: 100, dayCountConventionCd: 'ACT-ACT', annualCouponCnt: 2, monthEndMethodCd: '1',
        parent: true,
        level: 1,
        checked: false},
      { id: 1, productClassifId: 1, menu:"A",
        parentProductClassifId: 0,
        parentSameCharacteristicInd: true,
        displayPathName: 'CORP-BANKS',
        displaySequence: 2,
        bidAccessInd: true,
        offrAccessInd: true,
        productClassifDesc: 'BANKS',
        calcTypeCd: 'F1', trdBasisCd: 100, dayCountConventionCd: 'ACT-ACT', annualCouponCnt: 2, monthEndMethodCd: '1',
        parent: true,
        level: 1,
        checked: false},
      { id: 2, productClassifId: 2, menu:"A",
        parentProductClassifId: 1,
        parentSameCharacteristicInd: true,
        displayPathName: 'CORP-BANKS-RY',
        displaySequence: 3,
        bidAccessInd: true,
        offrAccessInd: true,
        productClassifDesc: 'RY',
        calcTypeCd: 'F1', trdBasisCd: 100, dayCountConventionCd: 'ACT-ACT', annualCouponCnt: 2, monthEndMethodCd: '1',
        parent: true,
        level: 1,
        checked: false},
      { id: 3, productClassifId: 3, menu:"A",
        parentProductClassifId: 2,
        parentSameCharacteristicInd: true,
        displayPathName: 'CORP-BANKS-RY-SEN',
        displaySequence: 4,
        bidAccessInd: true,
        offrAccessInd: true,
        productClassifDesc: 'SENIOR',
        calcTypeCd: 'F1', trdBasisCd: 100, dayCountConventionCd: 'ACT-ACT', annualCouponCnt: 2, monthEndMethodCd: '1',
        parent: false,
        level: 1,
        checked: false},
      { id: 4, productClassifId: 4, menu:"A",
        parentProductClassifId: 2,
        parentSameCharacteristicInd: true,
        displayPathName: 'CORP-BANKS-RY-NVCC',
        displaySequence: 5,
        bidAccessInd: true,
        offrAccessInd: true,
        productClassifDesc: 'NVCC',
        calcTypeCd: 'F1', trdBasisCd: 100, dayCountConventionCd: 'ACT-ACT', annualCouponCnt: 2, monthEndMethodCd: '1',
        parent: false,
        level: 1,
        checked: false}
    ];


    const classTree2 = [

      { id: 0, seq: 0,  name: 'CORP', parentId: null, parent: true, level:0, openForBid: true, openForOffre: true, checked: true, 
        DisplayPath: 'CORP', inheritFromParent: false, car1:'ccc111', car2:'ccc222', car3:'ccc333'  },

      { id: 1, seq: 1, name: 'BANKS', parentId: 0, parent: true, level:0, openForBid: true, openForOffre: true, checked: true, 
      DisplayPath: 'BANKS', inheritFromParent: false, car1:'', car2:'', car3:''  },

      { id: 2, seq: 2, name: 'RY', parentId: 1, parent: true, level:0, openForBid: true, openForOffre: true, checked: true, 
      DisplayPath: 'BANK RY', inheritFromParent: false, car1:'', car2:'', car3:''  },

      { id: 3, seq: 3, name: 'SENIOR', parentId: 2, parent: false, level:0, openForBid: false, openForOffre: false, checked: false, 
      DisplayPath: 'BANK RY-SENIOR', inheritFromParent: false, car1:'', car2:'', car3:''  },

      { id: 4, seq: 4, name: 'NVCC', parentId: 2, parent: false, level:0, openForBid: true, openForOffre: true, checked: true, 
        DisplayPath: 'BANK RY-NVCC', inheritFromParent: false, car1:'', car2:'', car3:''  }

    ];





  const invDashInv = [
   {
      classNodeId: 1,
      SecurityDesc:'INT-QUEBEC 3.5 Jun2017',
      openForBid: true,
      openForOffer: true,
      iaBidPrice: 100.00,
      iaBidYield: 1.456,
      iaOfferPrice: 101.00,
      iaOfferYield: 1.432,
      cltBidPrice: 100.00,
      cltBidYield: 1.5,
      cltOfferPrice: 101.00,
      cltOfferYield: 1.6,
      balQty: 100000,
      reserveQty: 10000,
      minQty: 5000,
      maxQty: 25000,
      ShownQty: 25000
    },
    {
      classNodeId: 1,
      SecurityDesc:'INT-QUEBEC 3.6 jul2017',
      openForBid: true,
      openForOffer: true,
      iaBidPrice: 100.00,
      iaBidYield: 1.456,
      iaOfferPrice: 101.00,
      iaOfferYield: 1.432,
      cltBidPrice: 100.00,
      cltBidYield: 1.5,
      cltOfferPrice: 101.00,
      cltOfferYield: 1.6,
      balQty: 100000,
      reserveQty: 10000,
      minQty: 5000,
      maxQty: 25000,
      ShownQty: 25000
    },
{
      classNodeId: 2,
      SecurityDesc:'INT-QUEBEC 2.0 jul2023',
      openForBid: true,
      openForOffer: true,
      iaBidPrice: 100.00,
      iaBidYield: 1.456,
      iaOfferPrice: 101.00,
      iaOfferYield: 1.432,
      cltBidPrice: 100.00,
      cltBidYield: 1.5,
      cltOfferPrice: 101.00,
      cltOfferYield: 1.6,
      balQty: 100000,
      reserveQty: 10000,
      minQty: 5000,
      maxQty: 25000,
      ShownQty: 25000
    },


    ]
  
    return {productClassif, invDashInv };
  }
}

