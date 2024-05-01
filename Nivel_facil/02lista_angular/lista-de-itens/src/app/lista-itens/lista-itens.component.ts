import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent implements OnInit {

  @Input()
  itens: string[] = [];
  novoItem: string = '';

  constructor() { }

  ngOnInit(): void { }

  adicionarItem(): void {
    if (this.novoItem.trim()) {
      this.itens.push(this.novoItem);
      this.novoItem = '';
    }
  }

  removerItem(index: number): void {
    this.itens.splice(index, 1);
  }
}