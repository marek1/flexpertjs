import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Message } from '../../interfaces/message';
import { GlobalActions } from '../../actions';

@Component({
  selector: 'app-global-messages',
  templateUrl: './global-messages.component.html',
  styleUrls: ['./global-messages.component.scss']
})
export class GlobalMessagesComponent implements OnInit {
  // holding the level of selected industries
  public globalMessages$: Observable<Message[]>;

  constructor(private store$: Store<fromRoot.AppState>) {
    this.globalMessages$ = this.store$.pipe(select(fromRoot.getGlobalMessages));
  }

  ngOnInit(): void {
  }

  close(message: Message): void {
    this.store$.dispatch(GlobalActions.removeMessage({id: message.id}));
  }

}
