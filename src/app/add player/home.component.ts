import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form_data = {
    unique_id: "",
    display_name: "",
    isMember: false,
    email: "",
    first_name: "",
    last_name: "",
    gender: "",
    socialDetails: {
      facebook_id: "",
      facebook_url: "",
      twitter_handle: "",
      twitter_id: ""
    },
    team: ""
  }

  teams = []

  constructor(private player_service: PlayersService) { }

  submitData() {
    if (this.form_data.unique_id != "" && this.form_data.display_name != "" && this.form_data.isMember != false && this.form_data.email != "" && this.form_data.first_name != "" && this.form_data.last_name != "" && this.form_data.gender != "" && this.form_data.team != "") {
      this.player_service.sendPlayerData(this.form_data)
      alert("Player added successfully")
    } else {
      alert("Please fill all Basic Details and Teams fields")
    }
  }

  checkCheckBox() {
    this.form_data.isMember = !this.form_data.isMember
  }

  chooseGender(event) {
    this.form_data.gender = event.target.value
  }

  selectChange(val) {
    this.form_data.team = val.target.value
  }

  getTeamData() {
    this.player_service.getTeamData().subscribe((data) => {
      this.teams = data
    })
  }

  ngOnInit() {
    this.getTeamData()
  }

}