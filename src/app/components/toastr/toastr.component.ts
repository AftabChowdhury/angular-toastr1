import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

  }
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
