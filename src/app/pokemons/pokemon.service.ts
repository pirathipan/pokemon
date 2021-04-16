import {Injectable} from '@angular/core';

import {LISTPOKEMONS} from './donnees-pokemons/mock-pokemons';
import {Pokemon} from './donnees-pokemons/pokemon';
import {Router} from '@angular/router';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon: any = null;
  private pokemonsUrl = 'api/pokemons';
  selectedFile: File;
  // @ts-ignore
  imgFile: LISTPOKEMONS;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }


  // tslint:disable-next-line:typedef
  private static log(log: string) {
    console.log(log);
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed : ${error.message} `);
      return of(result as T);
    };
  }

  // Retourne la liste des pokemons
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon []>(this.pokemonsUrl).pipe(
      tap(_ => PokemonService.log(`fetched pokemons`)),
      // @ts-ignore
      catchError(this.handleError(`getPokemons`, []))
    );
  }

  // tslint:disable-next-line:typedef
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      tap(_ => console.log(`fetched pokemon id = ${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id =${id}`))
    );


  }

  getPokemonsTypes(): string[] {
    return [
      'Plantes',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Spectre'
    ];
  }

  goBack(pokemon?: Pokemon): void {
    let link: any = [];
    if (pokemon) {
      link = ['/pokemon', pokemon.id];
    } else {
      link = ['/pokemon/all'];
    }
    this.router.navigate(link);
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => PokemonService.log(`updated pokemon id = ${pokemon.id}`)),
      catchError(this.handleError<any>('UpdatedPokemon error'))
    );
  }

  // @ts-ignore
  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(_ => PokemonService.log(`deleted pokemon id = ${pokemon.id}`)),
      catchError(this.handleError<any>('deletePokemon error'))
    );
  }

  // tslint:disable-next-line:typedef
  uploadFile() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    console.log(uploadData);
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('img/', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }
}
