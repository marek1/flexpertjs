import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { GlobalActions } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private store$: Store<fromRoot.AppState>) { }

  sendEmail(name: string, email: string, message: string): void {
    this.http.post('https://marek-sonnabend.de/flexperts/assets/mail/contact_me.php', {
      name,
      phone: '0',
      email,
      message,
    }).subscribe(
      data => this.store$.dispatch(GlobalActions.setMessage({body: 'Message was sent', color: 'green'})),
      error => this.store$.dispatch(GlobalActions.setMessage({body: 'Message could not be sent', color: 'red'}))
    );
  }
  
}
