import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatGridListModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
