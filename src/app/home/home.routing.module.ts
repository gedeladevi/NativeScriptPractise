import {  NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { CreateaccountComponent } from '../createaccount/createaccount.component'
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component'
import { LoginComponent } from '../login/login.component'
import { HomeComponent } from './home.component'
import { SeeallitemsComponent } from '../seeallitems/seeallitems.component'
import {CategoryitemsComponent } from '../categoryitems/categoryitems.component'
  
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent} ,
  { path: 'createaccount', component: CreateaccountComponent},
  { path:'forgotpassword',component: ForgotpasswordComponent},  
  { path:'seeallitems' , component:SeeallitemsComponent},
  {path:'categorylist' ,component: CategoryitemsComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
