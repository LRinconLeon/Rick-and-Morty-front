import { Component, inject } from '@angular/core';
import { CharacterRepository } from '../repositories/character.repository';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html'
})

export class CharactersComponent {
  characterRepo = inject(CharacterRepository);
  characters$ = this.characterRepo.characters$;
}
