import { Pipe, PipeTransform } from '@angular/core';
import {LISTPOKEMONS} from '../pokemons/donnees-pokemons/mock-pokemons';
import { Pokemon } from '../pokemons/donnees-pokemons/pokemon';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(items: Pokemon[], searchPokemon: string): Pokemon[]{
    if (!items) {
      // @ts-ignore
      return [];
    }
    if (!searchPokemon) {
      // @ts-ignore
      return items;
    }

    searchPokemon = searchPokemon.toString().toLowerCase();

    // @ts-ignore
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchPokemon);
    });
  }

}
