import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './porfile/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  showTopBar:boolean=true;
  constructor(private route:Router){
  }
  setShowBar(value:boolean){
    this.showTopBar = value;
  }
}
