import { createStore, withProps, select } from '@ngneat/elf';
import { Injectable } from '@angular/core';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
}

export interface CharacterState {
  characters: Character[];
}

const initialState: CharacterState = {
  characters: [],
};

@Injectable({ providedIn: 'root' })
export class CharacterRepository {
  private store = createStore({ name: 'character' }, withProps<CharacterState>(initialState));

  characters$ = this.store.pipe(select((state) => state.characters));

  updateCharacters(characters: Character[]) {
    this.store.update((state) => ({
      characters: characters,
    }));
  }
}
