import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent, children: [
    { path: 'form', loadChildren: () => 
    import('../../molecules/covid-form/covid-form.module').then(m => m.CovidFormModule) },
    { path: 'registers', loadChildren: () => 
      import('../../molecules/covid-table/covid-table.module').then(m => m.CovidTableModule) },
    { path: '', redirectTo: 'form',  pathMatch: 'full' },
  ]}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
