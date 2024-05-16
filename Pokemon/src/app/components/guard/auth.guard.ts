import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ObservableLoginService } from '../../services/observable-login.service';

@Injectable({ providedIn: 'root' })
class AuthenticatedLogin{

  activateRoute(rute: string, token: boolean): boolean{
    console.log('rute: ', rute, ' login: ', token);
    const route = inject(Router)
    if (token == true){
      return true;
    }
    route.navigate(['']);
    return false;
  }

}
export const authGuard: CanActivateFn = (route, state) => {
  const token = inject(ObservableLoginService).getLoginObs();
  return inject(AuthenticatedLogin).activateRoute(route.url.toString(), token);
};
