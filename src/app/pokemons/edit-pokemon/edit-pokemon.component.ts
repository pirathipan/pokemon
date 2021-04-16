import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../donnees-pokemons/pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemons: Pokemon[];
  pokemon: any = null;
  urlLink: string;
  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.pokemonService.getPokemon(id).subscribe(
      pokemon => {
        this.pokemon = pokemon ;
      })
    ;
  }
  // tslint:disable-next-line:typedef
  selectedFile(event: any) {
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        this.urlLink = event.target.result;
      };
    }
  }

}
