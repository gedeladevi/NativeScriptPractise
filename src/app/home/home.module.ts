import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { HomeRoutingModule } from './home.routing.module'
import { HomeComponent } from './home.component'
import { LoginComponent } from '../login/login.component'
import { CreateaccountComponent} from '../createaccount/createaccount.component'
import { ForgotpasswordComponent} from '../forgotpassword/forgotpassword.component'
import { CommonModule} from '../commonheader/common.module'
import { SeeallitemsComponent } from '../seeallitems/seeallitems.component'
import { CommonhorizontalscrollComponent} from '../commonhorizontalscroll/commonhorizontalscroll.component'
import { CategoryitemsComponent } from '../categoryitems/categoryitems.component'
import { Seeallitems1Component } from '../seeallitems1/seeallitems1.component'
import { SblqwipoService } from '../Service'


@NgModule({
  imports: [
    NativeScriptCommonModule,
     HomeRoutingModule,
     CommonModule,
     NativeScriptFormsModule
    ],
  declarations: [HomeComponent
    ,LoginComponent
    ,CreateaccountComponent
    ,ForgotpasswordComponent     
    ,SeeallitemsComponent 
    ,CategoryitemsComponent
    ,CommonhorizontalscrollComponent
    ,Seeallitems1Component     
    ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [SblqwipoService]
})
export class HomeModule {}
