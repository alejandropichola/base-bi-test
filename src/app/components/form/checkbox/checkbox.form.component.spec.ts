import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CheckboxFormComponent } from './checkbox.form.component'

describe('CheckboxFormComponent when tested directly', () => {
  let component: CheckboxFormComponent;
  let fixture: ComponentFixture<CheckboxFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxFormComponent],
    });
    fixture = TestBed.createComponent(CheckboxFormComponent);
  });

  it('Should create component', () => {
    expect(fixture.componentInstance).toBeDefined();
  });
});
