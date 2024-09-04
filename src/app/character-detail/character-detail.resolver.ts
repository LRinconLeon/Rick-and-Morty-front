import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CharacterRepository, Character } from '../repositories/character.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterDetailResolver implements Resolve<Observable<Character>> {
  constructor(private characterRepo: CharacterRepository) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Character> {
    const characterId = route.paramMap.get('id');
    if (characterId) {
      return this.characterRepo.fetchCharacterDetails(characterId);
    }
    throw new Error('Character ID is not provided');
  }
}
