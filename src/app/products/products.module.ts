import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ListDisplayComponent } from './containers/list-display.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component:ListDisplayComponent}
]

@NgModule({
  declarations: [
    ListComponent,
    ListDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
