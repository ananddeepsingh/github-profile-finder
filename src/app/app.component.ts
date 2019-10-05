import { Component } from '@angular/core';
import { GithubDataService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GithubDataService ]
})
export class AppComponent {
  
  
}
