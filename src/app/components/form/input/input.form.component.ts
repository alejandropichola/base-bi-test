import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { InputType } from '@/app/types/inputType';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.form.component.html',
})
export class InputTextFormComponent implements OnInit {
  @Input()
  value: string = '';
  @Input()
  label: string = '';
  @Input()
  placeholder: string = '';
  @Input()
  name: string = '';
  @Input()
  required: boolean = false;
  @Input()
  isEmail: boolean = false;
  @Input()
  type: string = 'text';
  @Input()
  icon: string = '';
  @Input()
  rules: string = InputType.string;
  @Input()
  parentForm!: FormGroup;

  formGroup: FormGroup = new FormGroup({});

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  constructor(private form: FormBuilder) {
  }

  updateValue (value: string): void {
    this.valueChange.emit(value);
  }

  getRule(rule: string): InputType {
    switch(rule) {
      case 'email':
        return InputType.email
      case 'number':
        return InputType.number
      default:
        return InputType.string
    }
  }

  getError(error: any) {
    console.log(error)
  }

  ngOnInit(): void {
    this.parentForm.addControl(this.name, this.formGroup);
  }
}
