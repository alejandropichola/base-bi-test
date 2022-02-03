import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public firstName: string = '';

  constructor() {
    console.log(process.env);
  }

  ngOnInit(): void {
    console.log('test');
  }
}
