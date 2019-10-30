import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ThearteService} from '../core/services/thearte.service';
import {IPerformanceItem, ISessionItem} from '../core/models/theatre.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatHorizontalStepper} from '@angular/material';
import {LocalStorageService} from '../core/services/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Билет в театр';

  paymentTypes = [{text: 'Наличными', value: 'cash'}, {text: 'Картой', value: 'card'}];

  agreeWithRules = false;

  clientForm: FormGroup;
  cardForm: FormGroup;

  stepperIndex = 0;

  loading = false;

  @ViewChild('stepper', {static: false}) stepper: MatHorizontalStepper;

  constructor(private theatreService: ThearteService,
              private lSService: LocalStorageService) {
    const formData = this.lSService.getFormData();
    this.clientForm = new FormGroup({
        session: new FormControl(formData ? formData.session : ''),
        first_name: new FormControl(formData ? formData.first_name : '', [Validators.required]),
        last_name: new FormControl(formData ? formData.last_name : '', [Validators.required]),
        birthday: new FormControl(formData ? formData.birthday : '', [Validators.required]),
        email: new FormControl(formData ? formData.email : '', [Validators.required, Validators.email]),
        payment: new FormGroup({
          type: new FormControl(formData ? formData.payment.type : '', [Validators.required])
        }),
      }
    );
    this.cardForm = new FormGroup(
      {
        number: new FormControl('', [Validators.required, Validators.minLength(16)]),
        valid_thru: new FormControl('', [Validators.required, Validators.pattern(`\\d\\d\\/\\d\\d`)]),
        name: new FormControl('', [Validators.required])
      }
    );
  }

  performances: IPerformanceItem[] = [];
  sessions: ISessionItem[] = [];


  ngOnInit(): void {
    this.getData();
    if (this.lSService.getStepperIndex()) {
      this.stepperIndex = this.lSService.getStepperIndex();
    }
  }

  ngAfterViewInit(): void {
    this.stepper.selectionChange.subscribe(data => {
      this.stepperIndex = data.selectedIndex;
      this.lSService.setStepperIndex(this.stepperIndex);
      if (this.stepperIndex === 2) {
        this.lSService.setFormData(this.clientForm.getRawValue());
      }
    });
  }

  setSession(id) {
    this.clientForm.get('session').setValue(id);
    this.lSService.setFormData(this.clientForm.getRawValue());
    this.stepper.next();
  }

  getData() {
    this.theatreService.getPerformances().subscribe(data => {
      this.performances = data.data;
    });
    this.theatreService.getSessions().subscribe(data => {
      this.sessions = data.data;
    });
  }

  setAgreeRules(agreeRules) {
    this.agreeWithRules = agreeRules;
  }

  prepareForm() {
    const resultForm = this.clientForm.getRawValue();
    if (this.clientForm.get('payment').get('type').value === 'card') {
      resultForm.payment.card = this.cardForm.getRawValue();
    }
    return resultForm;
  }

  submitForm() {
    const resultForm = this.prepareForm();
    this.loading = true;
    this.theatreService.bookOrder(resultForm).subscribe(() => this.loading = false);
  }

  badSubmitForm() {
    const resultForm = this.prepareForm();
    this.loading = true;
    this.theatreService.errorBookOrder(resultForm).subscribe(() => this.loading = false);
  }

}
