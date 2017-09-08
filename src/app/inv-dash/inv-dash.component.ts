import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-inv-dash',
  templateUrl: './inv-dash.component.html',
  styleUrls: ['./inv-dash.component.css']
})
export class InvDashComponent implements OnInit {
  
  public sizeLeft=28;
  public sizeRight=72;


 subscription: Subscription;

  constructor(private messageService: MessageService) 
  {

      this.subscription = this.messageService.getMessage().subscribe(message => { this.processMessage(message); });
  }

  processMessage(message) {
      console.log(message.text);
      if (message.text == 'INV-DASH-SPLIT-RESIZE') {
          console.log("Message received: INV-DASH-SPLIT-RESIZE");
          if (this.sizeLeft == 28) {
            this.sizeLeft=50;
            this.sizeRight=50;
          } else {
            this.sizeLeft=28;
            this.sizeRight=72;
          }
      }
  }


  ngOnInit() {
  }

}
