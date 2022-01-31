import { Component, OnInit } from '@angular/core';
import { environment } from '@/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public version = process.env.NG_APP_HOST_URL;
  public firstName: string = '';

  constructor() {
    console.log(process.env);
  }

  ngOnInit(): void {
    console.log('test');
  }
}
