import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  team_data = {
    team_name: ""
  }


  constructor(private player_service: PlayersService) { }

  addTeam() {
    if (this.team_data.team_name != "") {
      this.player_service.addTeamData(this.team_data)
      alert("Team added successfully")
    } else {
      alert("Please fill Team data")
    }
  }

  ngOnInit() {
  }

}
