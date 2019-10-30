import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setStepperIndex(config) {
    localStorage.setItem('StepperIndex', JSON.stringify(config));
  }

  getStepperIndex() {
    return JSON.parse(localStorage.getItem('StepperIndex'));
  }

  setFormData(config) {
    localStorage.setItem('FormData', JSON.stringify(config));
  }

  getFormData() {
    return JSON.parse(localStorage.getItem('FormData'));
  }
}
