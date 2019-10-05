import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component'

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'project-desc/:username/:reponame', component: ProjectDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
