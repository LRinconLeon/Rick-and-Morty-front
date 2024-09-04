import { Component, inject } from '@angular/core';
import { CharacterRepository } from '../repositories/character.repository';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  characterRepo = inject(CharacterRepository);
  characters$ = this.characterRepo.characters$;
  router = inject(Router);

  goToDetail(id: number) {
    this.router.navigate(['character', id]);
  }
}
