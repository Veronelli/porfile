import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private appservice:AppService) { }

  ngOnInit(): void {
    if(this.appservice.getApps.length===0){
      this.appservice.setApp('/porfile/cards');
    }
  }

}
