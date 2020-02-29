import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  players: any = []

  constructor(private player_service: PlayersService) { }

  getPlayerData() {
    this.player_service.getPlayerData().subscribe((data) => {
      this.players = data
    })
  }

  deletePlayer(id) {
    this.player_service.deletePlayerData(id).subscribe(() => {
      this.players = this.players.filter((item) => item.id != id)
    })
  }

  ngOnInit() {
    this.getPlayerData()
  }

}
