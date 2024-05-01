import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  itens: string[] = ['Item 1', 'Item 2', 'Item 3'];
}
