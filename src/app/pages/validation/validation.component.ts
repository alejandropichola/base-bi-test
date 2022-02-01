import { Component } from '@angular/core';

import { UserInterface } from '@/app/interfaces/user';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {
  user: UserInterface = {
    firstName: '',
    lastName: '',
    dpi: '',
    phone: '',
    email: ''
  }

  constructor() { }

  nextStep() {
    console.log('test')
  }
}
