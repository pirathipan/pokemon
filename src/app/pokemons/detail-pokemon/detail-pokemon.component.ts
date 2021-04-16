import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';


import { ActivatedRoute, Router } from '@angular/router';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons() .subscribe(pokemons => {
      this.pokemons = pokemons;
    });
    const id = +this.route.snapshot.params.id;
    this.pokemonService.getPokemon(id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

  goBack(): void {
     this.pokemonService.goBack();
  }

  goEdit(pokemon: Pokemon): void {
    const link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

  // tslint:disable-next-line:typedef
  delete(pokemon: Pokemon) {
   this.pokemonService.deletePokemon(pokemon).subscribe(() => this.goBack());
  }
}
