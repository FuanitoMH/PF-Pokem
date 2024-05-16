import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
    'Content-Type': 'application/json'
    }
  )
};


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemons(url: string): Observable<object>{
    return this.http.get(url, httpOptions);
  }
}
