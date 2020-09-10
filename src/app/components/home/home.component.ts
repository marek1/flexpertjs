import { Component, OnInit } from '@angular/core';
import { GlobalActions } from '../../actions';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store$: Store<fromRoot.AppState>) {
  }

  ngOnInit(): void {
  }

}
