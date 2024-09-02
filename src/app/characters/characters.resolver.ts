// characters.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Character, CharacterRepository } from '../repositories/character.repository';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, expand, reduce } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CharacterResolver implements Resolve<Observable<Character[]>> {
  constructor(private characterRepo: CharacterRepository, private http: HttpClient) {}

  resolve(): Observable<Character[]> {
    const initialUrl = 'https://rickandmortyapi.com/api/character';

    return this.fetchCharacters(initialUrl).pipe(
      tap((characters) => this.characterRepo.updateCharacters(characters)),
      tap(() => console.log('Characters loaded'))
    );
  }

  private fetchCharacters(url: string): Observable<Character[]> {
    return this.http.get<any>(url).pipe(
      expand(data => data.info.next ? this.http.get<any>(data.info.next) : of()),
      reduce((acc, data) => acc.concat(data.results), [] as Character[])
    );
  }
}
