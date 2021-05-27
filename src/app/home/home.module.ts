import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { HomeRoutingModule } from './home.routing.module'
import { HomeComponent } from './home.component'
import { LoginComponent } from '../login/login.component'
import { CreateaccountComponent} from '../createaccount/createaccount.component'
import { ForgotpasswordComponent} from '../forgotpassword/forgotpassword.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
     HomeRoutingModule    
    ],
  declarations: [HomeComponent,LoginComponent,CreateaccountComponent,ForgotpasswordComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
