import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  sendPlayerData(data: any) {
    this.http.post('http://localhost:3000/players', JSON.stringify(data), this.httpOptions).toPromise()
  }

  getTeamData():Observable<any> {
    return this.http.get('http://localhost:3000/teams')
  }

  addTeamData(data:any) {
    this.http.post('http://localhost:3000/teams', JSON.stringify(data), this.httpOptions).toPromise()
  }
}
