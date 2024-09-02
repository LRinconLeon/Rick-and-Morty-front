import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterResolver } from './characters/characters.resolver';

export const routes: Routes = [
  {
    path: 'home',
    component: CharactersComponent,
    resolve: { characters: CharacterResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
