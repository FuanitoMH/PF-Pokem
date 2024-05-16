import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ObservableLoginService } from '../../services/observable-login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // LOGIN
  loginForm: any;

  constructor(private fb: FormBuilder, private loginObservable: ObservableLoginService, public router: Router) {
    this.loginForm = this.fb.group(
      {
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(4)])
      }
    );
  }

  // ngOnInit(): void {
  //   this.loginObservable.loginObs.subscribe((valor: boolean) => { console.log('loginObs: ', valor) });
  // }

  validateUser(){
    if(!this.loginForm.invalid && this.loginForm.get('username').value == 'admin' && this.loginForm.get('password').value == 'pass'){
      this.loginObservable.updateLoginObs(true);
      this.router.navigateByUrl('pokemons');
      return;
    }
    alert('Error: Usuario o contraseña incorrectos');
    return;
  }

}
