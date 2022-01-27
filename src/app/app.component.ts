import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '@/app/app.state';
import { ErrorInterface } from './interfaces/error';
import * as ErrorActions from '@/app/store/error.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AppTest';
  ArrErrors: Array<ErrorInterface> = [];

  constructor(private store: Store<AppState>) {}

  generateErrorDummyVoid(): void {
    const error: Array<ErrorInterface> = [{ code: 500, message: 'test'}]
    this.store.dispatch(ErrorActions.ADD_ERROR({ payload: error }));
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.ArrErrors = state.errors;
    });
  }
}
