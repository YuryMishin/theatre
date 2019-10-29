import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';



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
  ]
})
export class CoreModule { }
