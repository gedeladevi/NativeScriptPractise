import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { CreateaccountComponent } from '../createaccount/createaccount.component'
import { LoginComponent } from '../login/login.component'
import { HomeComponent } from './home.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent} ,
  {path: 'createaccount', component: CreateaccountComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
