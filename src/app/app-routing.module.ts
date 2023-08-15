import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendMentorOneComponent } from './pages/frontend-mentor-one/frontend-mentor-one.component';
import { FrontendMentorTwoComponent } from './pages/frontend-mentor-two/frontend-mentor-two.component';
import { FrontendMentorThreeComponent } from './pages/frontend-mentor-three/frontend-mentor-three.component';
import { FrontendMentorFourComponent } from './pages/frontend-mentor-four/frontend-mentor-four.component';
import { FrontendMentorFiveComponent } from './pages/frontend-mentor-five/frontend-mentor-five.component';
import { InteractiveRatingComponent } from './pages/interactive-rating/interactive-rating.component';

const routes: Routes = [
  {path: 'frontend-mentor-1', component: FrontendMentorOneComponent},
  {path: 'frontend-mentor-2', component: FrontendMentorTwoComponent},
  {path: 'frontend-mentor-3', component: FrontendMentorThreeComponent},
  {path: 'frontend-mentor-4', component: FrontendMentorFourComponent},
  {path: 'frontend-mentor-5', component: FrontendMentorFiveComponent},
  {path: 'interactive-rating', component: InteractiveRatingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
