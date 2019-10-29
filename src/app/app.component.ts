import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThearteService} from '../core/services/thearte.service';
import {IPerformanceItem, ISessionItem} from '../core/models/theatre.model';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Билет в театр';

  clientForm: FormGroup;

  constructor(private theatreService: ThearteService) {
    this.clientForm = new FormGroup({
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        birthday: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        payment: new FormGroup({
          type: new FormControl('', [Validators.required])
        }),
      }
    );
  }

  performances: IPerformanceItem[] = [];
  sessions: ISessionItem[] = [];

  ngOnInit(): void {
    this.theatreService.getPerformances().subscribe(data => {
      this.performances = data.data;
    });
    this.theatreService.getSessions().subscribe(data => {
      this.sessions = data.data;
    });
  }

}
