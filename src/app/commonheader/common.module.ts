import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { CommonheaderComponent } from './commonheader.component'



@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [CommonheaderComponent],
  exports: [ CommonheaderComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CommonModule {}
