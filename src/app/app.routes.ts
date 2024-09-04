import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterResolver } from './characters/characters.resolver';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterDetailResolver } from './character-detail/character-detail.resolver';

export const routes: Routes = [
  {
    path: 'home',
    component: CharactersComponent,
    resolve: { characters: CharacterResolver },
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
    resolve: { character: CharacterDetailResolver },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
