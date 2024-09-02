import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="bg-purple-400 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a href="/home" class="text-white text-lg font-bold">Rick and Morty App</a>
        <div>
          <a href="/" class="text-white mr-4">Log Out</a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {}
