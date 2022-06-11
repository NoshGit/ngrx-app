import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Decrement, Increment, Reset } from 'src/app/store/root-store.actions';
import { AppState } from 'src/app/store/root-store.model';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  onIncrement() : void {
    this.store.dispatch(Increment());
  }

  onDecrement() : void {
    this.store.dispatch(Decrement());
  }

  onReset() : void {
    this.store.dispatch(Reset());
  }

}
