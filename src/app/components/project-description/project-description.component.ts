import { GithubDataService } from './../../github.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css']
})
export class ProjectDescriptionComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private _githubService: GithubDataService
  ) { }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username');
    let reponame = this.route.snapshot.paramMap.get('reponame');
    console.log(username, reponame)
    
    this._githubService.getReadMeFile(username, reponame)
    .subscribe(res => {
      // this.user = res;
      console.log(res)
    });
  }

}
