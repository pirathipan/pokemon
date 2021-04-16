import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-pokemon',
    templateUrl: './add-pokemon.component.html',
})

export class AddPokemonComponent implements OnInit {

    uniqueId = Math.random();

    pokemon: any = {
        id: this.uniqueId,
        name: '',
        hp: '',
        cp: '',
        picture: "",
        types: [],
        created: new Date()
    }

    src: any = null;

    constructor() {
    }

    ngOnInit(): void {
    }
}
