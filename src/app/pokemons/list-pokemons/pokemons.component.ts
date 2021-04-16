import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';

import { PokemonFilterPipe } from '../../pipes/pokemon-filter.pipe';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../pokemon.service';


@Component({
  selector: 'app-list-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {
  search: string;
  pokemonsData: any[];
  pokemons: any = [];
  filterBy;

  constructor(private router: Router, private pokemonService: PokemonService) {
    this.pokemons = [];
   }

  ngOnInit(): void {
   this.pokemonService.getPokemons()
     .subscribe(pokemons => {
       // console.log(pokemons);
       this.pokemons = pokemons;
       this.pokemonsData = [...this.pokemons];
       console.log(this.pokemonsData);
     });
  }

    addPokemon() {
        this.router.navigate(['pokemon/add']);
    }


  // tslint:disable-next-line:typedef


  // tslint:disable-next-line:typedef
  selectedPokemon(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
