import { Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { authGuard } from './components/guard/auth.guard';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'pokemons', component: PokemonsComponent, canActivate: [authGuard]},
    { path: '**', redirectTo: '' }
];
