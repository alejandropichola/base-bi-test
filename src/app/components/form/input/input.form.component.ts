import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.form.component.html',
})
export class InputTextFormComponent implements OnInit {
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
  rules: 'all' | 'string' | 'number' | 'email' = 'all';
  @Input()
  parentForm!: FormGroup;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  @ViewChild('inputElement')
  inputElement!: ElementRef;
  formGroup: FormGroup = new FormGroup({});


  constructor(private form: FormBuilder) {}

  updateValue(value: string): void {
    this.valueChange.emit(value);
  }

  validationValue(event: KeyboardEvent): string | boolean | KeyboardEvent {
    if (this.rules === 'string') {
      const regex = /^(([A-záéíóúñÁÉÍÓÚÑ])|([a-z])+( ))+$/g;
      const { value } = this.inputElement.nativeElement;
      const valueWord = `${value}${event.key}`;

      if (!regex.test(valueWord)) {
        return false;
      } else {
        return event;
      }
    }
    return event;
  }

  ngOnInit(): void {
    this.parentForm.addControl(this.name, this.formGroup);
  }
}
