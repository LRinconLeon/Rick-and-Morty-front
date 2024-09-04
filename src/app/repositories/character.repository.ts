import { createStore, withProps, select } from '@ngneat/elf';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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
  location: {
    name: string;
    url: string;
  }
  image: string;
}

export interface CharacterState {
  characters: Character[];
  selectedCharacter: Character | null;
}

const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
};

@Injectable({ providedIn: 'root' })
export class CharacterRepository {
  private store = createStore({ name: 'character' }, withProps<CharacterState>(initialState));
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  characters$ = this.store.pipe(select((state) => state.characters));
  selectedCharacter$ = this.store.pipe(select((state) => state.selectedCharacter));

  constructor(private http: HttpClient) {}

  updateCharacters(characters: Character[]) {
    this.store.update((state) => ({
      ...state,
      characters
    }));
  }

  updateSelectedCharacter(character: Character) {
    this.store.update((state) => ({
      ...state,
      selectedCharacter: character,
    }));
  }

  fetchCharacterDetails(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`).pipe(
      tap((character) => this.updateSelectedCharacter(character))
    );
  }
}
