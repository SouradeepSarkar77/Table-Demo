import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineEditingOneComponent } from './inline-editing-one/inline-editing-one.component';
import { InlineEditingTwoComponent } from './inline-editing-two/inline-editing-two.component';
import { TableFromServiceComponent } from './table-from-service/table-from-service.component';

const routes: Routes = [
  {
    path:'',
    component:InlineEditingOneComponent
  },
  {
    path:'way-1',
    component:InlineEditingOneComponent
  },
  {
    path:'way-2',
    component:InlineEditingTwoComponent
  },
  {
    path:'way-3',
    component:TableFromServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
