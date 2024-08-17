import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoreComponent } from './score/score.component';
import { FeaturesComponent } from './features/features.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PlacementsComponent } from './placements/placements.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'score',component:ScoreComponent},
  {path:'features',component:FeaturesComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'placements',component:PlacementsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
