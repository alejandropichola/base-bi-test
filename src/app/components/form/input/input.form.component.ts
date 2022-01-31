import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.form.component.html',
})
export class InputTextFormComponent {
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

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  updateValue (value: string): void {
    this.valueChange.emit(value);
  }
}
