import {Routes} from '@angular/router';
import {CustomerComponent} from './pages/customer/customer.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';
import {OrderComponent} from './pages/order/order.component';
import {ProductComponent} from './pages/product/product.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {CustomerListComponent} from './pages/customer/inner-pages/customer-list/customer-list.component';
import {NewCustomerComponent} from './pages/customer/inner-pages/new-customer/new-customer.component';

export const routes: Routes = [
  {path: '', redirectTo: '/customer', pathMatch: 'full'},
  {
    path: 'customer', component: CustomerComponent, children: [
      {path: '', redirectTo: '/customer/list', pathMatch: 'full'},
      {path:'list', component:CustomerListComponent},
      {path:'new/:data', component:NewCustomerComponent},
    ]
  },
  {path: 'product', component: ProductComponent},
  {path: 'order', component: OrderComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: '**', component: NotFoundComponent},
];
