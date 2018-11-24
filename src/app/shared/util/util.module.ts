import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Utility} from './util';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ Utility ]
})
export class UtilModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: UtilModule,
          providers: [Utility]
        };
      }
}
