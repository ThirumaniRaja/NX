import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContentComponent } from './view-content/view-content.component';
import { MainContentComponent } from './main-content/main-content.component';


const routes: Routes = [
  {path: '', component :  ViewContentComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
