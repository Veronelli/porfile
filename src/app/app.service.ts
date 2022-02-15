import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apps:any[] = [];
  constructor() { }
  
  get getApps():any[]{
    return this.apps;
  }

  setApp(url:string):void{
    const index = this.apps.findIndex(app=>app===url);

    if(index === -1){
      this.apps.push(url)
    }
    else{
      const selected = this.apps[index];
      for(let i = index; i < this.apps.length-1; i++){
        this.apps[i] = this.apps[i+1];
      }
      this.apps[this.apps.length-1] = selected;

    }
    console.log(this.apps)
  }

  
}
