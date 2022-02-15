import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items:any[]=[
    {
      route:'./assets/contact.png',
      title:'Contacto',
      url:'/porfile/contacto'

    },
    {
      route:'./assets/github.png',
      title:'Github',
      url:'/porfile/github'
      
    },
    {
      route:'./assets/card.png',
      title:'Cartas',
      url:'/porfile/cards'
      
    },
    {
      route:'./assets/pya.png',
      title:'PYA!',
      url:'/porfile/pya!'
    }
  ]

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }
  setApp(url:string){
    this.appService.setApp(url);
  }

}
