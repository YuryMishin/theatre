import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core/core.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {ToastrModule} from 'ngx-toastr';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
