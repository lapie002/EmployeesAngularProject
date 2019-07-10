import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttpClientGetDemo';

  constructor(private httpClient: HttpClient) {}

  get_products(){
    this.httpClient.get()
  }

}
