import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowRoutingModule } from './window-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { GithubComponent } from './github/github.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { WindowComponent } from './window/window.component';
import { CardComponent } from './card/card.component';
import { PedidoyaComponent } from './pedidoya/pedidoya.component';


@NgModule({
  declarations: [
    WindowComponent,
    ContactoComponent,
    GithubComponent,
    TopbarComponent,
    PedidoyaComponent,
    CardComponent,
    PedidoyaComponent
  ],
  imports: [
    CommonModule,
    WindowRoutingModule
  ]
})
export class WindowModule { }
