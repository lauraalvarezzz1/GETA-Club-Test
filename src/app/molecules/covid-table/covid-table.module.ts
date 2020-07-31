import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidTableRoutingModule } from './covid-table-routing.module';
import { CovidTableComponent } from './covid-table.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CovidTableComponent],
  imports: [
    CommonModule,
    CovidTableRoutingModule,
    SharedModule
  ]
})
export class CovidTableModule { }
