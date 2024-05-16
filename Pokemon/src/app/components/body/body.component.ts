import { Component, importProvidersFrom } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [LoginComponent, PokemonsComponent, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
  
}
