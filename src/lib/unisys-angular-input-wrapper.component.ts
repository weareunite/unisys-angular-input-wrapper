import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'lib-unisys-angular-input-wrapper',
  templateUrl: './unisys-angular-input-wrapper.component.html',
  styleUrls: ['./unisys-angular-input-wrapper.component.scss']
})
export class UnisysAngularInputWrapperComponent implements OnInit {
  @Input('translation') translation;
  @Input() group: FormGroup;
  @Input('customClass') customClass: string = '';
  @Input('fieldName') fieldName: string = '';

  public field;

  constructor(){
  }

  ngOnInit(){
    this.fieldName != '' ? this.field = this.group.controls[this.fieldName] : this.field = null ;
  }

  public isString(val){
    return typeof val === 'string';
  }

}
