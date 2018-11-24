import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './component/place.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlaceComponent],
  exports:[PlaceComponent]
})
export class PlacesModule { }
