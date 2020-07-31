import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidTableComponent } from './covid-table.component';

const routes: Routes = [{ path: '', component: CovidTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidTableRoutingModule { }
