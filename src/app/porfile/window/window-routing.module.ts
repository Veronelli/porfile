import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindowComponent } from './window/window.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GithubComponent } from './github/github.component';
import { CardComponent } from './card/card.component';
import { PedidoyaComponent } from './pedidoya/pedidoya.component';

const routes: Routes = [
  {
    path:'porfile',
    component:WindowComponent,
    children:[{
      path:'contacto',
      component:ContactoComponent
    },
    {
      path:'github',
      component:GithubComponent
    },
    {
      path:'cards',
      component:CardComponent
    },
    {
      path:'pya!',
      component:PedidoyaComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowRoutingModule { }
