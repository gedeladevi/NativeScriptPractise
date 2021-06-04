import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { SettingsRoutingModule } from './settings.routing.module'
import { SettingsComponent } from './settings.component'
import  { CommonModule} from '../commonheader/common.module'
@NgModule({
  imports: [NativeScriptCommonModule, SettingsRoutingModule,CommonModule],
  declarations: [SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
