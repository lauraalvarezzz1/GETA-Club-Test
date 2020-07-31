import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-covid-form',
  templateUrl: './covid-form.component.html',
  styleUrls: ['./covid-form.component.scss']
})
export class CovidFormComponent implements OnInit{
  @ViewChild('stepper', {static: false})  myStepper: MatStepper;
  isLinear = true;
  isOptional = false;
  mainView: boolean;
  documentTypeForm: FormGroup;
  documentNumberForm: FormGroup;
  temperatureForm: FormGroup;
  newUser: boolean;
  
  constructor(private fb: FormBuilder,
              public dialog: MatDialog) {
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

  ngOnInit() {
    this.mainView = true;
    this.newUser = true;
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

      usersArray.forEach(item => {
        if (newUser.documentNumber === item.documentNumber) {
          this.newUser = false;
          return;
        }
      });
      if(this.newUser) {
        usersArray.push(newUser);
        localStorage.setItem('users', JSON.stringify(usersArray));
      }
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '412px',
        data: !this.newUser ? "El usuario ya existe" : null
      });
      dialogRef.afterClosed().subscribe((response)=>{
        if(response) {
          this.newUser = true;
          this.myStepper.reset();
        }
      });
    } else {
      usersArray.push(newUser);
      localStorage.setItem('users', JSON.stringify(usersArray));
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '412px'
      });
      dialogRef.afterClosed().subscribe(()=>{
        this.myStepper.reset();
        usersArray = [];
      });
    }
  }

  startTest() {
    this.mainView = false;
  }
}
