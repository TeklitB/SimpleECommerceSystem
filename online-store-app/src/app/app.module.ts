import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { TopBarComponent as TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { CustomerParentComponent } from './components/lifecyclehooks/ngonchanges/customer/customer-parent/customer-parent.component';
import { CustomerChildComponent } from './components/lifecyclehooks/ngonchanges/customer/customer-child/customer-child.component';
import { CustomerParentDocheckComponent } from './components/lifecyclehooks/ngdocheck/customer/customer-parent-docheck/customer-parent-docheck.component';
import { CustomerChildDocheckComponent } from './components/lifecyclehooks/ngdocheck/customer/customer-child-docheck/customer-child-docheck.component';
import { HeroParentComponent } from './components/lifecyclehooks/ngonchanges/hero/hero-parent/hero-parent.component';
import { HeroChildComponent } from './components/lifecyclehooks/ngonchanges/hero/hero-child/hero-child.component';
import { HeroParentNgdocheckComponent } from './components/lifecyclehooks/ngdocheck/hero/hero-parent-ngdocheck/hero-parent-ngdocheck.component';
import { HeroChildNgdocheckComponent } from './components/lifecyclehooks/ngdocheck/hero/hero-child-ngdocheck/hero-child-ngdocheck.component';
import { KeyvaluediffersChildDocheckComponent } from './components/lifecyclehooks/ngdocheck/keyvaluediffers/child/keyvaluediffers-child-docheck/keyvaluediffers-child-docheck.component';
import { KeyvaluediffersParentDocheckComponent } from './components/lifecyclehooks/ngdocheck/keyvaluediffers/parent/keyvaluediffers-parent-docheck/keyvaluediffers-parent-docheck.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CustomerParentComponent,
    CustomerChildComponent,
    HeroParentComponent,
    HeroChildComponent,
    CustomerParentDocheckComponent,
    CustomerChildDocheckComponent,
    HeroParentNgdocheckComponent,
    HeroChildNgdocheckComponent,
    KeyvaluediffersChildDocheckComponent,
    KeyvaluediffersParentDocheckComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
