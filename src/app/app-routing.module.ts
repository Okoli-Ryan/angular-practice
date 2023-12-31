import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendMentorOneComponent } from './pages/frontend-mentor-one/frontend-mentor-one.component';
import { FrontendMentorTwoComponent } from './pages/frontend-mentor-two/frontend-mentor-two.component';
import { FrontendMentorThreeComponent } from './pages/frontend-mentor-three/frontend-mentor-three.component';
import { FrontendMentorFourComponent } from './pages/frontend-mentor-four/frontend-mentor-four.component';
import { FrontendMentorFiveComponent } from './pages/frontend-mentor-five/frontend-mentor-five.component';
import { InteractiveRatingComponent } from './pages/interactive-rating/interactive-rating.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqAccordionComponent } from './pages/faq-accordion/faq-accordion.component';
import { SocialProofComponent } from './pages/social-proof/social-proof.component';
import { AgeCalculatorComponent } from './pages/age-calculator/age-calculator.component';
import { IntroSignupFormComponent } from './pages/intro-signup-form/intro-signup-form.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'frontend-mentor-1', component: FrontendMentorOneComponent},
  {path: 'frontend-mentor-2', component: FrontendMentorTwoComponent},
  {path: 'frontend-mentor-3', component: FrontendMentorThreeComponent},
  {path: 'frontend-mentor-4', component: FrontendMentorFourComponent},
  {path: 'frontend-mentor-5', component: FrontendMentorFiveComponent},
  {path: 'interactive-rating', component: InteractiveRatingComponent},
  {path: 'faq-accordion', component: FaqAccordionComponent},
  {path: 'social-proof', component: SocialProofComponent},
  {path: 'age-calculator', component: AgeCalculatorComponent},
  {path: 'intro-signup', component: IntroSignupFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
