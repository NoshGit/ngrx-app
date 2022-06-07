import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer as counterReducer } from './root-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
     counter : counterReducer
    })
  ]
})
export class RootStoreModule { }


