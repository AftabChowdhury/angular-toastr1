# AngularToastr
I here implement a toaster library in Angular 9.

I found it very useful and easy to use. It is called `ngx-toastr`. You can get more details about the library from the following
[link](https://www.npmjs.com/package/ngx-toastr).

## Step 1
```
npm install ngx-toastr --save
```

## Step 2
Add it to your angular.json
```
"styles": [
  "styles.scss",
  "node_modules/ngx-toastr/toastr.css"
]
```

## Step 3

Add ToastrModule to app NgModule, make sure you have BrowserAnimationsModule as well
```
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
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
    }), // ToastrModule added
  ],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}

```

## Step 4
Use the `ToastrService` in the required component. I am giving an example of `ToastrComponent`
### HTML
```
<button type="button" class="btn btn-success" (click)="successToastr()">Success</button>
<button type="button" class="btn btn-danger" (click)="errorToastr()">Error</button>
<button type="button" class="btn btn-warning" (click)="warningToastr()">Warning</button>
<button type="button" class="btn btn-info" (click)="infoToastr()">Info</button>
```
### Class `ToastrComponent` 
```
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent {

  constructor(private toastr: ToastrService) { }

  successToastr(){
    this.toastr.success('Success Message', 'Success Title');
  }

  errorToastr(){
    this.toastr.error('Error Message', 'Error Title');
  }

  warningToastr(){
    this.toastr.warning('Warning Message', 'Warning Title');
  }

  infoToastr(){
    this.toastr.info('Info Message', 'Info Title');
  }

}
```
## Keyword
[#AngularToastr](#AngularToastr) [#AngularNotification](#AngularNotification) [#Angular9](#Angular9) 
