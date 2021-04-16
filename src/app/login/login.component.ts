import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PokemonService} from '../pokemons/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }


  onLogin(): void {
    if (this.loginForm.invalid) {
      return ;
    }
    alert('Connecter');
    this.router.navigate(['/pokemon/all']);
    this.loginForm.reset();
  }
}
