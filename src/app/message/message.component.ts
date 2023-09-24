import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Message, DataService } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent implements OnInit {
  private data = inject(DataService);
  ngOnInit(): void {
    
    // this.pTimer = setInterval(() => {
    //   this.refreshData();
    // }, 5000);
  }


  refreshData() {

    if (this.message !== undefined){
      this.message = this.data.getMessageById(this.message.id);
      this.message.atual++;
      console.log('refresh',this.message.atual);
      
    }
      
      
  }


  private platform = inject(Platform);
  @Input() message?: Message;
  pTimer: any;

  isIos() {
    return this.platform.is('ios')
  }

  startTimer() {
    this.atualizar();
    console.log('startTimer inicio');
    this.pTimer = setInterval(() => {
      if (this.message !== undefined)
        this.customTimer(this.message);
    }, 2000);
    console.log(this.message);

    console.log('start pTimer', this.pTimer);

    console.log('startTimer fim');

  }

  pauseTimer() {

    console.log('pausa inicio');
    if (this.message !== undefined) {
      this.message.atual = 0;
      clearInterval(this.pTimer);
    }

    console.log('pausa', this.message);
    console.log('pausa fim');


  }
  atualizar() {
    if (this.message !== undefined) {
      this.message.atual++;
      console.log('atualizou', this.message);

    }

  }

  public customTimer(m: Message) {
    console.log('customTimer inicio');
    console.log(m.atual);
    m.atual++;

    //clearTimeout(this.pTimer);
    if (m.atual > 10) {
      console.log('if', this.pTimer);
      clearInterval(this.pTimer);

    } else {
      this.atualizar();
      //this.pTimer = this.customTimer(m);
      console.log('else', this.pTimer);
      console.log('else', m);
    }
  }
}
