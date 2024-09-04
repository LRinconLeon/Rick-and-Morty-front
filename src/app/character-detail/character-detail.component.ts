import { Component, inject } from '@angular/core';
import { CharacterRepository } from '../repositories/character.repository';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
  characterRepo = inject(CharacterRepository);
  character$ = this.characterRepo.selectedCharacter$;
}
