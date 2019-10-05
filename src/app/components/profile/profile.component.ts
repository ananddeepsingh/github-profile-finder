import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  repos: any=[];
  username: string;

  constructor(private _githubService: GithubDataService) { }

  ngOnInit() {
  }

  searchUser() {
    this._githubService.updateUser(this.username);

    this._githubService.getUser()
    .subscribe(res => {
      this.user = res;
    });


    this._githubService.getRepos()
    .subscribe(res => {
      this.repos = res;
    });
  }

}

