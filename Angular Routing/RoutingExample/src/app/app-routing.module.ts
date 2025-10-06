import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobComponent } from './find-job/find-job.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { PostJobComponent } from './post-job/post-job.component';

const routes: Routes = [
   { path: '', redirectTo: 'find-job', pathMatch: 'full' },
  { path: 'find-job', component: FindJobComponent },
  { path: 'interviews', component: InterviewListComponent },
  { path: 'post-job', component: PostJobComponent },
  { path: '**', redirectTo: 'find-job' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
