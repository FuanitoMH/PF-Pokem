import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { ObservableLoginService } from '../../services/observable-login.service';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  login: boolean = false;

  constructor(private loginObservable: ObservableLoginService, public router: Router) { }

  ngOnInit(): void {
    this.loginObservable.loginObs.subscribe((valor: boolean) => { this.login = valor });
  }

  logOut(){
    this.loginObservable.updateLoginObs(false);
    this.router.navigateByUrl('');
  }
}
