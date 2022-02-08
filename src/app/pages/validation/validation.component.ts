import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { UserInterface } from '@/app/interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputType } from '@/app/types/inputType';
import { AppState } from '@/app/app.state';
import * as UserAction from '@/app/store/user.actions';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
})
export class ValidationComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required], Validators.maxLength(50)],
      dpi: [
        '',
        [
          Validators.required,
          Validators.pattern(InputType.number),
          Validators.minLength(13),
          Validators.maxLength(13),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(InputType.number),
          Validators.minLength(8),
          Validators.maxLength(8),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(InputType.email),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  nextStep() {
    const payload: UserInterface = { ...this.form.value, photo: '' };
    this.store.dispatch(UserAction.ADD_USER({ payload }));
    this.router.navigate(['selfie']);
  }
}
