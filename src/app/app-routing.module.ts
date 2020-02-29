import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './add player/home.component'
import { CreateTeamComponent } from './create-team/create-team.component'
import { PlayersListComponent } from './players-list/players-list.component'



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: CreateTeamComponent },
  { path: 'players', component: PlayersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
