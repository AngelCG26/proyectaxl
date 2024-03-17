import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcuPage } from './calcu.page';

const routes: Routes = [
  {
    path: '',
    component: CalcuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcuPageRoutingModule {}
