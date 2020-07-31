import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    MenuRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class MenuModule { }
