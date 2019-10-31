import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatNativeDateModule, MatProgressBarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {LocalStorageService} from './services/localStorage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatStepperModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  exports: [
    MatStepperModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
})
export class CoreModule { }
