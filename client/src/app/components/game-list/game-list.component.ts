import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  value: string;
  name: string;
  mivalor: string;
  games : any = [];
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
    this.value = 'click';
    this.name = 'jli';
    this.mivalor = 'hola';
  }
  getGames(){
    this.gamesService.getGames()
    .subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    )
    
  }
  deleteGame(id: string){
    this.gamesService.deleteGame(id)
    .subscribe(
      res => {
        console.log(res),
        this.getGames()
      },
      err => console.log(err)
    )
  }
  editGame(id: string){
    console.log(id);
  }
}
