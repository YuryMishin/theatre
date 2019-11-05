import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private toastr: ToastrService) {
  }

  success(message) {
    this.toastr.success(message, 'Успех', {
      timeOut: 6000,
      positionClass: 'toast-bottom-right'
    });
  }

  error(message) {
    this.toastr.error(message, 'Ошибка', {
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    });
  }
}
