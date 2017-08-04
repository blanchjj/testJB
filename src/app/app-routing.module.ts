import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvDashComponent }   from './inv-dash/inv-dash.component';
import { OrderDashComponent }      from './order-dash/order-dash.component';

const routes: Routes = [
  { path: '', redirectTo: '/inv-dash', pathMatch: 'full' },
  { path: 'inv-dash',  component: InvDashComponent },
  { path: 'order-dash',     component: OrderDashComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}