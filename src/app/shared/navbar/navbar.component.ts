import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  showMenu:boolean=false;

  ngOnInit(): void {
  }

  toggleMenu():void{
    this.showMenu = !(this.showMenu)
  }

}
