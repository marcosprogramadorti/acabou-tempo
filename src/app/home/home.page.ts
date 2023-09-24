import { Component, inject, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  private data = inject(DataService);
  constructor() {}
  ngAfterViewInit(): void {
   
  }
 
  ngOnInit(): void {
    

  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
      console.log("refresh "+ev);
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
