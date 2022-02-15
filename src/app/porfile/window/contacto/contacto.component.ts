import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private appservice:AppService) {
   }

  ngOnInit(): void { 
    if(this.appservice.getApps.length===0){
      this.appservice.setApp('/porfile/contacto')
    }
   }



}
