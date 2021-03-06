import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { AProductPageComponent } from './components/admin/a-product-page/a-product-page.component';
import { AHeaderComponent } from './components/admin/a-header/a-header.component';
import { ANavComponent } from './components/admin/a-nav/a-nav.component';
import { AEditComponent } from './components/admin/a-edit/a-edit.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserOrderHistoryComponent } from './components/user-order-history/user-order-history.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserInformationSettingsComponent } from './components/user-information-settings/user-information-settings.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AOrderPageComponent } from './components/admin/a-order-page/a-order-page.component';
import { AAccountsPageComponent } from './components/admin/a-accounts-page/a-accounts-page.component';
import { AProductListingPageComponent } from './components/admin/a-product-listing-page/a-product-listing-page.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    RegisterAccountComponent,
    ProductPageComponent,
    ProductViewComponent,
    AProductPageComponent,
    AHeaderComponent,
    ANavComponent,
    AEditComponent,
    PersonalInfoFormComponent,
    UserMenuComponent,
    UserOrderHistoryComponent,
    ShoppingCartComponent,
    UserSettingsComponent,
    UserInformationSettingsComponent,
    AdminPanelComponent,
    AOrderPageComponent,
    AAccountsPageComponent,
    AProductListingPageComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
