import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactoComponent } from './window/contacto/contacto.component';
import { GithubComponent } from './window/github/github.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    loadChildren: ()=>import('./window/window.module').then(m=>m.WindowModule) 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
