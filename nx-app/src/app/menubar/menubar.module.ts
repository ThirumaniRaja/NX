import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [MenubarComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  exports: [MenubarComponent]
})
export class MenubarModule { }
