import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcuPageRoutingModule } from './calcu-routing.module';

import { CalcuPage } from './calcu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcuPageRoutingModule
  ],
  declarations: [CalcuPage]
})
export class CalcuPageModule {}
