import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World!';
  apiUrl = environment.apiUrl;
  constructor() {
    console.log('🚀 ~ AppComponent ~ apiUrl:', this.apiUrl);
  }
}
