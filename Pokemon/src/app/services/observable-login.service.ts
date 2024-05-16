import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableLoginService {
  private token$ = new BehaviorSubject<boolean>(false);
  public loginObs = this.token$.asObservable();

  updateLoginObs(valor: boolean){
      this.token$.next(valor);
  }
  
  getLoginObs(){
    return this.token$.value;
  }

  constructor() { }
}
