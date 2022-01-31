import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.form.component.html',
})
export class CheckboxFormComponent {
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

  @Output()
  changeValue: EventEmitter<string> = new EventEmitter();

  updateValue (value: HTMLInputElement): void {
    this.changeValue.emit(value.value);
  }
}
