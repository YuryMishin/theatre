import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringToColorPipe } from './pipes/string-to-color.pipe';



@NgModule({
  declarations: [
    StringToColorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StringToColorPipe
  ]
})
export class SharedModule { }
