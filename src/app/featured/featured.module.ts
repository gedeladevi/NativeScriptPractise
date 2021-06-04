import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { FeaturedRoutingModule } from './featured.routing.module'
import { FeaturedComponent } from './featured.component'
import  { CommonModule} from '../commonheader/common.module'

@NgModule({
  imports: [NativeScriptCommonModule, FeaturedRoutingModule,CommonModule],
  declarations: [FeaturedComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeaturedModule {}