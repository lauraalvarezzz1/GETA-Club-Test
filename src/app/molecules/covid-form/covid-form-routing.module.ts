import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidFormComponent } from './covid-form.component';

const routes: Routes = [{ path: '', component: CovidFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidFormRoutingModule { }
