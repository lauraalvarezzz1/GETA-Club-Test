import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-covid-form',
  templateUrl: './covid-form.component.html',
  styleUrls: ['./covid-form.component.scss']
})
export class CovidFormComponent {
  @ViewChild('stepper', {static: false})  myStepper: MatStepper;
  isLinear = true;
  isOptional = false;
  documentTypeForm: FormGroup;
  documentNumberForm: FormGroup;
  temperatureForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.documentTypeForm = this.fb.group({
      documentType: ['', Validators.required],
    });
    this.documentNumberForm = this.fb.group({
      documentNumber: ['', Validators.required]
    });
    this.temperatureForm = this.fb.group({
      temperature: ['', Validators.required]
    });
  }

  registerData() {
    let usersArray = [];
    let newUser = {
      documentType: this.documentTypeForm.get('documentType').value,
      documentNumber: this.documentNumberForm.get('documentNumber').value,
      temperature: this.temperatureForm.get('temperature').value,
    }
    if(localStorage.getItem('users')) {
      usersArray = JSON.parse(localStorage.getItem('users'));
      usersArray.push(newUser);
      localStorage.setItem('users', JSON.stringify(usersArray));
    } else {
      usersArray.push(newUser);
      localStorage.setItem('users', JSON.stringify(usersArray));
    }
    this.myStepper.reset();
  }
}
