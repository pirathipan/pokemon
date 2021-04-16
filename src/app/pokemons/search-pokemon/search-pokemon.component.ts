import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../donnees-pokemons/pokemon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: 'search-pokemon.component.html'
})
export class SearchPokemonComponent implements OnInit {
  pokemonsData: any[];
  pokemons: any = [];
  filterBy;
  isHere = true;

  constructor(private pokemonService: PokemonService, private route: Router) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.isHere = false;
    this.pokemonService.getPokemons()
      .subscribe(pokemons => {
        console.log(pokemons);
        this.pokemons = pokemons;
        this.pokemonsData = [...this.pokemons];
      });
  }

  filter(): void{
    this.pokemonsData = [...this.pokemons.filter(pkm => pkm.name.toLowerCase().includes(this.filterBy))];
    this.isHere = true;
    console.log(this.pokemonsData);
  }
  selectedPokemon(pokemon: Pokemon): void{
    const link = ['/pokemon', pokemon.id];
    this.route.navigate(link);
  }

  // tslint:disable-next-line:typedef

}
