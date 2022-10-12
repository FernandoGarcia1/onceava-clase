import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public pokemon$ : Observable<any>;
  public pokemonName : string ='';
  constructor(private apiService : ApiService) {
    this.pokemon$ = apiService.searchPokemon('ditto').pipe(
      tap(console.log)
    )
  }

  ngOnInit(): void {
    
  }

  onChange(){
    console.log(this.pokemonName)
    this.pokemon$ = this.apiService.searchPokemon(this.pokemonName)
  }

}
