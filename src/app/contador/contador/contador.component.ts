import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{ titulo }}</h1>
    <h3><strong> {{base}} </strong></h3>
    <button (click)="acumular(base);"> + {{base}}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base); "> -{{base}}</button>
    `
})

export class ContadorComponent{
    titulo: string = 'Titulo de la aplicacón';
    numero: number = 10;
    base: number = 5;
    /*
     sumar (isSumar: boolean) {
       if (isSumar){
         this.numero +=1;
       } else {this.numero -=1; } 
     }*/
     acumular (valor: number ){
       this.numero +=valor;
     }

}