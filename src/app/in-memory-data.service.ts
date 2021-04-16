import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {LISTPOKEMONS} from './pokemons/donnees-pokemons/mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  // tslint:disable-next-line:typedef
  createDb() {
    const pokemons = LISTPOKEMONS;
    return { pokemons };
  }
}
