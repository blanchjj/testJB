import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ClassTreeNode} from './class-tree-node';

@Injectable()
export class ClassTreeService {

private headers = new Headers({'Content-Type': 'application/json'});
private treeUrl = 'http://10.137.50.46:9000/icarius/api/productclassif';  
//private treeUrl = '/icarius/api/productClassif';
private classTreeJson: string = '';


constructor(private http: Http) { }


get(): Promise<any> {
    return this.http.get(this.treeUrl)
                .toPromise()
                .then(response => { 
                    //console.log('response: ', response.json());

                    //Use Next line for in memory http api
                    //return(this.prepTree(response.json().data as ClassTreeNode[])) }  )
                    // Use next line for HTTP service
                    return(this.prepTree(response.json().data as ClassTreeNode[]) ) }  )
                .catch(this.handleError)
}

// Add a node
add(classTreeNode:ClassTreeNode): Promise<ClassTreeNode> {

    return this.http
        .post(this.treeUrl, JSON.stringify(classTreeNode), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as ClassTreeNode)
        .catch(this.handleError);

}

// Update a node
update(classTreeNode:ClassTreeNode): Promise<ClassTreeNode> {
    const url = `${this.treeUrl}/${classTreeNode.id}`;

    return this.http
        .put(url, JSON.stringify(classTreeNode), {headers: this.headers})
        .toPromise()
        .then(() => classTreeNode)
        .catch(this.handleError);
}

// Delete a node
delete(id: number): Promise<void> {
    const url = `${this.treeUrl}/${id}`;

    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
}






// This fonction convert a simple result set from the database into a special JSON tree structure
// require by ag-grid tree 
private prepTree(data:ClassTreeNode[]):ClassTreeNode[] {


    var nullClassTreeNode: ClassTreeNode = {
            id: null,
            productClassifId: null,
            parentProductClassifId: null,
            parentSameCharacteristicInd: null,
            displayPathName: null,
            displaySequence: null,
            bidAccessInd: null,
            offrAccessInd: null,
            productClassifDesc: null,
            parent: null,
            level: null,
            checked: null,
            menu: "A",

            calcTypeCd: null,
            trdBasisCd: null,
            dayCountConventionCd: null,
            annualCouponCnt: null,
            monthEndMethodCd: null
        }

    this.classTreeJson = '[ \n';

    //console.log('ARRAY:' + JSON.stringify(data) );

    this.prepTree2(nullClassTreeNode, data, 0 );

    this.classTreeJson += ']';

    console.log('final String:', this.classTreeJson);

    //return this.getTree();
    //return JSON.parse(this.classTreeJson);
    //return(this.classTreeJson);
    return(JSON.parse(this.classTreeJson))
}


private prepTree2(leaf: ClassTreeNode, data: ClassTreeNode[], level: number ): void {

    var childList: ClassTreeNode[] = [];
    var first: boolean;

    console.log('leaf: ', leaf);
    console.log('data tbl: ', data);

    // Build a list of the children
    for (let e of data) {
        if (e.parentProductClassifId == leaf.productClassifId) {
            childList.push(e)
        } 
        //console.log(e);
    }

    // output the current node if not the first level in that case leaf is null
    if (leaf.productClassifId != null) {

        //Level is only require to allow to open tree up to a specific level
        leaf.level = level;

        //ag-grid require to know if a node has child (is a parent)
        if (childList.length != 0) {
            leaf.parent = true;
        }
        else {
            leaf.parent = false;
        }

        this.classTreeJson += '{ \n  ' + JSON.stringify(leaf).replace('{','').replace('}','') ;

    }

    // Process all the children
    if (childList.length != 0) {
        // TODO: here we need to order the list
    
        if (leaf.productClassifId != null) {
            this.classTreeJson += ',\n  "children": [ \n';
        }
        // process each child
        first=true;
        for (let e2 of childList) {
            //if not first need a comma
            if (! first) {
                this.classTreeJson += ',\n'
            }
            this.prepTree2(e2, data, level + 1)
            first=false;
        }

        if (leaf.productClassifId != null) {
            this.classTreeJson += '] \n';
        }
    }

    if (leaf.productClassifId != null) {
        this.classTreeJson += '}';
    }

    return;
}


private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}



// to delete
public getTree(): any {

return [

            {productClassifDesc: "FEDERAL", xxx1: false, bidMktOpen: true, parent: true, level: 1, checked: true,
                children: [
                    {productClassifDesc: "CANADA", bidMktOpen: true, xxx1: false, texte: 'abcde' }
                ]
            },

            {productClassifDesc: "PROVINCIAL", bidMktOpen: false, xxx1:false, parent: true, level: 1, checked: true,
                children: [
                    {productClassifDesc: "QUEBEC", bidMktOpen: true, xxx1: true},
                    {productClassifDesc: "ONTARIO", bidMktOpen: false, xxx1: true, texte:'12345'},
                    {productClassifDesc: "BC", bidMktOpen: true, xxx1: false},
                    {productClassifDesc: "ALBERTA", bidMktOpen: true, xxx1: true}
                ]
            },

            {productClassifDesc: "CORP", bidMktOpen: false, xxx1: false, parent: true, level: 1, checked: true,
            children: [
                {productClassifDesc: "BANKS", bidMktOpen: false, xxx1: false, parent: true, level: 2, checked: true,
                children: [
                    {productClassifDesc: "RY", bidMktOpen: true, xxx1: true, parent: true, level: 3, checked: true,
                    children: [
                        {productClassifDesc: "SENIOR", bidMktOpen: true, xxx1: true, level: 4},
                        {productClassifDesc: "NVCC", bidMktOpen: true, xxx1: true, level: 4}
                    ]},
                    {productClassifDesc: "NB", bidMktOpen: true, xxx1: true, parent: true, level: 3, checked: true,
                    children: [
                        {productClassifDesc: "SENIOR", bidMktOpen: true, xxx1: true, level: 4},
                        {productClassifDesc: "NVCC", bidMktOpen: true, xxx1: true, level: 4}
                    ]},
                    {productClassifDesc: "CIBC", bidMktOpen: true, xxx1: true, parent: true, level: 3, checked: true,
                    children: [
                        {productClassifDesc: "SENIOR", bidMktOpen: true, xxx1: true, level: 4},
                        {productClassifDesc: "NVCC", bidMktOpen: true, xxx1: true, level: 4}
                    ]},
                    {productClassifDesc: "BNS", bidMktOpen: true, xxx1: true, parent: true, level: 3, checked: true,
                    children: [
                        {productClassifDesc: "SENIOR", bidMktOpen: true, xxx1: true, level: 4},
                        {productClassifDesc: "NVCC", bidMktOpen: true, xxx1: true, level: 4}
                    ]},
                    {productClassifDesc: "BMO", bidMktOpen: true, xxx1: true, parent: true, level: 3, checked: true,
                    children: [
                        {productClassifDesc: "SENIOR", bidMktOpen: true, xxx1: true, level: 4},
                        {productClassifDesc: "NVCC", bidMktOpen: true, xxx1: true, level: 4}
                    ]},
                    {productClassifDesc: "TD", bidMktOpen: true, xxx1: true, parent: true, level: 3, checked: true,
                    children: [
                        {productClassifDesc: "SENIOR", bidMktOpen: true, xxx1: true, level: 4},
                        {productClassifDesc: "NVCC", bidMktOpen: true, xxx1: true, level: 4}
                    ]}

                ]
            },
            {name: "RETAILOR", bidMktOpen: true, xxx1: true, level: 2},
            {name: "TELCO", bidMktOpen: true, xxx1: true, level: 2},
            {name: "POWER GENERATORS", bidMktOpen: true, xxx1: true, level: 2}

            ]
        }
]

}


}