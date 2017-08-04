import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InvDashInvService {

  private apiUrl = '/Icarius/api/invDashInv';

  constructor(private http: Http) { }

    get(): Promise<any> {

    console.log('Je suis la.....');

    return this.http.get(this.apiUrl)
                .toPromise()
                //.then(response => this.get2() )
                .then(response => response.json().data)
                .catch(this.handleError)
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  public get2(): any {

    
    return [
    {classNodeId:0, SecurityName:'AAAAAAAA', openForBid: true, openForOffre: true},
    {classNodeId:0, SecurityName:'BBBBBBBB', openForBid: true, openForOffre: false},
    {classNodeId:0, SecurityName:'CCCCCCCC', openForBid: true, openForOffre: true},
    {classNodeId:0, SecurityName:'DDDDDDDD', openForBid: false, openForOffre: true},
    {classNodeId:0, SecurityName:'EEEEEEEE', openForBid: true, openForOffre: true}
    ]

  }

}
