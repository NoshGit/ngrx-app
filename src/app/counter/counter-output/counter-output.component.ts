import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { AppState } from 'src/app/store/root-store.model';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter$!: Observable<{ counter: number; }>;
  
  constructor(private store: Store<{counter: AppState}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

}
