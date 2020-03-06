import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'List of Shoes' }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {title: 'Shoe Details' }
  },
    {
    path: 'cart', component: CartComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
