import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { SearchRoutingModule } from './search.routing.module'
import { SearchComponent } from './search.component'
import  { CommonModule} from '../commonheader/common.module'

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule,CommonModule],
  declarations: [SearchComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
