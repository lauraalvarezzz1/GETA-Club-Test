import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidFormRoutingModule } from './covid-form-routing.module';
import { CovidFormComponent } from './covid-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CovidFormComponent],
  imports: [
    CommonModule,
    CovidFormRoutingModule,
    SharedModule
  ]
})
export class CovidFormModule { }
