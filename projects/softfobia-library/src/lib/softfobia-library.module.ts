import { NgModule } from '@angular/core';
import { SoftfobiaLibraryComponent } from './softfobia-library.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    SoftfobiaLibraryComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SoftfobiaLibraryComponent,
  ]
})
export class SoftfobiaLibraryModule { }
