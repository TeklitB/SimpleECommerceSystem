import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { CustomerParentComponent } from './components/lifecyclehooks/ngonchanges/customer/customer-parent/customer-parent.component';
import { HeroParentComponent } from './components/lifecyclehooks/ngonchanges/hero/hero-parent/hero-parent.component';
import { CustomerParentDocheckComponent } from './components/lifecyclehooks/ngdocheck/customer/customer-parent-docheck/customer-parent-docheck.component';
import { KeyvaluediffersParentDocheckComponent } from './components/lifecyclehooks/ngdocheck/keyvaluediffers/parent/keyvaluediffers-parent-docheck/keyvaluediffers-parent-docheck.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'customer-ngonchanges', component: CustomerParentComponent},
  { path: 'hero-ngonchanges', component: HeroParentComponent},
  { path: 'customer-ngdocheck', component: CustomerParentDocheckComponent},
  { path: 'hello-keyvaluediffers', component: KeyvaluediffersParentDocheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
