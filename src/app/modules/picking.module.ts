import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';

import { AppService } from '../services/app.service';

import { ScaninputComponent } from '../components/scaninput/scaninput.component';
import { ListComponent } from '../components/list/list.component';

@NgModule({
  declarations: [
    ScaninputComponent,
    ListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ScaninputComponent,
    ListComponent],
  providers: [],
})
export class PickingModule { }
