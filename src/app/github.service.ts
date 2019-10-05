import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';


@Injectable()
export class GithubDataService {

  private username: string = "ananddeepsingh";
  private client_id = '842830fcb5c370d8ae9f';
  private client_secret = '09d5fa41dbe104278979f9fdb2a0db46ff2adb4a';
  private githubBaseURL = 'https://api.github.com';


  constructor(private _http: Http) {
    this.username = 'ananddeepsingh';
  }

  getUser() {
    return this._http.get(`https://api.github.com/users/${this.username}?client_id=${this.client_id}?client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }

  getReadMeFile(username: string, repoName: string) {
    let header = new Headers(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'access-control-allow-origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
    );
    let url = `https://jsonp.afeld.me/?url=https://raw.githubusercontent.com/${username}/${repoName}/master/README.md`;

    return this._http.get(url, {
      'headers': header
    })
      .map(res => res.json());

  }

}
