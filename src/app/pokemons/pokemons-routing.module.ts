import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsComponent} from './list-pokemons/pokemons.component';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {EditPokemonComponent} from './edit-pokemon/edit-pokemon.component';
import {LoginComponent} from '../login/login.component';
import { AddPokemonComponent} from './add-pokemon/add-pokemon.component';

const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    children: [
        { path: 'all', component: PokemonsComponent },
        { path: ':id', component: DetailPokemonComponent},
        { path: 'edit/:id', component: EditPokemonComponent},
        { path: 'add', component: AddPokemonComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
