import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrComponent } from './components/toastr/toastr.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ToastrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      disableTimeOut: false,
      timeOut: 5000,
      extendedTimeOut: 1000,
      enableHtml: false,
      progressBar: true,
      toastClass: 'ngx-toastr',
      positionClass: 'toast-top-center',
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      easing: 'ease-in',
      easeTime: 300,
      tapToDismiss: true,
      onActivateTick: false,
      progressAnimation: 'decreasing',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
