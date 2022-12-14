import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './components/register/register.component';
import { APP_BASE_HREF, CommonModule, DatePipe } from '@angular/common';
import { ConfirmComponent } from './components/register/confirm/confirm.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CurrencyAccountComponent } from './components/currency-account/currency-account.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CurrencyAccountPipe } from './pipe/currency-account.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CurrencyAccountFilterPipe } from './pipe/currency-account-filter.pipe';

// Hocam buldum galiba confirm component eklememişim
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmComponent,
    ForgotPasswordComponent,
    NavComponent,
    SidenavComponent,
    CurrencyAccountComponent,
    CurrencyAccountPipe,
    CurrencyAccountFilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    FormsModule,
    NgxSpinnerModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      closeButton: true
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: 'apiUrl', useValue: 'https://localhost:7150/api/' },
    { provide: 'validHatasi', useValue: 'Zorunlu alanları doldurun' },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    [DatePipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
