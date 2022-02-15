import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private appservice:AppService,private router:Router) { }
  app!:string
  length!:number
  ngOnInit(): void {
    this.length = this.appservice.getApps.length-1;
    this.app = this.appservice.getApps[this.length-1]

    console.log(this.app)

  }

  back() {
    console.log("Hola")
    this.length = this.appservice.getApps.length-1;
    const last = this.appservice.getApps[this.length-1];
    const current = this.app;
    this.app = last;
    this.appservice.getApps.pop()
    this.router.navigateByUrl(this.app);
  }
}
