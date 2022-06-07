import { Component } from '@angular/core';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Hulk','Iroman','Thor'];
  heroedelete: string="";
  //seBorroHeroe: boolean=false;
  
  borrarHeroe(){
   this.heroedelete  = this.heroes.shift() || '';
   /*if(this.heroedelete !=''){
     this.seBorroHeroe = true;
   }else{
    this.seBorroHeroe = false;
   }*/
  }
 
}
