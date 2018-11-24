import { NgModule, ModuleWithProviders } from '@angular/core';
import { GloballocalstorageService } from '../globallocalstorage.service';
import { HttpService } from '../../shared/http.service'
import { DisablecontrolDirective } from '../disablecontrol.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicformbuilderService } from '../dynamicformbuilder.service';
import { FileextensioncheckePipe } from '../sharedpipe/fileextensionchecke.pipe';
import { MessagelangtransformPipe } from '../sharedpipe/messagelangtransform.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from '../carousel/carousel.component';
import { SafehtmlPipe } from '../sharedpipe/safehtml.pipe'
import { SafeurlPipe } from '../sharedpipe/safeurl.pipe';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  declarations: [

    DisablecontrolDirective, FileextensioncheckePipe,
    MessagelangtransformPipe, CarouselComponent, SafehtmlPipe, SafeurlPipe

  ],

  providers: [

    GloballocalstorageService, HttpService, DynamicformbuilderService

  ],

  exports: [

    DisablecontrolDirective, FileextensioncheckePipe, CarouselComponent, SafehtmlPipe, SafeurlPipe
  ]

})
export class ShareModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule,
      providers: [GloballocalstorageService, HttpService],

    };
  }

}
