import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { ConfirmComponent } from './components/register/confirm/confirm.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { CurrencyAccountComponent } from './components/currency-account/currency-account.component';

const routes: Routes = [
  {path:'',component:HomeComponent, canActivate: [LoginGuard]},
  {path:'currency-account',component:CurrencyAccountComponent, canActivate: [LoginGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'registerConfirm',component:LoginComponent},
  {path:'registerConfirm/:value',component:ConfirmComponent},
  {path:'forgot-password/:value',component:ForgotPasswordComponent},
  {path:'forgot-password',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
