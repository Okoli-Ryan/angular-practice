import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendMentorOneComponent } from './pages/frontend-mentor-one/frontend-mentor-one.component';

const routes: Routes = [
  {path: 'frontend-mentor-1', component: FrontendMentorOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
