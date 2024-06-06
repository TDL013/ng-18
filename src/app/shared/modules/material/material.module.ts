import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
