import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private appservice:AppService) { }

  ngOnInit(): void {
    if(this.appservice.getApps.length===0){
      this.appservice.setApp('/porfile/github')
    }
  }

}
