import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PickingModule } from './picking.module';
import { ShippingModule } from './shipping.module';
import { SharedModule } from './shared.module';

import { AppService } from '../services/app.service';

import { AppRootComponent } from '../components/app-root/app-root.component';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppLoginComponent } from '../components/app-login/app-login.component';

@NgModule({
  declarations: [
    AppRootComponent,
    AppHeaderComponent,
    AppLoginComponent

  ],
  entryComponents: [

],
  imports: [
    BrowserModule,
    SharedModule,
    ShippingModule,
    PickingModule
  ],
  providers: [AppService],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
