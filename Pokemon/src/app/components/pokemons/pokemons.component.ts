import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from "@angular/router";

export interface DialogData {
  animal: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit{
  pokemon_values: any[] = [];
  displayedColumns: string[] = ['name', 'url'];

  name: string = '';
  url: string = '';

  constructor(private pokemon: PokemonService, public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }
  
  getPokemons(): void{
    this.pokemon.getPokemons('https://pokeapi.co/api/v2/pokemon').subscribe(
      (items: any) => {
        console.log(items.results);
        this.pokemon_values = items.results; 
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, url: this.url},
    });

    dialogRef.afterClosed().subscribe(result => {
      // alert('res ' + result.name +' '+ result.url);
      this.pokemon_values.push(result);
    });
  }

  getIndexByName(nombre: string) {
    for (let i = 0; i < this.pokemon_values.length; i++) {
        if (this.pokemon_values[i].name === nombre) {
            return i; // Devuelve el índice del objeto con el nombre buscado
        }
    }
    return -1; // Devuelve -1 si no se encontró el nombre en el arreglo
}

  deletePokemon(name:string): void {
    let index = this.getIndexByName(name);
    this.pokemon_values.splice(index, 1);
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
  ) {}

  // post_pokemon(): void {
  //   this.dialogRef.close();
  // }
}