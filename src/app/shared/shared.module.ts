import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ChartsModule
  ],
  declarations: [
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ChartsModule
  ],
})
export class SharedModule { }