import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string =  'http://loiane.com';
  
  cursoAngular: boolean = true;
  
  urlImagem: string = "http://lorempixel.com.br/400/400/?1";

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver:boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('botão clicado')
  }

  onKeyUp(evento: KeyboardEvent){

    this.valorAtual = ((<HTMLInputElement>evento.target).value);

  }

  salvarValor(evento: any){

    this.valorSalvo = ((<HTMLInputElement>evento.target).value);

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  

}
